import Link from "next/link"
import Image from "@/components/Image"
import Post from "@/components/Post"
import Comments from "@/components/Comments"

const PostStatus = () => {
	return (
		<div>
			<div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-black/85">
				<Link href="/">
					<Image
						path="icons/back.svg"
						alt="go back"
						w={24}
						h={24}
					/>
				</Link>
				<h1 className="font-bold text-lg">Post</h1>
			</div>
			<Post type='status' />
			<Comments />
		</div>
	)
}

export default PostStatus
