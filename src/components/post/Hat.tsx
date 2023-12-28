'use client';

import Post from '../../types/Post';
export interface IHatProps {
  post: Post;
}
export default function Hat({ post }: IHatProps) {
  return post.metas?.hat ? (
    <div className="mb-4 flex flex-1 justify-center">
      <span className="bg-gradient-to-r from-purple-700 via-rose-600 to-orange-500 bg-clip-text font-black uppercase text-transparent">
        {post.metas?.hat}
      </span>
    </div>
  ) : (
    <></>
  );
}
