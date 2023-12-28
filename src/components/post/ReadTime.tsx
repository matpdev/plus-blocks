'use client';

import Post from '../../types/Post';
export interface IReadTimeProps {
  post: Post;
}
export default function ReadTime({ post }: IReadTimeProps) {
  return (
    <div className="mb-8 flex flex-1 justify-center font-light text-gray-500">
      {post.metas?.readtime || 2} minutos de leitura
    </div>
  );
}
