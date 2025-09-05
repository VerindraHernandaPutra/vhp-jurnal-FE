// src/views/pages/blog-post/sections/ArticleBody.tsx
import { Component, onMount } from 'solid-js';
import { BlogType } from '@/data/mockAllPosts';
import './ArticleBody.css'; // Import the new CSS file

type Props = {
  post: BlogType;
  setHeadings: (headings: { id: string, text: string }[]) => void;
};

const ArticleBody: Component<Props> = (props) => {
  let contentRef: HTMLDivElement | undefined;
  onMount(() => {
    const headings = Array.from(contentRef?.querySelectorAll('h2') || []).map(h => ({
      id: h.id,
      text: h.textContent || '',
    }));
    props.setHeadings(headings);
  });
  return (
    <div ref={contentRef} class="article-content" innerHTML={props.post.content || ''}></div>
  );
};

export default ArticleBody;