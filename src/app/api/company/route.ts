import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: any) {
  try {
    const data = await request.json();
    console.log(data);
    const {
      company_name,
      is_active,
      quota,
      company_level_id,
      business_type,
      address,
      tax_id,
      contact_name,
      phone_number,
      remark,
    } = data;

    // Set create_date to the current date and time
    const create_date = new Date();

    const newCompany = await prisma.company.create({
      data: {
        company_name,
        is_active,
        quota,
        company_level_id,
        business_type,
        address,
        tax_id,
        contact_name,
        phone_number,
        remark,
        create_date,
      },
    });
    return NextResponse.json(newCompany);
  } catch (error) {
    console.log("Error creating company: ", error);
    return NextResponse.error();
  }
}

export async function GET() {
  try {
    const companies = await prisma.company.findMany();
    return NextResponse.json(companies);
  } catch (error) {
    console.log("Error fetching company: ", error);
    return NextResponse.error();
  }
}


