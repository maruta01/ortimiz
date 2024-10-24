import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  const id = parseInt(params.id);
  try {
    const company = await prisma.company.findUnique({
      where: {
        company_id: id,
      },
    });
    return NextResponse.json(company);
  } catch (error) {
    console.log("Error fetching company: ", error);
    return NextResponse.error();
  }
}

export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id);
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

    const update_date = new Date();
    const updateCompany = await prisma.company.update({
      where: {
        company_id: id,
      },
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
        update_date,
      },
    });
    
    return NextResponse.json(updateCompany);

  } catch (error) {
    console.log("Error fetching company: ", error);
    return NextResponse.error();
  }
}


export async function DELETE(request, { params }) {
    const id = parseInt(params.id);
    try {
      const deleteCompany = await prisma.company.delete({
        where: {
          company_id: id,
        },
      });
      return NextResponse.json(deleteCompany);
    } catch (error) {
      console.log("Error fetching company: ", error);
      return NextResponse.error();
    }
  }