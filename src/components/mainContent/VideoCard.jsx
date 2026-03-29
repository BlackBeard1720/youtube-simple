import { Calendar, User, Heart } from "lucide-react"; 
import { useToast } from "../../context/ToastContext";
function VideoCard({ video, onSelected }) {
    const { snippet } = video;
    const { showToast } = useToast();
    const addToFavorite = (video) => {
        // 1. Kiểm tra người dùng đã đăng nhập chưa
        const currentUser = JSON.parse(localStorage.getItem("current_user"));
        if (!currentUser) {
            showToast({
                message: "You need to log in",
                type: "error"
            });
            return;
        }
        // 2. Lấy toàn bộ danh sách người dùng từ Local Storage
        let allUsers = JSON.parse(localStorage.getItem("youtube_app_users")) || [];
        const videoIdToAdd = video.id.videoId; // lấy ID của video
        // 3. Dùng vòng lặp tìm người dùng hiện tại trong danh sách tổng
        let userIndex = -1;
        for(let i = 0; i < allUsers.length; i++) {
            if(allUsers[i].email === currentUser.email) {
                userIndex = i; // lưu lại vị trí của user này
                break;
            }
        }
        // Nếu tìm thấy người dùng
        if(userIndex !== -1) {
            const userFavorites = allUsers[userIndex].favorites || [];
            // 4. Dùng vòng lặp kiểm tra xem ID video đã có trong danh sách yêu thích chưa
            let isAlreadyLiked = false;
            for(let i = 0; i < userFavorites.length; i++) {
                if(userFavorites[i].id.videoId === videoIdToAdd) {
                    isAlreadyLiked = true;
                    break;
                }
            }
            // 5. Nếu chưa có thì mới thêm vào
            if(isAlreadyLiked) {
                showToast({
                    message: "This video already in favorites",
                    type: "error"
                }); 
                return;
            } 
            allUsers[userIndex].favorites.push(video);
            localStorage.setItem("youtube_app_users", JSON.stringify(allUsers));
            showToast({
                message: "Added to favorites",
                type: "success"
            });          
        }
    };

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
                    
                    <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            <span>{new Date(snippet.publishedAt).toLocaleDateString()}</span>
                        </div>

                        <span className="text-zinc-200 text-[8px]">•</span>

                        <button 
                            onClick={(e) => {
                                e.stopPropagation();
                                addToFavorite(video);
                            }}
                            className="flex items-center gap-1 hover:text-rose-500 transition-colors group/heart"
                        >
                            <Heart 
                                size={12} 
                                className="group-hover/heart:fill-rose-500 transition-all" 
                            />
                            <span className="text-[10px]">Like</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;