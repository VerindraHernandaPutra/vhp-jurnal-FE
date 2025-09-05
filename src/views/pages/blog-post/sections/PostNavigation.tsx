// src/views/pages/blog-post/sections/PostNavigation.tsx
import { Component, Show } from 'solid-js';
import { A } from '@solidjs/router';
import { Button, OverlayTrigger, Popover, Card } from 'solid-bootstrap';
import { allPosts, BlogType } from '@/data/mockAllPosts';
import { FiArrowLeft, FiArrowRight } from 'solid-icons/fi';
import './PostNavigation.css';

const PostNavigation: Component<{ currentPost: BlogType }> = (props) => {
  const currentIndex = allPosts.findIndex(p => p.id === props.currentPost.id);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const NavPopover = (post: BlogType) => (
    <Popover id={`popover-nav-${post.id}`} class="nav-popover">
      <Card class="border-0">
        <Card.Body class="p-2 d-flex align-items-center">
          <img src={post.image} width="60" class="me-3 rounded-sm" alt="thumb" />
          <div class="flex-grow-1">
            <h6 class="fs-14 fw-semibold mt-0 mb-1">{post.title}</h6>
            <span class="d-block fs-13 text-muted">by {post.author.name}</span>
          </div>
        </Card.Body>
      </Card>
    </Popover>
  );

  return (
    <section class="post-navigation py-5">
      <hr />
      <div class="d-flex align-items-center justify-content-between">
        <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={prevPost ? NavPopover(prevPost) : <></>}>
          <span class="d-inline-block">
            <A href={prevPost?.url || '#'} class={!prevPost ? 'pe-none' : ''}>
              <Button variant="light" class="nav-button" disabled={!prevPost}>
                <FiArrowLeft class="me-2" /> Prev Post
              </Button>
            </A>
          </span>
        </OverlayTrigger>

        <div class="author-bio-center text-center">
            <img src={props.currentPost.author.image} alt={props.currentPost.author.name} class="avatar avatar-sm rounded-circle" />
            <h6 class="mt-2 mb-0 fs-15">{props.currentPost.author.name}</h6>
            <p class="text-muted fs-14">I write about the latest trend in web design and development.</p>
        </div>
        
        <OverlayTrigger trigger={["hover", "focus"]} placement="top" overlay={nextPost ? NavPopover(nextPost) : <></>}>
          <span class="d-inline-block">
            <A href={nextPost?.url || '#'} class={!nextPost ? 'pe-none' : ''}>
              <Button variant="light" class="nav-button" disabled={!nextPost}>
                Next Post <FiArrowRight class="ms-2" />
              </Button>
            </A>
          </span>
        </OverlayTrigger>
      </div>
      <hr />
    </section>
  );
};

export default PostNavigation;