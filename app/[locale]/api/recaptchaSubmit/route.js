// app/api/recaptcha-verify/route.ts
export async function POST(req) {
  try {
    const { token } = await req.json();
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return Response.json({ ok: false, error: "Missing RECAPTCHA_SECRET_KEY" }, { status: 500 });
    }

    const resp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      cache: "no-store",
    });
    const data = await resp.json();

    // Optional: enforce minimum score and action if you pass one from client
    const ok = data.success === true && (data.score ?? 1) >= 0.5;
    return Response.json({ ok, data }, { status: ok ? 200 : 400 });
  } catch (e) {
    return Response.json({ ok: false, error: "recaptcha_verify_error" }, { status: 500 });
  }
}
