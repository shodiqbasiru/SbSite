import {
  addData,
  deleteData,
  retrieveData,
  retrieveDataById,
  updateData,
} from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const education = await retrieveDataById("educations", id);
    if (education) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: education,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const educations = await retrieveData("educations");
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: educations,
  });
}

export async function POST(request: NextRequest) {
  const formData = await request.json();

  const response = await addData("educations", formData);
  return NextResponse.json({
    status: 201,
    message: "Created",
    data: response,
  });
}


export async function PUT(request: NextRequest) {
    const formData = await request.json();
    
    if (formData.id) {
        await updateData("educations", formData.id, formData);
        return NextResponse.json({
        status: 200,
        message: "Updated",
        data: formData,
        });
    } else {
        return NextResponse.json({
        status: 400,
        message: "Bad Request",
        data: {},
        });
    }
}

export async function DELETE(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
      await deleteData("educations", id);
      return NextResponse.json({
        status: 200,
        message: "Deleted",
        data: {},
      });
    }
  
    return NextResponse.json({
      status: 400,
      message: "Bad Request",
      data: {},
    });
  }
  