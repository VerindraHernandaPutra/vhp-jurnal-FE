// src/components/blog/CategoryCard.tsx
import { Component } from 'solid-js';
import { A } from '@solidjs/router';
import { CategoryType } from '../../data/mockCategories';
import './CategoryCard.css';

const CategoryCard: Component<{ category: CategoryType, aosDelay?: number }> = (props) => {
  const CategoryIcon = props.category.icon;

  return (
    <A href={`/category/${props.category.slug}`} class="card-link h-100">
      <div class="card h-100 shadow-sm border-0 text-center lift category-card" data-aos="fade-up" data-aos-delay={props.aosDelay || 0}>
        <div class="card-body">
          <div class={`bg-soft-${props.category.variant} avatar avatar-lg rounded-circle icon icon-with-bg icon-lg text-${props.category.variant} mx-auto`}>
            <CategoryIcon size={32} />
          </div>
          <h4 class="card-title fw-semibold mt-4 mb-2">{props.category.name}</h4>
          <p class="card-text text-muted">{props.category.description}</p>
        </div>
      </div>
    </A>
  );
};

export default CategoryCard;