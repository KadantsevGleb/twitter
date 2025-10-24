"use client"

import Image from "@/components/Image"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

const PostModal = () => {

	const router = useRouter()

	function closeModal() {
		router.back()
	}

	return (
		<div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
			<div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
				{/*TOP*/}
				<div className="flex items-center justify-between">
					<X onClick={closeModal} className="cursor-pointer" />
					<div className="text-iconBlue font-bold">Drafts</div>
				</div>
				{/*CENTER*/}
				<div className="py-8 flex gap-4">
					<div className="relative size-10 rounded-full overflow-hidden">
						<Image path="posts/Saturn_iS2QqCH2Z.jpg" alt="profile picture" w={100} h={100} tr />
					</div>
					<textarea className="flex-1 bg-transparent outline-none text-lg field-sizing-content resize-none" placeholder="What is happening?!" />
				</div>
				{/*BOTTOM*/}
				<div className="flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
					<div className="flex items-center gap-4">
						<Image
							path="icons/image.svg"
							alt="icon"
							w={20}
							h={20}
						/>
						<Image
							path="icons/gif.svg"
							alt="icon"
							w={20}
							h={20}
						/>
						<Image
							path="icons/poll.svg"
							alt="icon"
							w={20}
							h={20}
						/>
						<Image
							path="icons/emoji.svg"
							alt="icon"
							w={20}
							h={20}
						/>
						<Image
							path="icons/schedule.svg"
							alt="icon"
							w={20}
							h={20}
						/>
						<Image
							path="icons/location.svg"
							alt="icon"
							w={20}
							h={20}
						/>
					</div>
					<button className="px-5 py-2 cursor-pointer bg-white text-black font-bold rounded-full">Post</button>
				</div>
			</div>
		</div>
	)
}

export default PostModal