import { createEffect, For, onCleanup, createSignal } from "solid-js";
import { Button, Card, Col, Form, Row } from "solid-bootstrap";

import AuthLayout from "@/layouts/AuthLayout";
import PageMeta from "@/components/PageMeta";
import LogoBox from "@/components/LogoBox";

import { FiGithub } from "solid-icons/fi";

import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";

import { authSlides } from "@/helpers/data";
import { basePath } from "@/helpers";
import { useAuth } from "@/stores/auth";
import { useNavigate } from "@solidjs/router";

const Page = () => {
  let swiperEle: HTMLDivElement | undefined;

  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [formError, setFormError] = createSignal<string | null>(null);

  createEffect(() => {
    if (swiperEle) {
      const swiper = new Swiper(swiperEle, {
        modules: [Autoplay, Pagination],
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        autoplay: { delay: 5000 },
        breakpoints: { 576: { slidesPerView: 1.2 }, 768: { slidesPerView: 1 } },
        roundLengths: true,
        pagination: { el: ".swiper-pagination", dynamicBullets: true },
      });
      onCleanup(() => swiper.destroy());
    }
  });

  async function onSubmit(e: Event) {
    e.preventDefault();
    setFormError(null);
    try {
      await register(name(), email(), password());
      navigate("/"); // TODO: set to your dashboard/home
    } catch (err: any) {
      setFormError(err?.message ?? "Registration failed");
    }
  }

  return (
    <AuthLayout>
      <PageMeta title="Prompt - Create a new account" />

      <Col xl={12}>
        <Card>
          <Card.Body class="p-0">
            <Row class="g-0">
              <Col md={5} class="shadow">
                <div class="p-xl-5 p-3">
                  <div class="mx-auto mb-5">
                    <a href="/" class="d-flex">
                      <LogoBox className="align-self-center" />
                    </a>
                  </div>

                  <h6 class="h5 mb-0 mt-3">Create Your Account</h6>
                  <p class="text-muted mt-1 mb-4">
                    Don't have an account? Create your account, it takes less than a minute.
                  </p>

                  <Form class="authentication-form" onSubmit={onSubmit}>
                    {formError() && <div class="alert alert-danger py-2">{formError()}</div>}

                    <Form.Group class="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        required
                        value={name()}
                        onInput={(e: any) => setName(e.currentTarget.value)}
                      />
                    </Form.Group>

                    <Form.Group class="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email()}
                        onInput={(e: any) => setEmail(e.currentTarget.value)}
                      />
                    </Form.Group>

                    <Form.Group class="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password()}
                        onInput={(e: any) => setPassword(e.currentTarget.value)}
                      />
                    </Form.Group>

                    <div class="mb-0 text-center d-grid">
                      <Button variant="primary" type="submit" disabled={loading()}>
                        {loading() ? "Registering..." : "Register"}
                      </Button>
                    </div>
                  </Form>

                  <div class="py-3 text-center">
                    <span class="fs-13 fw-bold">OR</span>
                  </div>
                  <Row>
                    <Col xs={12} class="text-center">
                      <Button variant="white" class="w-100" disabled>
                        <FiGithub size={20} class='icon-xs me-2' />
                        Sign Up with Github
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>

              <Col md={5} class="offset-md-1 d-none d-md-inline-block">
                <div class="position-relative mt-5 pt-5">
                  <div class="slider">
                    <div ref={swiperEle} class="swiper-container">
                      <div class="swiper-wrapper">
                        <For each={authSlides}>
                          {(item) => (
                            <div class="swiper-slide">
                              <div class="swiper-slide-content">
                                <Row class="text-center">
                                  <Col>
                                    <img src={item.image} alt="" class="w-75" />
                                  </Col>
                                </Row>
                                <Row class="text-center my-4 pb-5">
                                  <Col>
                                    <h5 class="fw-medium fs-16">{item.title}</h5>
                                    <p class="text-muted">{item.description}</p>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          )}
                        </For>
                      </div>
                      <div class="swiper-pagination"></div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>

        <Row class="mt-3">
          <Col xs={12} class="text-center">
            <p class="text-muted">
              Already have an account?
              <a href={basePath + "/auth/login"} class="text-primary fw-semibold ms-1">Log In</a>
            </p>
          </Col>
        </Row>
      </Col>
    </AuthLayout>
  );
};

export default Page;
