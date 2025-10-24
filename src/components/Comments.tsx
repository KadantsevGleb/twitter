import Image from "./Image"
import Post from "./Post"

const Comments = () => {
	return (
		<div>
			<form className="flex justify-between gap-4 p-4">
				<div className="relative size-10 rounded-full overflow-hidden self-start">
					<Image
						path="general/avatar.png"
						alt=""
						w={100}
						h={100}
						tr
					/>
				</div>
				<textarea
					className="flex-1 resize-none field-sizing-content bg-transparent outline-none p-2 text-xl"
					placeholder="Leave your reply..."
				/>
				<button className="py-2 px-4 font-bold bg-white text-black rounded-full self-end cursor-pointer">Reply</button>
			</form>
			<Post type="comment"/>
			<Post type="comment"/>
			<Post type="comment"/>
			<Post type="comment"/>
		</div>
	)
}

export default Comments
