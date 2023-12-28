'use client';

import Logo from '../icons/Logo';
export interface ILoadingPage {
  text?: string;
}
export default function LoadingPage({ text }: ILoadingPage) {
  const loading = text || 'Carregando... Aguarde!';
  return (
    <div className="flex h-screen items-center justify-center">
      <section className="flex w-96 flex-col items-center justify-center rounded-lg bg-white bg-gradient-to-r from-orange-500 via-rose-600 to-purple-700 py-8 shadow-xl">
        <Logo height={30} />
        <div className="mt-8">{loading}</div>
      </section>
    </div>
  );
}
