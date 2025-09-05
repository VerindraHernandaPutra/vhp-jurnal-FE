// src/views/pages/blog-post/index.tsx
import { Component, createSignal, Show } from 'solid-js';
import { useParams } from '@solidjs/router';
import { Container, Row, Col } from 'solid-bootstrap';
import { allPosts } from '@/data/mockAllPosts';

import PageMeta from '@/components/PageMeta';
import NavBar from '@/components/NavBar';
import MegaFooter from '@/components/layout/MegaFooter';
import BackToTop from '@/components/BackToTop';
import ArticleHeader from './sections/ArticleHeader';
import ArticleBody from './sections/ArticleBody';
import PostNavigation from './sections/PostNavigation';
import RelatedContent from './sections/RelatedContent';
import InlineToc from './sections/InlineToc';

const BlogPostPage: Component = () => {
  const params = useParams();
  const post = allPosts.find(p => p.url === `/blog/${params.slug}`);
  
  const [headings, setHeadings] = createSignal<{ id: string; text: string }[]>([]);
  const [isTocVisible, setIsTocVisible] = createSignal(false);

  return (
    <>
      <PageMeta title={`${post ? post.title : 'Post'} | Verindra HP`} />
      <NavBar />
      <main>
        <Show when={post} fallback={<Container class="text-center py-8"><h2>Post not found.</h2></Container>}>
          
          <ArticleHeader post={post!} />

          <section class="pb-6 pt-2 position-relative">
            <Container class="container-xxl"> 
              <Row class="justify-content-center">
                {/* Edit this to edit layout length */}
                <Col lg={12} xl={10}> 
                  
                  {/* REVISED: Simplified the TOC toggle structure */}
                  <div class="pt-4 text-start">
                    <button class="toc-trigger-btn" onClick={() => setIsTocVisible(!isTocVisible())}>
                      {isTocVisible() ? 'Hide Article Contents' : 'Show Article Contents'}
                    </button>
                    <Show when={isTocVisible()}>
                      <InlineToc headings={headings()} />
                    </Show>
                  </div>

                  <ArticleBody post={post!} setHeadings={setHeadings} />
                </Col>
              </Row>
            </Container>
          </section>

          <Container class="container-xxl">
            <PostNavigation currentPost={post!} />
          </Container>

          <RelatedContent currentPost={post!} />

        </Show>
      </main>
      <MegaFooter />
      <BackToTop />
    </>
  );
};

export default BlogPostPage;