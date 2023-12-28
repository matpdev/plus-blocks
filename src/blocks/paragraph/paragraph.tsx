import classnames from 'classnames';
export interface IParagraph {
  children?: React.ReactNode;
  classname?: string;
  align?: 'left' | 'center' | 'right';
  dangerouslySetInnerHTML?: string;
  props?: Object;
}

export default function Paragraph({ children, classname, align = 'left', dangerouslySetInnerHTML, props }: IParagraph) {
  const alignOptions = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return dangerouslySetInnerHTML ? (
    <div
      {...props}
      dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML }}
      className={classnames('max-full', alignOptions[align], classname)}
    ></div>
  ) : (
    <p {...props} className={classnames('max-full', alignOptions[align], classname)}>
      {children}
    </p>
  );
}
