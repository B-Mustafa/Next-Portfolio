import { SidebarProvider } from "@/context/SidebarContext";
import Head from 'next/head';
import "@/styles/globals.css";
import "@/styles/animations.css";
import '@/styles/posts.scss'

export default function App({ Component, pageProps }) {
  const metadata = {
    title: 'Mustafa Bhikhapurwala | Portfolio',
    description: 'Created with Next.js',
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add other meta tags, link tags, etc. as needed */}
      </Head>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </>
  );
}
