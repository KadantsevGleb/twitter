import Feed from "@/components/Feed"
import Image from "@/components/Image"
import Link from "next/link"

const UserPage = () => {
	return (
		<div>
			{/*PROFILE TITLE*/}
			<div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-black/85">
				<Link href="/">
					<Image
						path="icons/back.svg"
						alt="go back"
						w={24}
						h={24}
					/>
				</Link>
				<h1 className="font-bold text-lg">Kadantsev Gleb</h1>
			</div>
			{/*INFO*/}
			<div>
				{/*COVER & AVATAR CONTAINER*/}
				<div className="relative w-full">
					{/*COVER*/}
					<div className="w-full aspect-[3/1] relative">
						<Image
							path="posts/summer_KFnusBbmk.jpg"
							alt=""
							w={600}
							h={200}
							tr
						/>
					</div>
					{/*AVATAR*/}
					<div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-black absolute left-4 -translate-y-1/2">
						<Image
							path="general/avatar.png"
							alt=""
							w={100}
							h={100}
							tr
						/>
					</div>
				</div>
				<div className="flex w-full items-center justify-end gap-2 p-2">
					<div className="size-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
						<Image
							path="icons/more.svg"
							alt=""
							w={20}
							h={20}
						/>
					</div>
					<div className="size-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
						<Image
							path="icons/explore.svg"
							alt=""
							w={20}
							h={20}
						/>
					</div>
					<div className="size-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
						<Image
							path="icons/message.svg"
							alt=""
							w={20}
							h={20}
						/>
					</div>
					<button className="py-2 px-4 bg-white text-black font-bold rounded-full">Follow</button>
				</div>
				{/*USER DETAILS*/}
				<div className="p-4 flex flex-col gap-2">
					{/*USERNAME & HANDLE*/}
					<div>
						<h2 className="text-2xl font-bold">Kadantsev Gleb</h2>
						<span className="text-textGray text-sm">@KadantsevGleb</span>
					</div>
					<p>telegram: @arcanum451</p>
					<div className="flex gap-4 text-textGray text-[15[x]">
						<div className="flex items-center gap-2">
							<Image
								path="icons/userLocation.svg"
								alt="location"
								w={20}
								h={20}
							/>
							<span>Russia</span>
						</div>
						<div className="flex items-center gap-2">
							<Image
								path="icons/date.svg"
								alt="location"
								w={20}
								h={20}
							/>
							<span>Joined may 2021</span>
						</div>
					</div>
					{/*FOLLOWINGS & FOLLOWERS */}
					<div className="flex gap-4">
						<div className="flex items-center gap-2">
							<span className="font-bold">109</span>
							<span className="text-textGray text-[15px]">Followers</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="font-bold">52</span>
							<span className="text-textGray text-[15px]">Followings</span>
						</div>
					</div>
				</div>
			</div>
			<Feed />
		</div>
	)
}

export default UserPage
