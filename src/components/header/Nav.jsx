import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import { Home, Heart } from "lucide-react"; 
import { Link } from "react-router-dom"; 

function Nav({onSearch, onToggle}) {
    return (
        <nav className="fixed top-0 left-0 w-full py-2 shadow z-50 bg-white"> {/* Tăng z-index lên 50 */}
            <div className="mx-auto px-3">
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                        <Logo/>

                        {/* ---  MENU ĐIỀU HƯỚNG  --- */}
                        <div className="hidden lg:flex items-center gap-2 ml-4">
                            <Link 
                                to="/" 
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-gray-100 text-sm font-medium transition-colors"
                            >
                                <Home size={18} />
                                <span>Home</span>
                            </Link>
                            <Link 
                                to="/favorites" 
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-rose-50 text-rose-600 text-sm font-medium transition-colors"
                            >
                                <Heart size={18} />
                                <span>Liked videos</span>
                            </Link>
                        </div>
                    </div>

                    <SearchBar onSearch={onSearch}/>
                    <UserMenu/>
                </div>                    
            </div>
        </nav>
    );
}

export default Nav;