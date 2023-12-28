'use client';

import Post from '../../types/Post';
export interface IPostContentProps {
  post: Post;
}
export default function PostContent({ post }: IPostContentProps) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: post.body || '' }}
      className="prose prose-lg prose-strong:font-extrabold mx-auto max-w-3xl"
    />
  );
}
