import React from 'react';
import BaseLayout from '../../components/BaseLayout';
import { getPostBySlug, getAllPostIds } from '../../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  return {
    props: {
      post,
    },
  };
}

const BlogPost = ({ post }) => {
  if (!post) {
    return (
      <BaseLayout>
        <p>Post not found</p>
      </BaseLayout>
    );
  }

  const processedContent = remark().use(gfm).use(html).processSync(post.content);
  const content = processedContent.toString();

  return (
    <BaseLayout>
      <h1 className='title section-title'>{post.title}</h1>
      <p className='para padd-15'>{post.date}</p>
      
      <ReactMarkdown remarkPlugins={[gfm]} className='content padd-15'>{post.content}</ReactMarkdown>
    </BaseLayout>
  );
};

export default BlogPost;
