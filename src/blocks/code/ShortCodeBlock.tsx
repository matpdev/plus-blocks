import Script from 'next/script';

interface ShortCodeBlockProps {
  html: string
  props: any
}

export default function ShortCodeBlock({html, props }:ShortCodeBlockProps) {
  return (
    <div
      id={props.name}
      dangerouslySetInnerHTML={{
        __html: html
      }}
    />
  )
}