import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Schema validation for newsletter subscription
const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = newsletterSchema.parse(body);

    // Here you would typically:
    // 1. Add to email marketing platform (ConvertKit, Mailchimp, etc.)
    // 2. Save to database
    // 3. Send welcome email

    // Example: Add to ConvertKit
    // await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email: validatedData.email, api_key: process.env.CONVERTKIT_API_KEY }),
    // });

    // Example: Add to Mailchimp
    // await fetch(`https://usX.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
    //   method: 'POST',
    //   headers: { 
    //     'Authorization': `apikey ${process.env.MAILCHIMP_API_KEY}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ 
    //     email_address: validatedData.email,
    //     status: 'subscribed'
    //   }),
    // });

    // Log for debugging
    console.log("Newsletter subscription:", {
      email: validatedData.email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing!",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email address",
        },
        { status: 400 }
      );
    }

    console.error("Newsletter subscription error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
