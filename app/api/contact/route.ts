import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, company, email, location, description } = body;

        // Ensure the API key exists
        if (!process.env.SENDGRID_API_KEY) {
            console.error('SENDGRID_API_KEY is not set');
            return NextResponse.json(
                { error: 'Server misconfiguration. API key missing.' },
                { status: 500 }
            );
        }

        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: 'ops@fortuneoraclegeospatial.com', // Recipient
            from: 'ops@fortuneoraclegeospatial.com', // Must be verified in SendGrid
            subject: `New Contact Request: ${name} from ${company || 'N/A'}`,
            text: `
Name: ${name}
Company: ${company || 'N/A'}
Email: ${email}
Project Location: ${location}

Description:
${description}
      `,
            html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Location:</strong> ${location}</p>
        <br/>
        <p><strong>Description:</strong></p>
        <p>${description.replace(/\n/g, '<br/>')}</p>
      `,
        };

        await sgMail.send(msg);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
