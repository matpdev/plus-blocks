import classNames from 'classnames';
import Paragraph from '../paragraph/paragraph';

export interface IBlockquote {
  children?: React.ReactNode;
  cite?: string;
  classname?: string;
  align?: 'left' | 'center' | 'right';
  size?: '1' | '2' | '3' | '4' | '5' | '6';
  width?: 'lg' | 'full' | 'sm' | 'xl';
  showQuotes?: boolean;
}

export default function Blockquote({ children, classname, align, size, width, cite, showQuotes = false }: IBlockquote) {
  const alignOptions = {
    left: '!text-left',
    center: '!text-center',
    right: '!text-right',
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="my-2 h-px w-1/3 md:w-[240px]"
        style={{
          backgroundColor: '#00000033',
        }}
      ></div>
      <blockquote
        className={classNames('w-1/2', `!inline p-3 text-[21px] font-normal italic`, alignOptions[align], classname)}
      >
        {showQuotes && (
          <svg
            style={{
              display: 'inline',
            }}
            width="21"
            viewBox="0 0 21 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.2 12.15H1.41561e-07L7.35 0.249997H11.35L6.2 12.15ZM15.2 12.15H9L16.35 0.249997H20.35L15.2 12.15Z"
              fill="black"
            />
          </svg>
        )}
        {children}{' '}
        {showQuotes && (
          <svg
            style={{
              display: 'inline',
            }}
            width="21"
            height=""
            viewBox="0 0 21 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.2 0.249997H11.4L4.05 12.15H0.05L5.2 0.249997ZM14.2 0.249997H20.4L13.05 12.15H9.05L14.2 0.249997Z"
              fill="black"
            />
          </svg>
        )}
        <cite>{cite}</cite>
      </blockquote>
      <div
        className="my-2 h-px w-1/3 md:w-[240px]"
        style={{
          backgroundColor: '#00000033',
        }}
      ></div>
    </div>
  );
}
