import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    //props.videos - videos from videos this.state.videos in App.js being passed as props 

   const renderedList = videos.map(video => {
        return <VideoItem />;
    });

return <div>{renderedList}</div>;

};

export default VideoList;