'use client';

// import Image from '../../types/dist/client/image';
import { getDateTime, toDateTimeString } from '../../helpers/utils';
import Post from '../../types/Post';
interface IMetasProps {
  post: Post;
  className?: string;
}
export default function Metas({ post, className }: IMetasProps) {
  const dateCreated = post.createdAt ? toDateTimeString(getDateTime(post.createdAt), '%d/%m/%y %H:%i') : null;
  const dateUpdated = post.updatedAt ? toDateTimeString(getDateTime(post.updatedAt), '%d/%m/%y %H:%i') : null;
  const authorName = post?.author?.name || 'Tribuna do Paraná';
  const authorImage = post?.author?.image || 'https://www.tribunapr.com.br/resources/images/icons/tribuna-logo-192.png';

  return (
    <div className="flex flex-1 justify-between border-t border-gray-100 py-4">
      <div className="flex">
        <div className="mr-4 h-12 overflow-hidden">
          {/* <Image
            src={authorImage}
            alt={authorName}
            width={48}
            height={48}
            objectFit="contain"
            objectPosition="left center"
            className="h-12 overflow-hidden rounded-full"
          /> */}
        </div>
        <div className="flex flex-1 flex-col justify-center font-light italic">
          <div className="mb-1 text-sm text-gray-900">Por {authorName}</div>
          <div className="text-xs text-gray-600">
            {dateCreated}
            {dateCreated !== dateUpdated && ` - Atualizado: ${dateUpdated}`}
          </div>
        </div>
      </div>
    </div>
  );
}
