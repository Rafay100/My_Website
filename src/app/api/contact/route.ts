import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema validation for contact form
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().max(200).optional().or(z.literal("")),
  service: z.string().max(50).optional().or(z.literal("")),
  budget: z.string().max(20).optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  newsletter: z.boolean().optional().default(false),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting check (basic implementation)
    const ip = request.ip ?? request.headers.get("x-forwarded-for") ?? "unknown";
    
    // In production, use Redis or similar for rate limiting
    // For now, we'll just log it
    console.log(`Contact form submission from IP: ${ip}`);

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // Here you would typically:
    // 1. Send email using Resend, SendGrid, or similar
    // 2. Save to database
    // 3. Add to CRM
    // 4. Send to Slack/Teams notification

    // Example: Send email with Resend
    // await resend.emails.send({
    //   from: 'CRMFlow <noreply@crmflow.io>',
    //   to: ['hello@crmflow.io'],
    //   subject: `New Contact Form Submission: ${validatedData.name}`,
    //   react: ContactEmailTemplate(validatedData),
    // });

    // Example: Add to CRM (HubSpot, etc.)
    // await createHubSpotContact(validatedData);

    // Example: Send Slack notification
    // await slack.chat.postMessage({
    //   channel: '#leads',
    //   text: `New lead from ${validatedData.name} (${validatedData.email})`,
    // });

    // Log for debugging (remove in production)
    console.log("Contact form submission:", {
      ...validatedData,
      ip,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your message. We'll get back to you within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle other errors
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    message: "Contact API endpoint is working",
    version: "1.0.0",
  });
}
