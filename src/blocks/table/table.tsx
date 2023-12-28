import classNames from 'classnames';

interface ITable {
  columns: ITableColumn[];
  data: any[];
  footer?: string;
  header?: string;
}

export interface ITableColumn {
  Header: string;
  accessor: string;
  className?: string;
}

export default function Table({ columns, data, header, footer }: ITable) {
  function returnColumns(array: {}) {
    let listData = [];

    for (const [key, value] of Object.entries(columns)) {
      listData.push(<td className={classNames('', value.className)}>{array[value.accessor]}</td>);
    }

    return listData;
  }

  function returnRows() {
    return data.map((x, z) => {
      return <tr key={z}>{returnColumns(x)}</tr>;
    });
  }

  return (
    <div className="px-10">
      <table cellPadding={10} className="w-full">
        <thead className="w-full">
          <tr>
            <th colSpan={columns.length}>{header}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {columns.map((x, z) => {
              return (
                <th key={z} className={classNames('', x.className)}>
                  {x.Header}
                </th>
              );
            })}
          </tr>
          {returnRows()}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={columns.length}>{footer}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
