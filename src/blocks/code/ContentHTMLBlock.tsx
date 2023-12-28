interface ContentHTMLBlockProps {
  html: string
  props: any
}

export default function ContentHTMLBlock({ html, props }: ContentHTMLBlockProps){
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${html}`
      }}
    />
  )
}