import classNames from 'classnames';

export interface IListItem {
  children: JSX.Element;
  classname?: string;
  props?: Object;
}

export default function ListItem({ children }: React.PropsWithChildren, { classname, props }: IListItem) {
  return (
    <li {...props} className={classNames(`max-full m-2`, classname)}>
      {children}
    </li>
  );
}
