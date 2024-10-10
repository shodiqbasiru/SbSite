import { addData, retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { Skill } from "@/types/skill";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
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
  