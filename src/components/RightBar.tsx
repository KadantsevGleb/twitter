import Link from "next/link"
import PopularTags from "./PopularTags"
import Recommendations from "./Recommendations"
import Search from "./Search"

const RightBar = () => {
	return (
		<div className="pt-4 pr-2 flex flex-col gap-4 sticky top-0 h-max overflow-y-auto">
			<Search />
			<PopularTags />
			<Recommendations />
			<div className="text-textGray text-sm flex gap-4 flex-wrap">
				<Link href='/' >Terms of Service</Link>
				<Link href='/' >Privacy Policy</Link>
				<Link href='/' >Cookie Policy</Link>
				<Link href='/' >Accessibility</Link>
				<Link href='/' >Ads Info</Link>
				<span>© 2025 Arcanum Inc.</span>
			</div>
		</div>
	)
}

export default RightBar