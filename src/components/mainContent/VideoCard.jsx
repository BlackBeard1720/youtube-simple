function VideoCard({video, onSelected}) {
    const {snippet} = video;
    return (
        <div 
            className="cursor-pointer group rounded-lg shadow-sm overflow-hidden"
            onClick={() => onSelected(video)}
        >
            <div className="aspect-video">
                <img 
                    src={snippet.thumbnails.medium.url} 
                    alt={snippet.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col p-4">
                <h3 className="font-medium text-sm text-gray-900 line-clamp-2 group-hover:text-blue-600">
                    {snippet.title}
                </h3>
                <p className="text-xs text-gray-600">{snippet.channelTitle}</p>
                <p className="text-xs text-gray-600">
                    {new Date(snippet.publishedAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}

export default VideoCard;