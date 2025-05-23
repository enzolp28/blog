import { getPost } from "@/lib/serverMethods/blog/postMethods"
import Link from "next/link";
import "./article-styles.css"
import "prism-themes/themes/prism-vsc-dark-plus.css"

export default async function page({ params }) {
    const { slug } = await params
    const post = await getPost(slug)

    return (
        <main className="u-main-container u-padding-content-container">
            <h1 className="text-4xl mb-3">{post.title}</h1>
            <p className="mb-6">
                {post.tags.map(tag => (
                    <Link
                        href={`categories/tag/${tag.slug}`}
                        className="mr-4 underline"
                        key={tag.slug}
                    >
                        #{tag.name}
                    </Link>
                ))}
            </p>
            <div
                className="article-styles"
                dangerouslySetInnerHTML={{ __html: post.markdownHTMLResult }}
            >

            </div>
        </main>
    )
}
