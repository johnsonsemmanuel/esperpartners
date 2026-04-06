import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, country, budget, project, message } = body;

    if (!name || !email || !project) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // Silently succeed in build/preview — email just won't send
      console.warn('RESEND_API_KEY not set');
      return NextResponse.json({ success: true, warn: 'no_key' });
    }

    const { Resend } = await import('resend');
    const resend = new Resend(apiKey);

    await Promise.all([
      resend.emails.send({
        from: 'Esper Partners <noreply@esperpartners.com>',
        to: ['hello@esperpartners.com'],
        subject: `New Enquiry from ${name} (${country || 'Unknown'})`,
        html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0C0C0C;color:#fff;border-radius:12px;">
          <h2 style="color:#FFA500;margin-bottom:24px;">New Project Enquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;border-bottom:1px solid #222;color:#888;font-size:13px;width:120px;">Name</td><td style="padding:8px 0;border-bottom:1px solid #222;">${name}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #222;color:#888;font-size:13px;">Email</td><td style="padding:8px 0;border-bottom:1px solid #222;"><a href="mailto:${email}" style="color:#FFA500;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #222;color:#888;font-size:13px;">Country</td><td style="padding:8px 0;border-bottom:1px solid #222;">${country || '—'}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #222;color:#888;font-size:13px;">Budget</td><td style="padding:8px 0;border-bottom:1px solid #222;">${budget || '—'}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #222;color:#888;font-size:13px;">Project</td><td style="padding:8px 0;border-bottom:1px solid #222;">${project}</td></tr>
            ${message ? `<tr><td style="padding:8px 0;color:#888;font-size:13px;vertical-align:top;">Message</td><td style="padding:8px 0;">${message}</td></tr>` : ''}
          </table>
          <a href="mailto:${email}" style="display:inline-block;margin-top:24px;padding:12px 24px;background:#FFA500;color:#fff;border-radius:100px;font-size:14px;font-weight:600;text-decoration:none;">Reply to ${name}</a>
        </div>`,
      }),
      resend.emails.send({
        from: 'Esper Partners <noreply@esperpartners.com>',
        to: [email],
        subject: 'We received your enquiry — Esper Partners',
        html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0C0C0C;color:#fff;border-radius:12px;">
          <h2 style="color:#FFA500;margin-bottom:12px;">Thanks, ${name.split(' ')[0]}.</h2>
          <p style="color:rgba(255,255,255,0.7);line-height:1.7;margin-bottom:16px;">We received your enquiry about <strong style="color:#fff;">${project}</strong> and will get back to you within 48 hours.</p>
          <p style="color:rgba(255,255,255,0.7);line-height:1.7;margin-bottom:28px;">Want to move faster? Book a free 30-minute discovery call on Google Meet.</p>
          <a href="https://cal.com/esperpartners/discovery" style="display:inline-block;padding:14px 28px;background:#FFA500;color:#fff;border-radius:100px;font-size:14px;font-weight:600;text-decoration:none;">Book a Discovery Call</a>
          <hr style="border:none;border-top:1px solid #222;margin:28px 0;" />
          <p style="color:#555;font-size:13px;">Esper Partners · hello@esperpartners.com</p>
        </div>`,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
