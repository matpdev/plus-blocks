import classNames from 'classnames';

interface IAudio {
  url?: string;
  audioClasses?: string;
  caption?: string;
  autoplay?: boolean;
  controls?: boolean;
  loop?: boolean;
  preload?: string;
}

export default function Audio({ url, caption, autoplay, controls, loop, preload }: IAudio) {
  const AudioTag = () => (
    <audio
      src={url}
      preload={preload !== 'metadata' ? preload : undefined}
      autoPlay={autoplay}
      controls={controls}
      loop={loop}
      className={classNames('')}
    />
  );

  const FigureAudio = () => {
    return (
      <>
        <AudioTag></AudioTag>
        {caption && <figcaption>{caption}</figcaption>}
      </>
    );
  };

  return (
    <figure className={classNames('flex flex-col items-center')}>
      <FigureAudio />
    </figure>
  );
}
