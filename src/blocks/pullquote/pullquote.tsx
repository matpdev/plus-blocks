import classNames from 'classnames';
import Paragraph from '../paragraph/paragraph';

export interface IPullquote extends React.PropsWithChildren {
  children?: React.ReactNode;
  classname?: string;
  props?: Object;
  citation?: string;
  align?: 'left' | 'center' | 'right';
}

export default function Pullquote({ classname, props, align, citation, children }: IPullquote) {
  let textAling: string = 'text-left';

  const alignOptions = {
    left: 'text-center',
    center: 'text-right',
    align: 'right'
  }

  return (
    <figure {...props} className={classNames(`max-full bg m-2 border-y p-5`, classname, textAling)}>
      <blockquote>
        <Paragraph align={alignOptions[align]}>{children}</Paragraph>
        <cite>{citation}</cite>
      </blockquote>
    </figure>
  );
}
