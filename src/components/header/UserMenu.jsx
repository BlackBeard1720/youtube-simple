import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserCircle, LogIn, UserPlus, LogOut } from "lucide-react";

function UserMenu() {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = localStorage.getItem("current_user");
        if (currentUser) {
            setUser(JSON.parse(currentUser));
        }
    }, []);

    return (
        <div className="relative">
        {/* Avatar button */}
        <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center w-10 h-10 rounded-full 
                    transition-colors duration-150 hover:bg-gray-100 
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
        >
            {user ? (
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center 
                            text-white text-sm font-semibold">
                {user.email.charAt(0).toUpperCase()}
            </div>
            ) : (
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                <UserCircle size={22} strokeWidth={1.5} />
            </div>
            )}
        </button>

        {/* Dropdown menu */}
        {open && (
            <>
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)}></div>

            <div className="absolute z-50 top-full right-0 mt-2 w-64 bg-white border border-gray-200 
                            rounded-lg shadow-md py-3 origin-top-right">
                {/* Header */}
                <div className="px-4 pb-3 border-b border-gray-100 mb-2 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center 
                                text-white text-lg font-bold mb-2">
                    {user ? user.email.charAt(0).toUpperCase() : "?"}
                </div>
                <p className="text-sm font-medium text-black truncate w-full text-center px-2">
                    {user ? user.email : "Guest"}
                </p>
                </div>

                {/* Links */}
                <ul className="flex flex-col">
                {user ? (
                    <li>
                    <Link
                        className="flex items-center gap-3 px-4 py-2 text-sm text-black 
                                hover:bg-gray-100 transition-colors"
                        to="/signout"
                    >
                        <LogOut size={18} className="text-gray-500" />
                        Sign out
                    </Link>
                    </li>
                ) : (
                    <>
                    <li>
                        <Link
                        className="flex items-center gap-3 px-4 py-2 text-sm text-black 
                                    hover:bg-gray-100 transition-colors"
                        to="/signin"
                        >
                        <LogIn size={18} className="text-gray-500" />
                        Sign in
                        </Link>
                    </li>
                    <li>
                        <Link
                        className="flex items-center gap-3 px-4 py-2 text-sm text-black 
                                    hover:bg-gray-100 transition-colors"
                        to="/signup"
                        >
                        <UserPlus size={18} className="text-gray-500" />
                        Sign up
                        </Link>
                    </li>
                    </>
                )}
                </ul>
            </div>
            </>
        )}
        </div>
    );
}

export default UserMenu;