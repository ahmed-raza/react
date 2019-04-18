import React from 'react'

const formatDate = (date) => {
  let months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'November',
    'December'
  ];
  let timestamp = new Date(date)
  return months[timestamp.getMonth()] +' '+ timestamp.getDate() +', '+ timestamp.getFullYear()
}
const VideoDetail = ({ video }) => {
  if(!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} frameBorder="0"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <em>{video.snippet.channelTitle}</em> <strong>{formatDate(video.snippet.publishedAt)}</strong>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail