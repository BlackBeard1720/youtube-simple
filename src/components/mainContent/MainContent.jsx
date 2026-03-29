import { useEffect, useState } from "react";
import VideoContainer from "./VideoContainer";
import Modal from "./Modal";
import Pagination from "./Pagination";
import mockData from "../../mockData";

function MainContent({search}) {
    const [videos, setVideos] = useState(mockData);
    const [loading, setLoading] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [prevPageToken, setPrevPageToken] = useState(null);
    const fetchData = async (search, pageToken = "") => {
        setLoading(true);
        const baseURL = 'https://www.googleapis.com/youtube/v3';
        const apiKey = 'AIzaSyAAb64d3AoDvEqvrF14OXburZb0KhmYrzQ';
        const params = new URLSearchParams({
            part: "snippet",
            q: search,
            maxResults: 10,
            type: "video",
            key: apiKey
        });
        if(pageToken) {
            params.append("pageToken", pageToken);
        }
        const googleURL = `${baseURL}/search?${params}`;
        try {
            const response = await fetch(googleURL);
            console.log(response)
            if(!response.ok){
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            console.log(data)
            // filter videos have id not playlist
            const filteredVideos = data.items.filter(item => item.id.videoId)
            setVideos(filteredVideos);
            //save pageToken
            setNextPageToken(data.nextPageToken);
            setPrevPageToken(data.prevPageToken);
        } catch(err) {
            console.error(`Call API error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(search){
            fetchData(search);
        }
    }, [search]);

    const handleNextChange = () => {
        fetchData(search, nextPageToken);
    }

    const handlePrevChange = () => {
        fetchData(search, prevPageToken);
    }
    return (
        <div className="pt-20 px-4 md:px-8 max-w-400 mx-auto">
            {loading ? 
            (<div className="
                w-24 h-24 
                border-2 border-zinc-300 border-t-zinc-950 rounded-full animate-spin
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                ">
            </div>) : 
            (<>
                <VideoContainer videos={videos} onSelected={setSelectedVideo}/>
                <Pagination
                    nextPageToken={nextPageToken}
                    prevPageToken={prevPageToken}
                    onNext={handleNextChange}
                    onPrev={handlePrevChange}
                />
            </>)}
            {selectedVideo &&
            <Modal video={selectedVideo} onClose={() => setSelectedVideo(null)}/>}
        </div>
    );
}

export default MainContent;