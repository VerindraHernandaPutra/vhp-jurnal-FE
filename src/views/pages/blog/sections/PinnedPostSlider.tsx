// src/views/pages/blog/sections/PinnedPostSlider.tsx
import { Component, For, onMount, onCleanup } from 'solid-js';
import { Container, Row, Col } from 'solid-bootstrap';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { allPosts } from '../../../../data/mockAllPosts';
import BlogCard1 from '../components/BlogCard1'; // Import the card component
import './PinnedPostSlider.css';

const PinnedPostSlider: Component = () => {
  let swiperEl: HTMLDivElement | undefined;
  const pinnedPosts = allPosts.filter(p => p.isPinned);

  onMount(() => {
    if (swiperEl) {
      const swiper = new Swiper(swiperEl, {
        modules: [Autoplay, Pagination],
        loop: true,
        spaceBetween: 24, // Add some space between slides if needed
        autoplay: { delay: 5000 },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      onCleanup(() => swiper.destroy(true, true));
    }
  });

  return (
    <section class="pinned-slider-section py-6" data-aos="fade-up">
        <Container>
            <Row class="justify-content-center">
                <Col lg={8} class="text-center">
                    <h1 class="display-5 fw-semibold">Featured Posts</h1>
                    <p class="text-muted">A few of my favorite or most recent articles I think you'll enjoy.</p>
                </Col>
            </Row>
            <Row class="mt-5">
                <Col lg={12}>
                    <div ref={swiperEl} class="swiper">
                        <div class="swiper-wrapper">
                            <For each={pinnedPosts}>
                                {(post) => (
                                    <div class="swiper-slide h-auto">
                                        <div class="h-100">
                                            <BlogCard1 blog={post} />
                                        </div>
                                    </div>
                                )}
                            </For>
                        </div>
                        <div class="swiper-pagination mt-5"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default PinnedPostSlider;