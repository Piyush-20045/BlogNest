import PostListItem from "../post/PostListItem";

const PostList = () => {
    return (
        <div>
            <p className="mt-10 mb-6 text-lg text-center text-gray-600">Recent Posts</p>

            <div className="flex justify-center flex-wrap w-full gap-8">
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
            </div>
        </div>
    )
}

export default PostList;