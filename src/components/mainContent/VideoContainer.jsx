import VideoCard from "./VideoCard"
function VideoContainer({videos, onSelected}) {
    const renderListVideo = videos.map(
        (video) => <VideoCard 
                        key={video.id.videoId || video.id.playlistId} 
                        video={video} 
                        onSelected={onSelected}
                    />
    )
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {renderListVideo}
        </section>
    );
}

export default VideoContainer;