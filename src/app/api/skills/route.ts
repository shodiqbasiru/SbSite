import {
  addData,
  deleteData,
  retrieveData,
  retrieveDataById,
  updateData,
} from "@/lib/firebase/service";
import { Skill } from "@/types/skill";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const skill = await retrieveDataById("skills", id);
    if (skill) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: skill,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const skills = await retrieveData("skills");
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: skills,
  });
}

export async function POST(request: NextRequest) {
  const formData: Skill = await request.json();

  const response = await addData("skills", formData);
  return NextResponse.json({
    status: 201,
    message: "Created",
    data: response,
  });
}

export async function PUT(request: NextRequest) {
  const formData: Skill = await request.json();

  if (formData.id) {
    await updateData("skills", formData.id, formData);
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
    await deleteData("skills", id);
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