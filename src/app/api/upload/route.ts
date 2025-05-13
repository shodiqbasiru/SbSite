import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { Timestamp } from "firebase/firestore";

const STORAGE_DIR = path.join(process.cwd(), "public", "storage");

export async function POST(req: NextRequest) {
  try {
    await createAndSetPermissions(STORAGE_DIR);

    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const oldFilename = formData.get("oldFilename") as string | null;

    if (!file) {
      return NextResponse.json({
        status: 400,
        message: "No file uploaded",
        data: {},
      });
    }

    if (oldFilename) {
      const oldFilePath = path.join(STORAGE_DIR, oldFilename);
      console.log(`Old file path: ${oldFilePath}`);
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const uniqueFileName = generateUniqueFileName(file.name);
    const filePath = path.join(STORAGE_DIR, uniqueFileName);

    fs.writeFileSync(filePath, buffer);
    fs.chmodSync(filePath, 0o644);

    return NextResponse.json({
      status: 201,
      message: "File uploaded successfully",
      data: {
        filename: uniqueFileName,
      },
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
      data: {},
    });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const filename = searchParams.get("filename");

    if (!filename) {
      return NextResponse.json({
        status: 400,
        message: "Filename is required",
        data: {},
      });
    }

    const filePath = path.join(STORAGE_DIR, filename);

    console.log(`File path for deletion: ${filePath}`);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return NextResponse.json({
        status: 200,
        message: "File deleted successfully",
        data: {},
      });
    } else {
      return NextResponse.json({
        status: 404,
        message: "File not found",
        data: {},
      });
    }
  } catch (error) {
    console.error("Error deleting file:", error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error",
      data: {},
    });
  }
}

async function createAndSetPermissions(dir: string) {
  try {
    fs.mkdirSync(dir, { recursive: true });
    fs.chmodSync(dir, 0o755);
  } catch (error) {
    console.error("Error creating directory or setting permissions:", error);
    throw error;
  }
}

function generateUniqueFileName(originalName: string): string {
  const timestamp = Timestamp.now().toMillis();
  const random = Math.random().toString(36).substring(2, 15);
  const extension = path.extname(originalName);
  return `${timestamp}-${random}${extension}`;
}
