import { addData, deleteData, retrieveData, retrieveDataById, updateData } from "@/lib/firebase/service";
import { Experience } from "@/types/experience";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const experience = await retrieveDataById("experiences", id);
    if (experience) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: experience,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const experiences = await retrieveData("experiences");
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: experiences,
  });
}

export async function POST(request: NextRequest) {
  const formData: Experience = await request.json();

  const response = await addData("experiences", formData);
  return NextResponse.json({
    status: 201,
    message: "Created",
    data: response,
  });
}

export async function PUT(request: NextRequest) {
  const formData: Experience = await request.json();

  if (formData.id) {
    await updateData("experiences", formData.id, formData);
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
    await deleteData("experiences", id);
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
