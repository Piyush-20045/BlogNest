import Comment from "./Comment";

const Comments = () => {
    return (
        <div className="m-3 p-1 md:w-4/5 rounded-lg">

            <h1 className="p-1 mt-4 text-blue-900 underline">Comments</h1>

            {/* INPUT AND COMMENT BTN */}
            <div className=" mt-3 py-2 md:p-2 rounded-xl bg-gray-100">
                <input type="text" placeholder="Add a comment..." className="focus:outline-none w-11/12 tab:w-9/12 lg:w-10/12 h-12 p-3 m-2 rounded-md border-gray-400 border-2"/>

                <button type="submit" className="text-sm tab:text-base bg-gray-400 ml-2 px-3 py-2 tab:py-3 rounded-md hover:bg-gray-500">Comment</button>
            </div>

            {/* SINGLE COMMENTS */}
            <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
    )
}

export default Comments;