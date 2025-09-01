import { basePath } from "@/helpers";
import {BlogType} from "@/views/landings/crypto/types";

const BlogCard = ({blog}: { blog: BlogType }) => {
    return (
        <div class="mb-4" data-aos="fade-up" data-aos-duration="300">
            <div class="crypto-blog-box position-relative">
                <span class={`ribbon bg-${blog.variant} fw-medium`}>{blog.category}</span>
                <img src={blog.image} alt="" class="img-fluid d-block shadow rounded"/>
            </div>
            <p class="text-muted mt-3 mb-0 fs-14">{blog.publishedOn} <b>·</b> {blog.readTime} read</p>
            <h4 class="mt-1"><a href={basePath +blog.url} class="text-dark">{blog.title}</a></h4>
        </div>
    )
}

export default BlogCard