import React from 'react';

export default function Row({ children }: React.PropsWithChildren) {
  return <div className="min-[768px]:grow m-0 mx-10 w-full break-words">{children}</div>;
}
