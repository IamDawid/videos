import React from 'react';

const VideoList = (props) => {
    //props.videos - videos from videos this.state.videos in App.js being passed as props 
    return <div>{props.videos.length}</div>;
};

export default VideoList;