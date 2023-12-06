import BaseLayout from "@/components/BaseLayout";
import { getSortedPostsData } from '../../lib/posts';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <BaseLayout>
      <section style={{ padding: '1rem' }} className="padd-15">
        <h2 style={{ fontSize: '2rem' }} className="section-title">Blog</h2>
        <ul style={{ listStyle: 'none', padding: 0 }} className="blog-context" >
          {allPostsData.map(({ id, date, title, slug }) => (
          <Link href="/blog/[slug]" as={`/blog/${slug}`} className="blog-link ">
            <li key={id} className="blog-card" >
                {title}
              <br/>
              {slug}
              <br />
              {date}
            </li>
            </Link>
          ))}
        </ul>
      </section>
    </BaseLayout>
  );
}
