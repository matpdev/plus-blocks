'use client';

import Button from '../../blocks/button/button';
import { IAppPageProps } from '../../types/base';
import { PostNews } from '../../types/Post';
import PostCard from '../cards/PostCard';
export default function LastNews({ posts }: IAppPageProps) {
  return (
    <div className="p-6 py-10">
      <h2 className="text-xl font-semibold">Últimos Exclusivos</h2>
      <div className="mt-4 grid gap-2">
        {posts &&
          posts.map((post: PostNews) => <PostCard key={post.id} post={post} withImage={false} withMetas={false} />)}
      </div>
      <div className="mt-4">
        <Button label="Ver todos" block asLink link="/app/noticias" theme="pretty" />
      </div>
    </div>
  );
}
