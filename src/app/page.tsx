import Feed from "@/components/Feed"
import Share from "@/components/Share"
import Link from "next/link"

export default function Home() {
  return (
    <div className="">
      <nav className="flex justify-between text-textGray font-semibold border-b-[1px] border-borderGray px-4 pt-3">
        <Link
          href="/"
          className="pb-3 flex items-center border-b-2 border-iconBlue"
        >
          For you
        </Link>
        <Link
          href="/"
          className="pb-3 flex items-center"
        >
          Following
        </Link>
        <Link
          href="/"
          className="hidden pb-3 md:flex items-center"
        >
          React
        </Link>
        <Link
          href="/"
          className="hidden pb-3 md:flex items-center"
        >
          JavaScript
        </Link>
        <Link
          href="/"
          className="hidden pb-3 md:flex items-center"
        >
          CSS
        </Link>
        
      </nav>
      <Share />
      <Feed />
    </div>
  )
}
