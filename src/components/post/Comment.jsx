const Comment = () => {
    return (
        <div className="p-4 mt-2 mb-6 bg-gray-100 rounded-xl">

            {/* USER IMG AND NAME */}
            <div className="flex items-center gap-3 text-sm">
                <img src="userImg.jpeg" alt="" className="h-8 w-8 rounded-full
                " />
                <span className="font-medium">Piyush Yadav</span>
                <span className="text-gray-500">2 days ago</span>
            </div>
            <div className="mt-4">
                {/* comment */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quasi consequuntur maiores illum inventore consectetur reprehenderit labore</p>

            </div>
        </div>
    )
}

export default Comment;