'use client';

import TagManager from 'react-gtm-module';
function AppScripts(gtmId: string) {
  TagManager.initialize({ gtmId });
  //       <Script
  //         strategy="lazyOnload"
  //         src={`https://cdn.privacytools.com.br/public_api/banner/script/${privacyToolsId}.js?p=bottom&t=1`}
  //           onLoad = {() => {
  //             let cookiept: any = portalBanner || undefined
  //             cookiept()
  //           }}
  //       />
  //   </>
}
export default AppScripts;
