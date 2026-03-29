import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "../../context/ToastContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
export default function SignIn(){
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const {showToast} = useToast();
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    }

    const normalizedEmail = form.email.trim();
    const normalizedPassword = form.password.trim();

    const handleSubmit = (e) => {
        e.preventDefault();
        const availableUsers = JSON.parse(localStorage.getItem('youtube_app_users')) || [];
        if(availableUsers.length === 0) {
            showToast({
                message: "No account found",
                type: "error"
            });
            return;
        }
        // kiem tra nguoi dung tu danh sach nguoi dung da dang ky
        const foundUser = availableUsers.find(user => {
            return (
                user.email === normalizedEmail && 
                user.password === normalizedPassword
            );
        });
        if(foundUser) {
            const userData = { email: normalizedEmail };
            setUser(userData);
            localStorage.setItem("current_user", JSON.stringify(userData));
            showToast({
                message: "Sign in successful!",
                type: "success"
            });
            setTimeout(() => {
                navigate("/");
            }, 1000)
        } else {
            showToast({
                message: "Invalid email or password",
                type: "error"
            });
        }
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-50 p-4 font-sans relative">
            <Link
                to="/"
                className="absolute top-6 left-6 flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors duration-200 group"
            >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back</span>
            </Link>

            <form 
                className="w-full max-w-md bg-white p-8 rounded-xl 
                shadow-lg border border-gray-100"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center italic tracking-tight">Sign in</h2>
                
                <div className="space-y-5">
                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address 
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-400"
                        onChange={handleChange}
                    />
                </div>
                {/* Password Field */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                    Password 
                    </label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="••••••••"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        onChange={handleChange}
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md active:scale-[0.98] uppercase tracking-wide"
                >
                    Sign in
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Don't have an account? <Link to="/signup" className="text-blue-600 font-medium hover:underline">Sign up</Link>
                </p>
                </div>
            </form>
        </div>
    );
}