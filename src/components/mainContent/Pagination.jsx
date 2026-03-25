import { ChevronsLeft } from "lucide-react";
import { ChevronsRight } from "lucide-react";
function Pagination({nextPageToken, prevPageToken, onNext, onPrev}) {
    return (
        <div className="py-4 mt-10 flex items-center justify-center gap-6">
            <button
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-200
                ${prevPageToken 
                    ? "bg-zinc-900 text-white hover:bg-zinc-700 shadow-sm" 
                    : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"}`}
                disabled={!prevPageToken}
                onClick={onPrev}
            >
                <ChevronsLeft className="w-5 h-5"/> 
                <span className="font-medium">Prev</span>
            </button>

            <button
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-200
                ${nextPageToken 
                    ? "bg-zinc-900 text-white hover:bg-zinc-700 shadow-sm" 
                    : "bg-gray-300 text-gray-500 cursor-not-allowed opacity-60"}`}
                disabled={!nextPageToken}
                onClick={onNext}
            >
                <span className="font-medium">Next</span>
                <ChevronsRight className="w-5 h-5"/>
            </button>
        </div>
    );
}

export default Pagination;