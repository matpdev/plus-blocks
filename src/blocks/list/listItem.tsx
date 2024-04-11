import classNames from 'classnames';

export interface IListItem {
  children: JSX.Element;
  classname?: string;
  props?: Object;
  dangerouslySetInnerHTML?: any;
}

export default function ListItem({
  children,
  classname,
  props,
  dangerouslySetInnerHTML,
}: IListItem & React.PropsWithChildren) {
  if (dangerouslySetInnerHTML != null) {
    return (
      <li
        {...props}
        className={classNames(`max-full m-2`, classname)}
        dangerouslySetInnerHTML={{
          __html: dangerouslySetInnerHTML.replace(/<(\/)?li>/gm, ''),
        }}
      ></li>
    );
  }
  return (
    <li {...props} className={classNames(`max-full m-2`, classname)}>
      {children}
    </li>
  );
}
