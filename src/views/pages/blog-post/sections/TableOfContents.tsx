// src/views/pages/blog-post/sections/TableOfContents.tsx
import { Component, For } from 'solid-js';
import { Offcanvas } from 'solid-bootstrap';
import './TableOfContents.css';

type Props = {
  show: boolean;
  onHide: () => void;
  headings: { id: string, text: string }[];
};

const TableOfContents: Component<Props> = (props) => {
  return (
    // REVISED: Added backdrop={false} and scroll={true} for a cleaner overlay
    <Offcanvas show={props.show} onHide={props.onHide} placement="start" backdrop={false} scroll={true}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title as="h5">Article Contents</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ul class="toc-list-offcanvas list-unstyled">
          <For each={props.headings}>
            {(heading) => (
              <li>
                <a href={`#${heading.id}`} onClick={props.onHide}>{heading.text}</a>
              </li>
            )}
          </For>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default TableOfContents;