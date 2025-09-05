// src/views/pages/blog-post/sections/InlineToc.tsx
import { Component, For } from 'solid-js';
import './InlineToc.css';

type Props = {
  headings: { id: string, text: string }[];
};

const InlineToc: Component<Props> = (props) => {
  return (
    <div class="toc-wrapper">
      <h5 class="fw-semibold">In this Article</h5>
      <ul class="list-unstyled toc-list-inline mt-3">
        <For each={props.headings}>
          {(heading) => (
            <li>
              <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default InlineToc;