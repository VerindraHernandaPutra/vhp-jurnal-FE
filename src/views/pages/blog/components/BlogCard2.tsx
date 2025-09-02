// src/views/pages/blog/components/BlogCard2.tsx
import { Component } from 'solid-js';
import { A } from '@solidjs/router';
import { BlogType } from '../../../../data/mockAllPosts'; // CORRECTED: Removed .ts extension
import { truncateString } from '@/helpers/casing';
import './BlogCard2.css';

const BlogCard2: Component<{ blog: BlogType }> = ({ blog }) => {
  // ... component code remains the same
  return (
    <div class="card h-100 shadow-sm border-0 lift">
      <A href={blog.url}>
        <img src={blog.image} class="card-img-top" alt={blog.title} />
      </A>
      <div class="card-body d-flex flex-column">
        <div class="flex-grow-1">
          <span class={`badge bg-soft-${blog.variant} text-${blog.variant} mb-2`}>{blog.category}</span>
          <h4 class="card-title fw-semibold">
            <A href={blog.url}>{blog.title}</A>
          </h4>
          <p class="card-text text-muted">{blog.excerpt}</p>
        </div>
        <div class="mt-auto d-flex align-items-center pt-2">
          <img src={blog.author.image} alt={blog.author.name} class="avatar avatar-xs rounded-circle me-2" />
          <div>
            <h6 class="m-0 fs-13">{blog.author.name}</h6>
            <p class="text-muted mb-0 fs-13">{blog.publishedAt} · {blog.readTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;