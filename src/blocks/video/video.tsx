import classNames from 'classnames';

interface IVideo {
  url?: string;
  alt?: string;
  caption?: string;
  align?: string;
  href?: string;
  linkClass?: string;
  imagesClasses?: string;
  width?: number;
  height?: number;
  title?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  preload?: string;
  playsInline?: boolean;
}

export default function Video({
  href,
  url,
  alt,
  caption,
  align,
  linkClass,
  imagesClasses,
  title,
  width,
  height,
  autoplay,
  controls,
  loop,
  muted,
  poster,
  preload,
  playsInline,
}: IVideo) {
  const VideoTag = () => (
    <video
      src={url}
      poster={poster}
      playsInline={playsInline}
      preload={preload !== 'metadata' ? preload : undefined}
      autoPlay={autoplay}
      controls={controls}
      loop={loop}
      muted={muted}
      className={classNames('')}
      width={width}
      height={height}
      title={title}
    />
  );

  const FigureImage = () => {
    return (
      <>
        <VideoTag></VideoTag>
        {caption && <figcaption>{caption}</figcaption>}
      </>
    );
  };

  return (
    <figure className={classNames('flex flex-col items-center')}>
      <FigureImage />
    </figure>
  );
}
