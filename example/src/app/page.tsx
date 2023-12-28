'use client';

import { Blockquote, Column, Footer, Header, Image, Paragraph } from '../../../lib/';

export default function Home() {
  const parser = new DOMParser();
  const data = '<blockquote blockquote > <cite>Disse Andrade.</cite></blockquote>';

  return (
    <div className="w-full">
      <Header
        className={{
          headerClass: '!bg-[#CB0023]',
        }}
        onSubmit={(e: string) => {}}
        routes={[
          {
            title: 'Página Principal',
            href: '/',
          },
          {
            title: 'Assuntos',
            href: '/',
            children: [],
          },
          {
            title: 'Opinião',
            href: '/',
            children: [
              {
                title: 'TESTE',
                href: '/',
              },
            ],
          },
        ]}
        theme="dark"
        darkLogo="/assets/icons/logo.png"
        lightLogo="/assets/icons/logo.png"
        haveLogin={false}
        focusColor={'#CB0023'}
        backgroundColorL={'#fff8e7'}
        backgroundColorD={'#fff8e7'}
        iconColor={'#CB0023'}
        unFocusColor={'#000'}
        borderHeight={2}
        placeholderColor="#CB0023"
      />
    </div>
  );
}
