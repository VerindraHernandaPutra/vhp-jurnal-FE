// src/views/pages/blog-post/sections/ArticleBody.tsx
import { Component, onMount } from 'solid-js';
import { BlogType } from '@/data/mockAllPosts';

type Props = {
  post: BlogType;
  setHeadings: (headings: { id: string, text: string }[]) => void;
};

const ArticleBody: Component<Props> = (props) => {
  let contentRef: HTMLDivElement | undefined;

  onMount(() => {
    // Find all h2 tags in the content and pass them up to the parent
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