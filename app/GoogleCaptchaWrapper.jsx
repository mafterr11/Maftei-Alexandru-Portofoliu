// components/GoogleCaptchaWrapper.jsx
"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const RecaptchaCtx = createContext({ ready: false });

export default function GoogleCaptchaWrapper({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let mounted = true;

    // Wait for the global grecaptcha to be ready
    function check() {
      if (typeof window !== "undefined" && window.grecaptcha && window.grecaptcha.execute) {
        window.grecaptcha.ready(() => mounted && setReady(true));
      } else {
        // Try again shortly until the script is loaded
        const id = setTimeout(check, 50);
        return () => clearTimeout(id);
      }
    }
    check();

    return () => {
      mounted = false;
    };
  }, []);

  const value = useMemo(() => ({ ready }), [ready]);
  return <RecaptchaCtx.Provider value={value}>{children}</RecaptchaCtx.Provider>;
}

// Optional helper hook to get a token for any action
export function useRecaptchaV3() {
  const { ready } = useContext(RecaptchaCtx);
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

  async function getToken(action = "submit") {
    if (!ready) throw new Error("reCAPTCHA not ready yet.");
    if (!siteKey) throw new Error("Missing NEXT_PUBLIC_RECAPTCHA_KEY.");
    const token = await window.grecaptcha.execute(siteKey, { action });
    return token;
  }

  return { ready, getToken };
}
