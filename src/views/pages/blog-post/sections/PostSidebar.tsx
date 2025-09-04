// src/views/pages/blog-post/sections/PostSidebar.tsx
import { Component, For } from 'solid-js';
import { FiSearch, FiChevronsLeft } from 'solid-icons/fi';
import './PostSidebar.css';

type Props = {
  headings: { id: string, text: string }[];
  onHide: () => void;
};

const PostSidebar: Component<Props> = (props) => {
  return (
    <div class="sticky-sidebar">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="fw-semibold m-0">Contents</h5>
        {/* UPDATED: Changed to an icon-only button */}
        <button class="btn btn-sm btn-light p-0 d-lg-flex d-none align-items-center justify-content-center sidebar-toggle-btn" onClick={props.onHide}>
            <FiChevronsLeft />
        </button>
      </div>
      <ul class="list-unstyled toc-list mt-3">
        <For each={props.headings}>
          {(heading) => (
            <li><a href={`#${heading.id}`}>{heading.text}</a></li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default PostSidebar;