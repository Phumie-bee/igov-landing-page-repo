"use server";

import { prisma } from "./db";

export async function submitContactForm(formData: {
  email: string;
  reason: string;
  details: string;
}) {
  if (!formData.email || !formData.reason || !formData.details) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const result = await prisma.contactSubmission.create({
      data: {
        email: formData.email,
        reason: formData.reason,
        details: formData.details,
      },
    });
    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Contact submission failed:", message, error);
    return { success: false, error: `Something went wrong: ${message}` };
  }
}

export async function submitDemoRequest(formData: {
  name: string;
  email: string;
  organization: string;
  demoType: string;
  message?: string;
}) {
  if (
    !formData.name ||
    !formData.email ||
    !formData.organization ||
    !formData.demoType
  ) {
    return { success: false, error: "All required fields must be filled." };
  }

  try {
    const result = await prisma.demoRequest.create({
      data: {
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        demoType: formData.demoType,
        message: formData.message || null,
      },
    });
    return { success: true };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Demo request failed:", message, error);
    return { success: false, error: `Something went wrong: ${message}` };
  }
}

const PAGE_SIZE = 10;

export async function getDemoRequests(page = 1, search = "") {
  try {
    const where = search
      ? {
          OR: [
            { name: { contains: search } },
            { email: { contains: search } },
            { organization: { contains: search } },
            { message: { contains: search } },
          ],
        }
      : {};

    const [requests, total] = await Promise.all([
      prisma.demoRequest.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * PAGE_SIZE,
        take: PAGE_SIZE,
      }),
      prisma.demoRequest.count({ where }),
    ]);

    return {
      success: true,
      data: requests,
      total,
      page,
      totalPages: Math.ceil(total / PAGE_SIZE),
    };
  } catch (error) {
    console.error("Failed to fetch demo requests:", error);
    return {
      success: false,
      error: "Failed to fetch demo requests.",
      data: [],
      total: 0,
      page: 1,
      totalPages: 1,
    };
  }
}

export async function getContactSubmissions(page = 1, search = "") {
  try {
    const where = search
      ? {
          OR: [
            { email: { contains: search } },
            { reason: { contains: search } },
            { details: { contains: search } },
          ],
        }
      : {};

    const [submissions, total] = await Promise.all([
      prisma.contactSubmission.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: (page - 1) * PAGE_SIZE,
        take: PAGE_SIZE,
      }),
      prisma.contactSubmission.count({ where }),
    ]);

    return {
      success: true,
      data: submissions,
      total,
      page,
      totalPages: Math.ceil(total / PAGE_SIZE),
    };
  } catch (error) {
    console.error("Failed to fetch contact submissions:", error);
    return {
      success: false,
      error: "Failed to fetch contact submissions.",
      data: [],
      total: 0,
      page: 1,
      totalPages: 1,
    };
  }
}
