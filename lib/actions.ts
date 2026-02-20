"use server";

import { prisma } from "./db";

export async function submitContactForm(formData: {
  email: string;
  reason: string;
  details: string;
}) {
  console.log("submitContactForm called with:", formData);

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
    console.log("Contact submission created:", result);
    return { success: true };
  } catch (error) {
    console.error("Contact submission failed:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function submitDemoRequest(formData: {
  name: string;
  email: string;
  organization: string;
  demoType: string;
  message?: string;
}) {
  console.log("submitDemoRequest called with:", formData);

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
    console.log("Demo request created:", result);
    return { success: true };
  } catch (error) {
    console.error("Demo request failed:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function getDemoRequests() {
  try {
    const requests = await prisma.demoRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: requests };
  } catch (error) {
    console.error("Failed to fetch demo requests:", error);
    return {
      success: false,
      error: "Failed to fetch demo requests.",
      data: [],
    };
  }
}

export async function getContactSubmissions() {
  try {
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: submissions };
  } catch (error) {
    console.error("Failed to fetch contact submissions:", error);
    return {
      success: false,
      error: "Failed to fetch contact submissions.",
      data: [],
    };
  }
}
