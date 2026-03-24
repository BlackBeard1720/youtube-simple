import { Link } from "react-router-dom"
function Logo () {
    return (
        <Link to="/" className="flex items-center">
            <img src="/youtube.svg" alt="SimpleVids Logo" className="w-8"/>
            <span className="text-xl font-semibold">MTube</span>
        </Link>
    );
}

export default Logo;