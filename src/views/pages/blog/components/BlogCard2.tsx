import {BlogType} from "@/views/pages/blog/data";
import {truncateString} from "@/helpers/casing";
import { basePath } from "@/helpers";

const BlogCard2 = ({blog}: { blog: BlogType }) => {
    return (
        <div>
            <img src={blog.image} alt="crypto"
                 class="img-fluid d-block shadow rounded"/>

            <div class="mt-3">
                <a href="#">
                    <span class={`badge badge-soft-${blog.variant} mb-1`}>{blog.category}</span>
                </a>
            </div>

            <h4 class="fw-semibold mt-1">
                <a href={basePath + blog.url}>{blog.title}</a>
            </h4>

            <p class="text-muted">
                {truncateString(blog.description, 85)}
                <a href={basePath + blog.url} class="text-primary">read more</a>
            </p>
        </div>
    )
}

export default BlogCard2