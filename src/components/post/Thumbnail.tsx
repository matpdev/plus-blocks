'use client';


import Post from '../../types/Post';
export interface IThumbnailProps {
  post: Post;
}
export default function Thumbnail({ post }: IThumbnailProps) {
  return post?.thumbnail ? (
    <figure className="block w-full">
      {/* <Image
        src={post.thumbnail}
        alt={post.title}
        layout="responsive"
        width={940}
        height={530}
        className="overflow-hidden rounded-lg"
      /> */}
    </figure>
  ) : (
    <></>
  );
}
