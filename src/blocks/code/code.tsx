import classNames from 'classnames';

export interface ICode extends React.PropsWithChildren {
  children?: React.ReactNode;
  classname?: string;
  props?: Object;
}

export default function Code({ classname, props, children }: ICode) {
  return (
    <code {...props} className={classNames(`max-full m-3 rounded-xl bg-gray-200 p-3`, classname)}>
      {children}
    </code>
  );
}
