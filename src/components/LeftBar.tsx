import Link from "next/link"
import Image from "@/components/Image"

const menuList = [
	{
		id: 1,
		name: "Homepage",
		link: "/",
		icon: "home.svg",
	},
	{
		id: 2,
		name: "Explore",
		link: "/",
		icon: "explore.svg",
	},
	{
		id: 3,
		name: "Notification",
		link: "/",
		icon: "notification.svg",
	},
	{
		id: 4,
		name: "Messages",
		link: "/",
		icon: "message.svg",
	},
	{
		id: 5,
		name: "Bookmarks",
		link: "/",
		icon: "bookmark.svg",
	},
	{
		id: 6,
		name: "Jobs",
		link: "/",
		icon: "job.svg",
	},
	{
		id: 7,
		name: "Communities",
		link: "/",
		icon: "community.svg",
	},
	{
		id: 8,
		name: "Premium",
		link: "/",
		icon: "logo.svg",
	},
	{
		id: 9,
		name: "Profile",
		link: "/",
		icon: "profile.svg",
	},
	{
		id: 10,
		name: "More",
		link: "/",
		icon: "more.svg",
	},
]

const LeftBar = () => {
	return (
		<div className="h-dvh overflow-y-auto sticky top-0 flex flex-col justify-between pt-2 pb-8">
			{/*LOGO MENU BUTTON*/}
			<div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
				{/*LOGO*/}
				<Link
					href="/"
					className="p-2 rounded-full hover:bg-[#181818]"
				>
					<Image
						path="icons/logo.svg"
						alt="logo"
						w={24}
						h={24}
					/>
				</Link>
				{/*MENU LIST*/}
				<nav className="flex flex-col gap-2">
					{menuList.map(item => (
						<Link
							href={item.link}
							key={item.id}
							className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
						>
							<Image
								path={`icons/${item.icon}`}
								alt={item.name}
								w={24}
								h={24}
							/>
							<span className="hidden xxl:inline">{item.name}</span>
						</Link>
					))}
				</nav>
				{/*BUTTON*/}
				<Link href='/compose/post' className="xxl:hidden bg-white text-black rounded-full font-bold size-12 flex justify-center items-center">
					<Image path='icons/post.svg' alt="new post" w={24} h={24} />
				</Link>
				<Link href='/compose/post' className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20">
					Post
				</Link>
			</div>
			{/*USER*/}
			<div className="flex items-center justify-between mt-6">
				<div className="flex items-center gap-2">
					<div className="size-10 relative rounded-full overflow-hidden">
						<Image path='/general/avatar.png' alt="profile picture" tr w={100} h={100} />
					</div>
					<div className="hidden xxl:flex flex-col">
						<Link href='/arcanum451' className="font-bold">Kadantsev</Link>
						<span className="text-sm text-textGray">@arcanum451</span>
					</div>
				</div>
				<div className="hidden xxl:block cursor-pointer font-bold">...</div>
			</div>
		</div>
	)
}

export default LeftBar
