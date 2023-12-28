import React, { useEffect, useRef, useState } from 'react';
import Paragraph from '../paragraph/paragraph';
import classNames from 'classnames';
import InnerHTML from 'dangerously-set-html-content';

interface IEmbed {
  url: string;
  caption?: string;
  title?: string;
  classnames?: string;
  width?: string;
  height?: string;
}

export default function Embed({ width, height, url, caption, title, classnames }: IEmbed) {
  let [dangerousCopy, setDangerousCopy] = useState(<div></div>);

  useEffect(() => {
    if (url.match(/^.*(twitter.com)/)) {
      getTwiiter();
    }
  }, [url]);

  function getTwiiter() {
    fetch(`https://publish.twitter.com/oembed?url=${url}`)
      .then((x) => x.json())
      .then((x) => {
        setDangerousCopy(
          <figure className={classNames('my-10', classnames)}>
            <InnerHTML html={x.html}></InnerHTML>
          </figure>,
        );
      })
      .catch(() => {
        setDangerousCopy(null);
      });
  }

  function getId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  if (url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)) {
    return (
      <figure className={classNames('my-10', classnames)}>
        <div className="flex items-center">
          <iframe
            width={width || '560'}
            height={height || '315'}
            src={`https://www.youtube.com/embed/${getId(url)}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        {caption && <Paragraph>{caption}</Paragraph>}
      </figure>
    );
  } else if (url.match(/^.*(twitter.com)/)) {
    return dangerousCopy;
  }

  return (
    <figure className={classNames('my-10', classnames)}>
      <div className="flex items-center">
        <iframe
          width={width || '560'}
          height={height || '315'}
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      {caption && <Paragraph>{caption}</Paragraph>}
    </figure>
  );
}
