import classNames from 'classnames';

export interface IPreformatted extends React.PropsWithChildren {
  children: React.ReactNode;
  classname?: string;
  props?: Object;
}

export default function Preformatted({ classname, props, children }: IPreformatted) {
  return (
    <pre {...props} className={classNames(`max-full m-3 p-3`, classname)}>
      {children}
    </pre>
  );
}
