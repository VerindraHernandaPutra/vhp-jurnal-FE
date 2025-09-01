import {For} from "solid-js";
import {Button, Card, Col, Container, Form, Pagination, Row} from "solid-bootstrap";

import BlogCard1 from "@/views/pages/blog/components/BlogCard1";
import BlogCard2 from "@/views/pages/blog/components/BlogCard2";
import {blogs1, blogs2} from "@/views/pages/blog/data";

import avatar7 from "@/assets/images/avatars/img-7.jpg"
import avatar2 from "@/assets/images/avatars/img-2.jpg"
import avatar4 from "@/assets/images/avatars/img-4.jpg"
import post3 from "@/assets/images/blog/post3.jpg"
import { basePath } from "@/helpers";

const Listing = () => {
    return (
      <section class="py-6 position-relative">
        <Container>
          <Row class="justify-content-lg-between">
            <Col lg={12}>
              <div class="d-flex align-items-center mb-5">
                <h5 class="me-2 fw-medium">Tags:</h5>
                <div>
                  <a class="btn btn-sm btn-white mb-1 me-1" href="#">
                    Business
                  </a>
                  <a class="btn btn-sm btn-white mb-1 me-1" href="#">
                    Community
                  </a>
                  <a class="btn btn-sm btn-white mb-1 me-1" href="#">
                    Announcement
                  </a>
                  <a class="btn btn-sm btn-white mb-1 me-1" href="#">
                    Tutorials
                  </a>
                  <a class="btn btn-sm btn-white mb-1 me-1" href="#">
                    Resources
                  </a>
                  <a class="btn btn-sm btn-white mb-1" href="#">
                    Interview
                  </a>
                </div>
              </div>
            </Col>

            <Col lg={12}>
              <Row data-aos="fade-up" data-aos-duration="300">
                <Col lg={8}>
                  <BlogCard1 blog={blogs1[0]} />
                </Col>
                <Col lg={4}>
                  <div class="border rounded px-4 py-3">
                    <div class="mb-4">
                      <h4 class="mt-0">
                        Get the latest on product development from Prompt
                      </h4>
                      <p class="text-muted">
                        We send a weekly newsletter containing latest updates in
                        product development
                      </p>
                    </div>

                    <Form>
                      <Form.Group class="mb-2">
                        <Form.Control
                          type="email"
                          placeholder="Enter Your Email"
                        />
                      </Form.Group>

                      <Button
                        variant="primary"
                        type="submit"
                        class="d-block w-100 mb-1"
                      >
                        Subscribe
                      </Button>
                      <p>
                        <small>*No spam ever.</small>
                      </p>
                    </Form>
                  </div>
                </Col>
              </Row>

              <Row class="mt-6" data-aos="fade-up">
                <For each={blogs2}>
                  {(blog) => (
                    <Col lg={4}>
                      <BlogCard2 blog={blog} />
                    </Col>
                  )}
                </For>
              </Row>

              <Row class="mt-6" data-aos="fade-up">
                <Col lg={8} class="h-100">
                  <BlogCard1 blog={blogs1[1]} />
                </Col>

                <Col lg={4}>
                  <Card class="card-listing-item">
                    <div class="card-img-top-overlay">
                      <div class="overlay"></div>
                      <span class="card-badge top-right bg-danger text-white">
                        Resource
                      </span>
                      <img src={post3} alt="" class="card-img-top" />

                      <div class="card-overlay-bottom">
                        <h2 class="fw-semibold">
                          <a
                            href={basePath + "/pages/blog/post"}
                            class="text-white"
                          >
                            Top 10 ideas to improve the team productivity
                          </a>
                        </h2>

                        <div class="avatar-group mt-auto">
                          <a href="" class="avatar-group-item shadow-lg">
                            <img
                              src={avatar7}
                              alt="image"
                              class="img-fluid avatar-xs rounded rounded-circle avatar-border"
                            />
                          </a>
                          <a href="" class="avatar-group-item shadow-lg">
                            <img
                              src={avatar2}
                              alt="image"
                              class="img-fluid avatar-xs rounded rounded-circle avatar-border"
                            />
                          </a>
                          <a href="" class="avatar-group-item shadow-lg">
                            <img
                              src={avatar4}
                              alt="image"
                              class="img-fluid avatar-xs rounded rounded-circle avatar-border"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>

              <Row class="mt-6" data-aos="fade-up">
                <For each={blogs2}>
                  {(blog) => (
                    <Col lg={4}>
                      <BlogCard2 blog={blog} />
                    </Col>
                  )}
                </For>
              </Row>

              <Row class="mt-5">
                <Col lg={12}>
                  <Pagination class="d-flex align-items-center justify-content-center">
                    <Pagination.Prev class="me-1">Previous</Pagination.Prev>
                    <Pagination.Item class="me-1" active>
                      {" "}
                      {1}
                    </Pagination.Item>
                    <Pagination.Item class="me-1">{2}</Pagination.Item>
                    <Pagination.Item class="me-1">{3}</Pagination.Item>
                    <Pagination.Next>Next</Pagination.Next>
                  </Pagination>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
}

export default Listing