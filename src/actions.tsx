"use server"

import { imagekit } from "@/utils"
import { SettingsType } from "./components/Share"

export const shareAction = async (formData: FormData, settings: SettingsType) => {
	const file = formData.get("file") as File
	
	const arrayBuffer = await file.arrayBuffer()
	const buffer = Buffer.from(arrayBuffer)
	const base64File = buffer.toString('base64')

	const transformation = `w-600 ${settings.type === "square" ? "ar-1-1" : settings.type === "wide" ? "ar-16-9" : ""}`

	try {
		const result = await imagekit.files.upload({
			file: base64File,
			fileName: file.name,
			folder: "/posts",
			transformation: {
				pre: transformation,
			},
			customMetadata: {
				sensitive: settings.sensitive,
			},
		})
		console.log(result)
	} catch (err) {
		console.log(err)
	}
	// try {
	// 	const res = await imagekit.files.metadata.getFromURL({ url: 'https://ik.imagekit.io/arcanum/posts/Venice_10_hn9AY2_j-.mp4?updatedAt=1761265506790'})
	// 	console.log(res)
	// } catch (e) {
	// 	console.log(e)
	// }
}
