import classNames from 'classnames';
import { imageFillStyles } from '../../helpers/utils';
import Paragraph from '../paragraph/paragraph';
import InnerHTML from 'dangerously-set-html-content';
import { PropsWithChildren } from 'react';

interface IMediaText extends PropsWithChildren {
  mediaLink?: string;
  url?: string;
  backgroundType?: 'image' | 'video';
  alt?: string;
  linkClass?: string;
  caption?: string;
  image?: string;
  mediaPosition?: 'right' | 'left';
  mediaType?: 'image' | 'video';
  imageFill?: boolean;
  dangerous?: string;
}

export default function MediaText({
  url,
  alt,
  linkClass,
  caption,
  mediaLink,
  mediaPosition,
  mediaType,
  imageFill,
  dangerous,
  children,
}: IMediaText) {
  const imageClasses = classNames('');

  let image = <img src={url} alt={alt} className={imageClasses || null} />;

  if (mediaLink) {
    image = (
      <a className={linkClass} href={mediaLink} target="_blank">
        {image}
      </a>
    );
  }

  const backgroundStyles = imageFill ? imageFillStyles(url, { x: 0.5, y: 0.5 }) : {};

  const mediaTypeRenders = {
    image: () => image,
    video: () => <video controls src={url} />,
  };

  if (mediaPosition == 'right') {
    return (
      <div>
        {dangerous ? <InnerHTML html={dangerous}></InnerHTML> : <Paragraph align="center">{caption}</Paragraph>}

        <figure className="wp-block-media-text__media" style={backgroundStyles}>
          {mediaType && mediaTypeRenders[mediaType]()}
        </figure>
      </div>
    );
  }
  return (
    <div className="mx-auto box-border grid max-w-7xl grid-cols-[50%_1fr]">
      {!dangerous && (
        <figure className="col-span-1" style={backgroundStyles}>
          {mediaType && mediaTypeRenders[mediaType]()}
        </figure>
      )}
      {dangerous ? (
        <InnerHTML html={dangerous}></InnerHTML>
      ) : (
        <Paragraph classname="self-center max-[650px]:text-center">{caption}</Paragraph>
      )}
      {children}
    </div>
  );
}
