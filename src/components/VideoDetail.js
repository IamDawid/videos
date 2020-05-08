import React from 'react';

const VideoDetail = ({ video }) => {

	//if value is null show loading instead to avoid error
	if (!video) {
		return <div>Loading...</div>;
	}

	return (
		<div className='ui segment'>
			<h4 className='ui header'>{video.snippet.title}</h4>
			<p>{video.snippet.description}</p>
		</div>
	);
}

export default VideoDetail;