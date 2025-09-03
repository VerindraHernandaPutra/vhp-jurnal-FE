// src/views/pages/blog/sections/BlogListing.tsx
import { For, Show, Component } from 'solid-js';
import { Container, Row, Col } from 'solid-bootstrap';
import { allPosts, categories } from '../../../../data/mockAllPosts';
import BlogCard2 from '../components/BlogCard2';
import PinnedPostSlider from './PinnedPostSlider';
import './BlogListing.css';

type BlogListingProps = {
  searchQuery: string;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

const BlogListing: Component<BlogListingProps> = (props) => {
  const regularPosts = allPosts.filter(p => !p.isPinned);

  const filteredPosts = () => {
    let posts = regularPosts;

    // 1. Filter by active category
    if (props.activeCategory !== 'All') {
      posts = posts.filter(post => post.category === props.activeCategory);
    }

    // 2. Filter by search query
    const query = props.searchQuery.toLowerCase();
    if (query) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
      );
    }

    return posts;
  };

  return (
    <section class="py-6 position-relative">
      <PinnedPostSlider />
      <Container>
        <Row class="justify-content-center mt-5">
          <Col lg={8} class="text-center" data-aos="fade-up">
            <h2 class="display-5 fw-semibold">All Posts</h2>
            <p class="text-muted">Browse all articles by category below.</p>
          </Col>
        </Row>
        <Row class="justify-content-center mt-4">
          <Col lg={10} class="text-center" data-aos="fade-up">
            <div class="filter-menu">
              <For each={categories}>
                {(category) => (
                  <button
                    class={`filter-menu-item ${props.activeCategory === category ? 'active' : ''}`}
                    onClick={() => props.onCategoryChange(category)}
                  >
                    {category}
                  </button>
                )}
              </For>
            </div>
          </Col>
        </Row>

        <Row class="mt-5">
          <Show 
            when={filteredPosts().length > 0}
            fallback={
              <Col class="text-center py-5">
                <h4 class="text-muted">No posts found. Try a different search or category.</h4>
              </Col>
            }
          >
            <For each={filteredPosts()}>
              {(post, index) => (
                <Col lg={4} md={6} class="mb-4">
                  <div class="h-100" data-aos="fade-up" data-aos-delay={(index() % 3) * 100}>
                    <BlogCard2 blog={post} />
                  </div>
                </Col>
              )}
            </For>
          </Show>
        </Row>
      </Container>
    </section>
  );
};

export default BlogListing;