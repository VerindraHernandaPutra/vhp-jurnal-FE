import { createEffect, For, onCleanup, createSignal } from "solid-js";
import { Button, Card, Col, Form, Row } from "solid-bootstrap";

import AuthLayout from "@/layouts/AuthLayout";
import PageMeta from "@/components/PageMeta";
import LogoBox from "@/components/LogoBox";

import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { authSlides } from "@/helpers/data";
import { basePath } from "@/helpers";
import { useAuth } from "@/stores/auth";
import { useNavigate } from "@solidjs/router";

const Page = () => {
  let swiperEle: HTMLDivElement | undefined;

  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [remember, setRemember] = createSignal(false);
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
      await login(email(), password(), remember());
      navigate("/"); // redirect after login (adjust later if you add /dashboard)
    } catch (err: any) {
      // Laravel returns { message, errors }
      setFormError(err?.message ?? "Login failed");
    }
  }

  return (
    <AuthLayout>
      <PageMeta title="Prompt - Log in to your account" />

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

                  <h6 class="h5 mb-0 mt-3">Welcome back!</h6>
                  <p class="text-muted mt-1 mb-4">
                    Enter your email address and password to access the admin panel.
                  </p>

                  <Form class="authentication-form" onSubmit={onSubmit}>
                    {formError() && (
                      <div class="alert alert-danger py-2">{formError()}</div>
                    )}

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

                    <Form.Group class="mb-0">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password()}
                        onInput={(e: any) => setPassword(e.currentTarget.value)}
                      />
                    </Form.Group>

                    <div class="mb-3 text-end">
                      <a
                        href={basePath + "/auth/forgot-password"}
                        class="text-center text-muted text-unline-dashed fs-13 mt-2"
                      >
                        Forgot password?
                      </a>
                    </div>

                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      class="mb-3"
                      checked={remember()}
                      onChange={(e: any) => setRemember(e.currentTarget.checked)}
                    />

                    <div class="mb-0 text-center d-grid">
                      <Button variant="primary" type="submit" disabled={loading()}>
                        {loading() ? "Logging in..." : "Log In"}
                      </Button>
                    </div>
                  </Form>
                </div>
              </Col>

              <Col md={5} class="offset-md-1 d-none d-md-inline-block">
                <div class="position-relative overflow-hidden mt-5 pt-5">
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

        {/* Removed register prompt */}
      </Col>
    </AuthLayout>
  );
};

export default Page;
