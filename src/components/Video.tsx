"use client"

import { Video } from '@imagekit/next'

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT

type IKVideoProps = {
	path: string;
	className?: string;
}

const IKVideo = ({ path, className }: IKVideoProps) => {
	return (
		<Video
			className={className}
			urlEndpoint={urlEndpoint}
      src={path}
      transformation={[{ width: '1920', height: '1080', quality: 90 }]}
      controls
    />
	)
}

export default IKVideo