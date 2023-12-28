'use client';

import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
export interface IReCaptchaProps {
  children: React.ReactNode;
}
export default function ReCaptchaWrapper({ children }: IReCaptchaProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
      language="pt-BR"
      useRecaptchaNet={false}
      useEnterprise={false}
      scriptProps={{
        async: true, // optional, default to false,
        defer: true, // optional, default to false
        appendTo: 'body', // optional, default to "head", can be "head" or "body",
        nonce: undefined, // optional, default undefined
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
