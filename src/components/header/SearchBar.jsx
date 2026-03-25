import { Search } from "lucide-react";
import { useState } from "react";

function SearchBar({onSearch}){
    const [keyword, setKeyword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(keyword);
    }
    return (
        <form onSubmit={handleSubmit} className={`flex items-center w-full max-w-md `}>
            <input 
                type="text" 
                placeholder="Search" 
                aria-label="Seach"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="border border-stone-200 outline-none pl-5 py-2 flex-1 rounded-l-full
                inset-shadow-xs focus:inset-shadow-sm focus:border-indigo-400"
                
            />
            <button
                className="bg-stone-100 py-2 px-5 border border-stone-200 rounded-r-full cursor-pointer hover:bg-stone-300"
                type="submit"
            >
                <Search/>
            </button>
        </form>
    );
}

export default SearchBar;