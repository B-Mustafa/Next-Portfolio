import React from 'react';
import BaseLayout from '../../components/BaseLayout';
import { getPostBySlug, getAllPostIds } from '../../../lib/posts';

import html from "remark-html";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
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

  const processedContent =  remark()
    .use(remarkGfm)
    .use(html)
    .process(post.content);
   const contentHtml = processedContent.toString();


  return (
    <BaseLayout>
      <h1 className='title section-title'>{post.title}</h1>
      <p className='para padd-15'>{post.date}</p>
      <ReactMarkdown remarkPlugins={[remarkGfm]} children={post.content} className='content padd-15' />
    </BaseLayout>
  );
};


export default BlogPost;
