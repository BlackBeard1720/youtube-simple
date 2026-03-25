import {Link} from "react-router-dom";
import { Home, ThumbsUp } from "lucide-react";
import { X } from "lucide-react";
function SideBar({ openSideBar, setOpenSideBar }) {
  return (
    <ul
      className={`
        pt-30
        h-full w-64 bg-white shadow z-20
        transform transition-transform duration-300
        fixed top-0 left-0
        ${openSideBar ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:shadow-none md:w-auto flex flex-col gap-4
        md:text-xs md:pt-0
      `}

    >

      <li className="md:hidden absolute top-0 right-0">
        <button onClick={() => setOpenSideBar(false)}><X size={30}/></button>
      </li>

      <li>
        <Link to="/" className="flex items-center gap-2 hover:bg-zinc-200 p-2 rounded-md">
          <Home />
          <span>Home</span>
        </Link>
      </li>

      <li>
        <Link to="/likedvideos" className="flex items-center gap-2 hover:bg-zinc-200 p-2 rounded-md">
          <ThumbsUp />
          <span>Liked videos</span>
        </Link>
      </li>
    </ul>
  );
}

export default SideBar;