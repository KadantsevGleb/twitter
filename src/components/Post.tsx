import Image from "@/components/Image"
import PostInfo from "./PostInfo"
import PostInteraction from "@/components/PostInteraction"
import { imagekit } from "@/utils"
import IKVideo from "./Video"
import Link from "next/link"

type fileDetailsResponse = {
	width: number
	height: number
	filePath: string
	url: string
	fileType: string
	customMetadata?: {
		sensitive: boolean
	}
}

const Post = async ({ type = 'status' }: { type?: "status" | "comment" }) => {
	const getFileDetails = async (fileId: string): Promise<fileDetailsResponse> => {
		const result = (await imagekit.files.get(fileId)) as fileDetailsResponse

		return result
	}
	//saturn: 68f80d115c7cd75eb885bec5
	//everlasting: 68f80dc45c7cd75eb88a7f0a
	const fileDetails = await getFileDetails("68f80dc45c7cd75eb88a7f0a")

	return (
		<div className="p-2 pr-4 xsm:p-4 border-y-[1px] border-borderGray">
			{/*POST TYPE*/}
			{type === "status" && (
				<div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="18"
						height="18"
						viewBox="0 0 24 24"
					>
						<path
							fill="#71767b"
							d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
						/>
					</svg>
					<span>Kadantsev reposted</span>
				</div>
			)}
			{/*POST CONTENT*/}
			{/*<div className="flex gap-4">*/}
			<div className={`flex gap-4 ${type === "status" && "flex-col"}`}>
				{/*AVATAR*/}
				<div className={`${type === "status" && "hidden"} relative size-6 sm:size-10 rounded-full overflow-hidden`}>
					<Image
						path="general/avatar.png"
						alt="post pfp"
						tr
						w={100}
						h={100}
					/>
				</div>
				{/*CONTENT*/}
				<div className="flex-1 flex flex-col gap-2">
					{/*TOP*/}
					<div className="w-full flex justify-between">
						<Link
							href="/arcanum451"
							className="flex gap-4 "
						>
							<div className={`${type !== "status" && "hidden"} relative size-6 sm:size-10 rounded-full overflow-hidden`}>
								<Image
									path="general/avatar.png"
									alt="post pfp"
									tr
									w={100}
									h={100}
								/>
							</div>
							<div className={`flex items-center gap-x-2 flex-wrap ${type === "status" && "flex-col gap-0 !items-start"}`}>
								<Link
									href="/arcanum451"
									className="text-base sm:text-lg font-bold"
								>
									Kadantsev
								</Link>
								<span className={`text-textGray ${type === "status" && "text-sm"}`}>@arcanum451</span>
								{type !== "status" && <span className=" text-sm sm:text-base text-textGray">1 day ago</span>}
							</div>
						</Link>

						<PostInfo />
					</div>
					{/*TEXT & MEDIA*/}
					<Link href="/arcanum451/status/123">
						<p className={`${type === "status" && "text-lg"}`}>Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Obcaecati ullam distinctio doloribus labore laboriosam assumenda veniam velit magni enim molestiae animi laborum suscipit repudiandae, dolore temporibus deserunt sapiente ipsa illo.</p>
					</Link>
					{fileDetails && fileDetails.fileType === "image" ? (
						<Image
							path={fileDetails.filePath}
							alt=""
							w={fileDetails.width}
							h={fileDetails.height}
							className={fileDetails.customMetadata?.sensitive ? "blur-md" : ""}
						/>
					) : (
						<IKVideo
							path={fileDetails.filePath}
							className={fileDetails.customMetadata?.sensitive ? "blur-md" : ""}
						/>
					)}
					<PostInteraction />
				</div>
			</div>
		</div>
	)
}

export default Post
