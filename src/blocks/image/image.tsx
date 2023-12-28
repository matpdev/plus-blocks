'use client';

import classNames from 'classnames';

interface IImage {
  url?: string;
  alt?: string;
  caption?: string;
  align?: string;
  href?: string;
  linkClass?: string;
  imagesClasses?: string;
  captionClass?: string;
  figureClass?: string;
  width?: number;
  height?: number;
  id?: string;
  linkTarget?: string;
  sizeSlug?: string;
  title?: string;
}

export default function Image({
  href,
  url,
  alt,
  caption,
  align,
  linkClass,
  figureClass,
  captionClass,
  title,
  width,
  height,
  imagesClasses,
}: IImage) {
  const ImageTag = () => (
    <img src={url} alt={alt} className={classNames(imagesClasses)} width={width} height={height} title={title} />
  );

  const FigureImage = () => {
    return (
      <>
        {href ? (
          <a href={href} className={classNames('', linkClass)} target="_blank">
            <ImageTag></ImageTag>
          </a>
        ) : (
          <ImageTag></ImageTag>
        )}
        {caption && (
          <figcaption className={classNames(captionClass, 'text-left text-sm font-thin')}>Fonte: {caption}</figcaption>
        )}
      </>
    );
  };

  return (
    <figure className={classNames('items-left flex flex-col', figureClass)}>
      <FigureImage />
    </figure>
  );
}
