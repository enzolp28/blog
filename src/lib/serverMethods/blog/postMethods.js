import { Post } from "@/lib/models/post";
import { connectToDB } from "@/lib/utils/db/connectToDB";
import { Tag } from "@/lib/models/tag";

export async function getPost(slug) {
    try {
        await connectToDB()

        const post = await Post.findOne({ slug }).populate({
            path: "tags",
            select: "name slug"
        })
        console.log("Poooost", post);

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