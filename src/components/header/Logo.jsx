import { Link } from "react-router-dom"
import img from "../../assets/youtube.svg"
function Logo () {
    return (
        <Link to="/" className="md:flex items-center hidden">
            <img src={img} alt="SimpleVids Logo" className="w-8"/>
            <span className="text-xl font-semibold">MTube</span>
        </Link>
    );
}

export default Logo;