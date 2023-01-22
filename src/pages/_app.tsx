import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ALink = ({ href, title }: { href: string; title: string }) => {
  const route = useRouter();
  const isCurrent = route.pathname === href;

  return (
    <Link href={href}>
      <a
        className={
          'text-lg transition-all hover:drop-shadow-lg ' +
          (isCurrent ? 'font-bold' : 'text-gray-500')
        }
      >
        {title}
      </a>
    </Link>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>DND playground</title>
      </Head>
      <div className="mx-auto max-w-3xl pb-10">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
