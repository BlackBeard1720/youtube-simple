import { useEffect, useState } from "react";
import VideoCard from "./VideoCard"; 
import Modal from "./Modal"; 
import { ChevronLeft, Heart } from "lucide-react"; 
import { Link } from "react-router-dom";

function FavoritesPage() {
    const [favoriteVideos, setFavoriteVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null); // Quản lý popup xem video

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("current_user"));
        if (!currentUser) return;

        const allUsers = JSON.parse(localStorage.getItem("youtube_app_users")) || [];
        const user = allUsers.find(u => u.email === currentUser.email);

        if (user && user.favorites) {
            // Lọc ra các video hợp lệ (bỏ qua các string ID cũ nếu có do code cũ để lại)
            const validFavs = user.favorites.filter(v => typeof v === 'object');
            setFavoriteVideos(validFavs);
        }
    }, []);

    return (
        <div className="p-8">
            <Link
                to="/"
                className="absolute top-6 left-6 flex items-center gap-1 text-gray-500 hover:text-red-600 transition-colors duration-200 group"
            >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back to Home</span>
            </Link>
            <div className="mt-10 max-w-400 mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Heart className="fill-rose-500 text-rose-500" size={28} />
                    <h2 className="text-3xl font-bold text-gray-800 italic">Your Favorites</h2>
                </div>            
                {favoriteVideos.length === 0 ? (
                    <div className="flex flex-col items-center justify-center mt-20 text-zinc-500">
                        <Heart size={48} className="mb-4 text-zinc-200" />
                        <p className="text-xl">You don't have any videos in your favorites list.</p>
                        <Link to="/" className="mt-4 text-blue-600 hover:underline">Go explore some videos!</Link>
                    </div>
            ) : (
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {favoriteVideos.map(video => (
                        <VideoCard 
                            key={video.id.videoId} 
                            video={video} 
                            onSelected={setSelectedVideo} 
                        />
                    ))}
                </section>
            )}
            </div>
            {/* Hiển thị Modal nếu click vào video */}
            {selectedVideo && (
                <Modal video={selectedVideo} onClose={() => setSelectedVideo(null)}/>
            )}
        </div>
    );
}
export default FavoritesPage;
