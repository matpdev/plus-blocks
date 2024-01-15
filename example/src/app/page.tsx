'use client';

import { Blockquote, Column, Footer, Header, Image, Paragraph } from '../../../lib/';

export default function Home() {
  const parser = new DOMParser();
  const data = '<blockquote blockquote > <cite>Disse Andrade.</cite></blockquote>';

  return (
    <div className="w-full">
      <Image
        url={'block.props.source'}
        captionClass="!font-light my-1"
        figureClass="!my-1"
        imagesClasses="!my-1"
        alt={"block?.props?.caption ?? block?.props?.alt ?? ''"}
      ></Image>
    </div>
  );
}
