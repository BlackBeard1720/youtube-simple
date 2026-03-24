import {Link} from "react-router-dom";
import { Home, ThumbsUp } from "lucide-react";
function SideBar() {
    return (
        <ul className="md:grid gap-10 text-[10px] hidden">
            <li>
                <Link to="/" className="flex items-center gap-1 hover:bg-zinc-200 transition-colors p-2 rounded-md">
                    <Home/>
                    <span>Home</span>
                </Link>
            </li>
            <li>
                <Link to="/likedvideos" className="flex items-center gap-1 hover:bg-zinc-200 transition-colors p-2 rounded-md">
                    <ThumbsUp/>
                    <span>Liked videos</span>
                </Link>
            </li>
        </ul>
    );
}

export default SideBar;