import { retrieveData, retrieveDataById, updateData } from "@/lib/firebase/service";
import { User } from "@/types/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (id) {
      const user = await retrieveDataById("users", id);
      if (user) {
        return NextResponse.json({
          status: 200,
          message: "Success",
          data: user,
        });
      }
  
      return NextResponse.json({
        status: 404,
        message: "Not Found",
        data: {},
      });
    }
  
    const users = await retrieveData("users");
    return NextResponse.json({
      status: 200,
      message: "Success",
      data: users,
    });
}

export async function PUT(request: NextRequest) {
    const formData: User = await request.json();
  
    if (formData.id) {
      await updateData("users", formData.id, formData);
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