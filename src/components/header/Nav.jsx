import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import { MenuIcon } from "lucide-react";

function Nav({onSearch, onToggle}) {
    return (
        <nav className="fixed top-0 left-0 w-full py-2 shadow z-10 bg-white">
            <div className="mx-auto px-3">
                <div className="flex items-center justify-between gap-3">
                    <button 
                        className="md:hidden cursor-pointer" 
                        onClick={onToggle}
                    >
                        <MenuIcon />
                    </button>
                    <Logo/>
                    <SearchBar onSearch={onSearch}/>
                    <UserMenu/>
                </div>                    
            </div>
        </nav>
    );
}

export default Nav;