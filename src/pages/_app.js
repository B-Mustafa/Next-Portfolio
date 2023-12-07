import { SidebarProvider } from "@/context/SidebarContext";
import Head from 'next/head';
import "@/styles/globals.css";
import "@/styles/animations.css";
import '@/styles/posts.scss'


export default function App({ Component, pageProps }) {
  const metadata = {
    title: 'Mustafa Bhikhapurwala | Portfolio',
    description: 'Created with Next.js',
    keyword: 'Mustafa Bhikhapurwala , DevMustafa , bhikhapurmustafa , Mustafa B ',
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keyword" content={metadata.keyword} />
        {/* Add other meta tags, link tags, etc. as needed */}
      </Head>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </>
  );
}
