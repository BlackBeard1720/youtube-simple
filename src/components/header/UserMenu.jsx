import { useState, useEffect } from "react";
function UserMenu() {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const currentUser = localStorage.getItem("current_user");
        setUser(JSON.parse(currentUser));
    }, []);
    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="text-xl font-medium p-4 bg-neutral-100 rounded-lg leading-0">
                {user ? user.email : "Guess"}
            </button>
            
            {open && 
            <div className="absolute shadow-xl top-full right-0 bg-white">
                <ul className="flex flex-col gap-2">
                    {user ? 
                    (<li>
                        <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            Logout
                        </button>
                    </li>) 
                    :
                    (<>
                        <li>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                Login
                            </button>
                        </li>
                        <li>
                            <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                                Register
                            </button>
                        </li>
                    </>)}
                </ul>
            </div>}
        </div>
    );

}

export default UserMenu;