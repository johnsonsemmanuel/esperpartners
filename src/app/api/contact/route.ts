import { NextRequest, NextResponse } from 'next/server';

// Force dynamic — prevents Next.js from trying to statically analyse this route at build time
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
  }

  try {
    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    const body = await req.json();
    const { name, email, country, budget, project, message } = body;

    if (!name || !email || !project) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Email to Esper Partners team
    await resend.emails.send({
      from: 'Esper Partners <noreply@esperpartners.com>',
      to: ['hello@esperpartners.com'],
      subject: `New Enquiry from ${name} (${country || 'Unknown'})`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0C0C0C;color:#fff;border-radius:12px;">
          <h2 style="color:#FFA500;font-size:20px;margin-bottom:24px;">New Project Enquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:13px;width:140px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #222;font-size:14px;">${name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:13px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #222;font-size:14px;"><a href="mailto:${email}" style="color:#FFA500;">${email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:13px;">Country</td><td style="padding:10px 0;border-bottom:1px solid #222;font-size:14px;">${country || '—'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:13px;">Budget</td><td style="padding:10px 0;border-bottom:1px solid #222;font-size:14px;">${budget || '—'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #222;color:#888;font-size:13px;">Project</td><td style="padding:10px 0;border-bottom:1px solid #222;font-size:14px;">${project}</td></tr>
            ${message ? `<tr><td style="padding:10px 0;color:#888;font-size:13px;vertical-align:top;">Message</td><td style="padding:10px 0;font-size:14px;line-height:1.6;">${message}</td></tr>` : ''}
          </table>
          <div style="margin-top:32px;">
            <a href="mailto:${email}" style="display:inline-block;padding:12px 24px;background:#FFA500;color:#fff;border-radius:100px;font-size:14px;font-weight:600;text-decoration:none;">Reply to ${name}</a>
          </div>
        </div>
      `,
    });

    // Auto-reply to client
    await resend.emails.send({
      from: 'Esper Partners <noreply@esperpartners.com>',
      to: [email],
      subject: 'We received your enquiry — Esper Partners',
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0C0C0C;color:#fff;border-radius:12px;">
          <h2 style="color:#FFA500;font-size:20px;margin-bottom:12px;">Thanks, ${name.split(' ')[0]}.</h2>
          <p style="color:rgba(255,255,255,0.7);font-size:15px;line-height:1.7;margin-bottom:16px;">
            We received your enquiry about <strong style="color:#fff;">${project}</strong> and will get back to you within 48 hours.
          </p>
          <p style="color:rgba(255,255,255,0.7);font-size:15px;line-height:1.7;margin-bottom:32px;">
            Want to move faster? Book a free 30-minute discovery call — we use Google Meet.
          </p>
          <a href="https://cal.com/esperpartners/discovery" style="display:inline-block;padding:14px 28px;background:#FFA500;color:#fff;border-radius:100px;font-size:14px;font-weight:600;text-decoration:none;margin-bottom:32px;">
            Book a Discovery Call
          </a>
          <hr style="border:none;border-top:1px solid #222;margin-bottom:24px;" />
          <p style="color:#555;font-size:13px;">Esper Partners · hello@esperpartners.com</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
