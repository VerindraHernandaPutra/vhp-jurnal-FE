import {Title, Meta, Link} from "@solidjs/meta";
import {author as appAuthor, appTitle, appDescription} from "@/helpers";

type PropsType = {
    title?: string
    description?: string;
    author?: string;
    favicon?: string;
}

import faviconImg from "@/assets/images/favicon.png"

const PageMeta = ({title, description, favicon, author}: PropsType) => {
    return (
        <>
            <Title>{title ? title : appTitle}</Title>
            <Meta name="description" content={description ? description : appDescription}/>
            <Meta name="author" content={author ? author : appAuthor}/>
            <Link rel="icon" type="image/png" href={favicon ? favicon : faviconImg}/>
        </>
    )
}

export default PageMeta