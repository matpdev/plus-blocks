// import React, { memo } from 'react';
// import Script from 'next/script';
// function GuestScripts() {
//   const privacyToolsId = process.env.NEXT_PUBLIC_PRIVACY_TOOLS_ID
//   return <>
//     <Script
//       strategy="afterInteractive"
//       id="google-tagmanager"
//       dangerouslySetInnerHTML={{
//         __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//         new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//         j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//         '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f)
//         })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
//         }
//         }}
//       />
//       <Script
//         strategy="lazyOnload"
//         src={`https://cdn.privacytools.com.br/public_api/banner/script/${privacyToolsId}.js?p=bottom&t=1`}
//           onLoad = {() => {
//       let cookiept: any = portalBanner || undefined
//     cookiept()
//         }}
//       />
//   </>
// }
// export default memo(GuestScripts)
