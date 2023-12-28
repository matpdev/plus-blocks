'use client';

import Post from '../../types/Post';
export interface ITitleProps {
  post: Post;
}
export default function Title({ post }: ITitleProps) {
  return <h1 className="mb-6 text-center text-4xl font-extrabold text-gray-900">{post.title}</h1>;
}
