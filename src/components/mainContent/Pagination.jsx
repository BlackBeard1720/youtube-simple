import { ChevronsLeft } from "lucide-react";
import { ChevronsRight } from "lucide-react";
function Pagination({nextPageToken, prevPageToken, onNext, onPrev}) {
    return (
        <div className="py-2 mt-10 flex items-center justify-center gap-4 text-white leading-none">
            <button className="flex items-center gap-1 bg-zinc-800 
                px-4 py-2 rounded-lg cursor-pointer hover:opacity-75"
                disabled={!prevPageToken}
                onClick={onPrev}
            >
                    <ChevronsLeft/>Prev
            </button>
            <button className="flex items-center gap-1 bg-zinc-800 
                px-4 py-2 rounded-lg cursor-pointer hover:opacity-75"
                disabled={!nextPageToken}
                onClick={onNext}    
            >
                    Next<ChevronsRight/>
            </button>
        </div>
    );
}

export default Pagination;