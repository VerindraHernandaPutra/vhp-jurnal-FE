// src/components/blog/CategoryCard.jsx
import { A } from '@solidjs/router';
import './CategoryCard.css';

const CategoryCard = (props) => {
  const { category } = props;
  const CategoryIcon = category.icon;

  return (
    <A href={`/category/${category.slug}`} class="card-link h-100">
      <div class="card h-100 shadow-sm border-0 text-center lift category-card" data-aos="fade-up" data-aos-delay={props.aosDelay || 0}>
        <div class="card-body">
          <div class={`bg-soft-${category.variant} avatar avatar-lg rounded-circle icon icon-with-bg icon-lg text-${category.variant} mx-auto`}>
            <CategoryIcon size={32} />
          </div>
          <h4 class="card-title fw-semibold mt-4 mb-2">{category.name}</h4>
          <p class="card-text text-muted">{category.description}</p>
        </div>
      </div>
    </A>
  );
};

export default CategoryCard;