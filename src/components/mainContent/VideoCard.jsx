import { Calendar, User } from "lucide-react"; 

function VideoCard({ video, onSelected }) {
    const { snippet } = video;
    
    return (
        <div 
            className="group cursor-pointer flex flex-col bg-transparent transition-all duration-300"
            onClick={() => onSelected(video)}
        >
            {/* -------(Thumbnail)------------ */}
            <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100">
                <img 
                    src={snippet.thumbnails.medium.url} 
                    alt={snippet.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* -------------Overlay-------------- */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>

            {/* description */}
            <div className="flex flex-col pt-3 pb-2">
                <h3 className="font-semibold text-sm text-black leading-snug line-clamp-2 transition-colors group-hover:text-zinc-600">
                    {snippet.title}
                </h3>
                
                <div className="mt-2 flex flex-col gap-1">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                        <User size={12} strokeWidth={2.5} />
                        <span>{snippet.channelTitle}</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-400">
                        <Calendar size={12} />
                        <span>{new Date(snippet.publishedAt).toLocaleDateString()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;