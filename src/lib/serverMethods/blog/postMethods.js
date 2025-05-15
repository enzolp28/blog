import { Post } from "@/lib/models/post";
import { connectToDB } from "@/lib/utils/db/connectToDB";

export async function getPost(slug) {
    try {
        await connectToDB()

        const post = await Post.findOne({ slug })
        return post
    } catch (error) {
        console.error("Error while fetch a post", error);
        throw new Error("Failed to fetch post")
    }
}

export async function getPosts() {
    try {
        await connectToDB()
        const posts = await Post.find({})
        return posts
    } catch (error) {
        throw new Error('Error ')
    }
}