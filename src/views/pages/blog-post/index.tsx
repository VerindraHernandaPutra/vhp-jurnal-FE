// src/views/pages/blog-post/index.tsx
import { Component, createSignal, Show } from 'solid-js';
import { useParams } from '@solidjs/router';
import { Container, Row, Col, Button } from 'solid-bootstrap';
import { FiChevronsRight } from 'solid-icons/fi';
import { allPosts } from '@/data/mockAllPosts';

import PageMeta from '@/components/PageMeta';
import NavBar from '@/components/NavBar';
import MegaFooter from '@/components/layout/MegaFooter';
import BackToTop from '@/components/BackToTop';

import ArticleHeader from './sections/ArticleHeader';
import ArticleBody from './sections/ArticleBody';
import PostSidebar from './sections/PostSidebar';
import RelatedContent from './sections/RelatedContent';

const BlogPostPage: Component = () => {
  const params = useParams();
  const post = allPosts.find(p => p.url === `/blog/${params.slug}`);

  const [headings, setHeadings] = createSignal<{ id: string; text: string }[]>([]);
  const [isSidebarVisible, setIsSidebarVisible] = createSignal(true);

  return (
    <>
      <PageMeta title={`${post ? post.title : 'Post'} | Verindra HP`} />
      <NavBar />
      <main>
        <Show when={post} fallback={<Container class="text-center py-8"><h2>Post not found.</h2></Container>}>
          
          <ArticleHeader post={post!} />

          <section class="py-6 position-relative">
            <Container>
              <Row>
                <Show when={isSidebarVisible()}>
                    <Col lg={3}>
                        <PostSidebar headings={headings()} onHide={() => setIsSidebarVisible(false)} />
                    </Col>
                </Show>

                {/* REVISED: The show button is now part of the grid flow */}
                <Show when={!isSidebarVisible()}>
                    <Col lg={1} class="d-none d-lg-block">
                        <Button 
                            variant="light" 
                            class="btn-sm p-0 d-flex align-items-center justify-content-center sidebar-toggle-btn" 
                            onClick={() => setIsSidebarVisible(true)}
                        >
                            <FiChevronsRight />
                        </Button>
                    </Col>
                </Show>
                
                <Col lg={isSidebarVisible() ? 8 : 11} class="offset-lg-1">
                    <ArticleBody post={post!} setHeadings={setHeadings} />
                </Col>
              </Row>
            </Container>
          </section>

          <RelatedContent currentPost={post!} />
        </Show>
      </main>
      <MegaFooter />
      <BackToTop />
    </>
  );
};

export default BlogPostPage;