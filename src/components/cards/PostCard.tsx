'use client';

// import { Link, Image } from '../next/index';
import { getDateTime, toDateTimeString } from '../../helpers/utils';
import { PostNews } from '../../types/Post';
export interface IPostCardProps {
  post: PostNews;
  withImage?: boolean;
  withMetas?: boolean;
  withAuthor?: boolean;
  withReadTime?: boolean;
  mini?: boolean;
  key?: number | string | undefined;
}
export default function PostCard({
  post,
  withImage = true,
  withMetas = true,
  withAuthor = true,
  withReadTime = true,
  mini = false,
}: IPostCardProps) {
  const dateCreated = post.createdAt ? toDateTimeString(getDateTime(post.createdAt), '%d/%m/%y %H:%i') : null;
  const authorName = post?.author?.name || 'Tribuna do Paraná';
  const authorImage = post?.author?.image || 'https://www.tribunapr.com.br/resources/images/icons/tribuna-logo-192.png';
  return (
    <a href={post.link} className="group flex">
      <div className="flex flex-1 flex-col overflow-hidden rounded-lg shadow-lg">
        {withImage && post.image && (
          <div className="relative h-48 w-full flex-shrink-0 bg-purple-700 group-open:h-28">
            {/* <Image
              className="bg-purple-600"
              src={post.image}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={imageBlurDataURL(370, 200)}
            /> */}
          </div>
        )}
        <div className="flex flex-1 flex-col justify-between bg-white p-6 group-open:p-4">
          {post?.hat && (
            <div className="mb-2">
              <span className="bg-gradient-to-r from-purple-700 via-rose-600 to-orange-500 bg-clip-text text-sm font-black uppercase text-transparent">
                {post?.hat}
              </span>
            </div>
          )}
          <div className="flex-1 text-xl font-bold text-gray-900">{post.title}</div>
          {post?.excerpt && <p className="mt-6 text-base text-gray-500">{post?.excerpt}</p>}
          {withMetas && (
            <div className="mt-4 flex items-center">
              {withAuthor && (
                <div className="mr-3 h-10 flex-shrink-0 overflow-hidden">
                  {/* <Image
                      src={authorImage}
                      alt={authorName}
                      width={40}
                      height={40}
                      objectFit="contain"
                      objectPosition="left center"
                      className="h-10 overflow-hidden rounded-full"
                    /> */}
                </div>
              )}
              <div>
                {withAuthor && <div className="text-sm font-medium text-gray-900">{authorName}</div>}
                <div className="flex space-x-1 text-xs text-gray-400">
                  <time dateTime={post.createdAt}>{dateCreated}</time>
                  {withReadTime && (
                    <>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post?.readtime || 2} min leitura</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
