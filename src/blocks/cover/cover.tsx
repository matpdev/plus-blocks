import classNames from 'classnames';
import Paragraph from '../paragraph/paragraph';

interface ICover extends React.PropsWithChildren {
  url?: string;
  backgroundType?: 'image' | 'video';
  alt?: string;
  backgroundClass?: string;
  caption?: string;
  id?: number;
}

export default function Cover({ children, backgroundType, url, alt, backgroundClass, caption, id }: ICover) {
  let fileType = backgroundType;

  if (backgroundType == null) {
    fileType = url != undefined && url.match(/\.(jpeg|jpg|gif|png)$/) != null ? 'image' : 'video';
  }

  return (
    <div className="relative flex h-96 min-h-fit items-center justify-center p-4" id={id.toString()}>
      <span
        aria-hidden
        className={classNames('absolute bottom-0 left-0 right-0 top-0 z-10 bg-black opacity-50', backgroundClass)}
      ></span>
      {fileType == 'image' ? (
        <img
          src={url}
          alt={alt}
          className="absolute bottom-0 left-0 right-0 top-0 z-0 m-0 h-full max-h-none w-full max-w-none object-cover p-0 outline-none"
        />
      ) : (
        <video
          src={url}
          autoPlay
          muted
          loop
          playsInline
          className="absolute bottom-0 left-0 right-0 top-0 z-0 m-0 h-full max-h-none w-full max-w-none object-cover p-0 outline-none"
        ></video>
      )}
      <div className="relative z-20 w-full text-center">
        {children ? (
          children
        ) : (
          <Paragraph align="center" classname="text-white">
            {caption}
          </Paragraph>
        )}
      </div>
    </div>
  );
}
