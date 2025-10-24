import Link from "next/link"
import Image from "./Image"

const PopularTags = () => {
	return (
		<div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
			<h2 className="text-xl font-bold text-textGrayLight">What's Happening</h2>
			{/* TRENDS EVENT */}
			<div className="flex gap-4">
				<div className="relative size-20 rounded-xl overflow-hidden">
					<Image path="posts/summer_KFnusBbmk.jpg" alt="event" w={120} h={120} tr />
				</div>
				<div className="flex-1">
					<h3 className="font-bold text-textGrayLight">Everlasting Summer</h3>
					<span className="text-sm text-textGray">Last Night</span>
				</div>
			</div>
			{/* TOPICS */}
			<div>
				<div className="flex items-center justify-between">
					<span className="text-textGray text-sm">Technology • Trending</span>
					<Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
				</div>
				<h4 className="text-textGrayLight font-bold">OpenAI</h4>
				<span className="text-textGray text-sm">20K posts</span>
			</div>
			{/* TOPICS */}
			<div>
				<div className="flex items-center justify-between">
					<span className="text-textGray text-sm">GitHub • Trending</span>
					<Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
				</div>
				<h4 className="text-textGrayLight font-bold">Kadantsev</h4>
				<span className="text-textGray text-sm">1kk posts</span>
			</div>
			{/* TOPICS */}
			<div>
				<div className="flex items-center justify-between">
					<span className="text-textGray text-sm">Politics • Trending</span>
					<Image path="icons/infoMore.svg" alt="info" w={16} h={16} />
				</div>
				<h4 className="text-textGrayLight font-bold">Putin</h4>
				<span className="text-textGray text-sm">52K posts</span>
			</div>
			<Link href='/' className="text-iconBlue text-sm" >Show More</Link>
		</div>
	)
}

export default PopularTags