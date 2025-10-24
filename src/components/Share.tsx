"use client"

import { shareAction } from "@/actions"
import { X } from "lucide-react"
import NextImage from "next/image"
import { ChangeEvent, useState } from "react"
import Image from "./Image"
import ImageEditor from "./ImageEditor"

export type SettingsType = {
	type: "original" | "wide" | "square"
	sensitive: boolean
}

const Share = () => {
	const [media, setMedia] = useState<File | null>(null)
	const [isEditorOpen, setIsEditorOpen] = useState(false)
	const [settings, setSettings] = useState<SettingsType>({
		type: "original",
		sensitive: false,
	})

	function handleMediaChange(e: ChangeEvent<HTMLInputElement>) {
		if (e.target.files && e.target.files[0]) {
			setMedia(e.target.files[0])
		}
	}

	const previewURL = media ? URL.createObjectURL(media) : null

	return (
		<form
			className="p-4 flex gap-4"
			action={formData => shareAction(formData, settings)}
		>
			{/*AVATAR*/}
			<div className="relative size-10 rounded-full overflow-hidden">
				<Image
					path="general/avatar.png"
					alt="profile picture"
					tr
					w={100}
					h={100}
				/>
			</div>
			{/*OTHERS*/}
			<div className="flex-1 flex flex-col gap-4">
				<textarea
					name="description"
					placeholder="What's new?"
					className="bg-transparent outline-none placeholder:text-textGray text-xl field-sizing-content resize-none min-h-[20px] w-full"
				/>
				{/*PREVIEW IMAGE*/}
				{media?.type.includes('image') && previewURL && (
					<div className="relative rounded-xl overflow-hidden">
						<NextImage
							src={previewURL}
							alt=""
							width={600}
							height={600}
							className={`w-full ${settings.type === "original" ? "h-full object-contain" : settings.type === "square" ? "aspect-square object-cover" : "aspect-video object-cover"}`}
						/>
						<div
							className="absolute top-2 left-2 bg-black opacity-70 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
							onClick={() => setIsEditorOpen(true)}
						>
							Edit
						</div>
						<div
							className="absolute top-2 right-2 bg-black opacity-70 p-2 rounded-full cursor-pointer"
							onClick={() => setMedia(null)}
						>
							<X size={16} />
						</div>
					</div>
				)}
				{
					media?.type.includes('video') && previewURL && (
						<div className="relative">
							<video src={previewURL} controls />
							<div
								className="absolute top-2 right-2 p-2 bg-black/70 rounded-full cursor-pointer"
								onClick={() => setMedia(null)}
							>
								<X size={16} />
							</div>
						</div>
					)
				}
				{isEditorOpen && previewURL && (
					<ImageEditor
						onClose={() => setIsEditorOpen(false)}
						previewURL={previewURL}
						settings={settings}
						setSettings={setSettings}
					/>
				)}
				<div className="flex items-center justify-between gap-4 flex-wrap">
					<div className="flex gap-4 flex-wrap">
						<input
							type="file"
							name="file"
							onChange={handleMediaChange}
							className="hidden"
							id="file"
							accept="image/*,video/*"
						/>
						<label
							htmlFor="file"
							className="cursor-pointer"
						>
							<Image
								path="icons/image.svg"
								alt="icon"
								w={20}
								h={20}
							/>
						</label>
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
					<button className="bg-white text-black font-bold rounded-full py-2 px-4 cursor-pointer">Post</button>
				</div>
			</div>
		</form>
	)
}

export default Share
