function Modal({video, onClose}) {
    console.log(video)
    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
    return (
        <>
            {video && 
            <div 
                className="fixed inset-0 bg-black/50 z-50"
                onClick={(e) => {
                    if(e.target === e.currentTarget){
                        onClose();
                    }
                }}
            >
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    <div className="aspect-video w-full">
                        <iframe 
                            className="w-full h-full" 
                            src={videoURL} 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                        >
                        </iframe>
                    </div>
                </div>
            </div>}
        </>
    );
}

export default Modal;