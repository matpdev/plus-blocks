import classNames from 'classnames';

export interface IList {
  classname?: string;
  align?: 'left' | 'center' | 'right';
  ordered: boolean;
  props?: Object;
  children?: React.ReactNode;
}

export default function List({ classname, align, props, ordered, children }: IList) {
  if (ordered) {
    return (
      <ol className={classNames(`max-w-xl`, classname)} {...props}>
        {children}
      </ol>
    );
  }

  return (
    <ul className={classNames(`max-w-xl`, classname)} {...props}>
      {children}
    </ul>
  );
}
