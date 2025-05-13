import {
  addData,
  deleteData,
  retrieveData,
  retrieveDataById,
  updateData,
} from "@/lib/firebase/service";
import { Portfolio } from "@/types/portfolio";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const portfolio = await retrieveDataById("portfolios", id);
    if (portfolio) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: portfolio,
      });
    }

    return NextResponse.json({
      status: 404,
      message: "Not Found",
      data: {},
    });
  }

  const portfolios = await retrieveData("portfolios");
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: portfolios,
  });
}

export async function POST(request: NextRequest) {
  const formData: Portfolio = await request.json();

  const response = await addData("portfolios", formData);
  return NextResponse.json({
    status: 201,
    message: "Created",
    data: response,
  });
}

export async function PUT(request: NextRequest) {
  const formData: Portfolio = await request.json();

  if (formData.id) {
    await updateData("portfolios", formData.id, formData);
    return NextResponse.json({
      status: 200,
      message: "Updated",
      data: formData,
    });
  } else {
    return NextResponse.json({
      status: 400,
      message: "Bad Request: ID is required",
      data: {},
    });
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    await deleteData("portfolios", id);
    return NextResponse.json({
      status: 200,
      message: "Deleted",
      data: {},
    });
  } else {
    return NextResponse.json({
      status: 400,
      message: "Bad Request: ID is required",
      data: {},
    });
  }
}
