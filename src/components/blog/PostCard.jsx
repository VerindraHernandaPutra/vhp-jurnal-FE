// src/components/blog/PostCard.jsx
import { A } from '@solidjs/router';
import './PostCard.css';

const PostCard = (props) => {
  const { post } = props;

  return (
    <A href={post.url} class="card-link d-flex h-100">
      <div class="card h-100 shadow-sm border-0 lift" data-aos="fade-up" data-aos-delay={props.aosDelay || 0}>
        <img src={post.image} class="card-img-top" alt={post.title} />
        <div class="card-body d-flex flex-column">
          {/* This div will now grow to fill available space */}
          <div class="flex-grow-1 mb-3">
            <span class={`badge bg-soft-${post.variant} text-${post.variant} mb-2`}>{post.category}</span>
            <h4 class="card-title fw-semibold">{post.title}</h4>
            <p class="card-text text-muted">{post.excerpt}</p>
          </div>
          {/* This div will be pushed to the bottom */}
          <div class="mt-auto d-flex align-items-center">
            <img src={post.author.image} alt={post.author.name} class="avatar avatar-xs rounded-circle me-2" />
            <div>
              <h6 class="m-0 fs-13">{post.author.name}</h6>
              <p class="text-muted mb-0 fs-13">
                {post.publishedAt} · {post.readTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </A>
  );
};

export default PostCard;