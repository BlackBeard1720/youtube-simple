import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast} from "../../context/ToastContext";

const ErrorMessage = ({children}) => {
    return <small className="text-red-500">{children}</small>;
}  
export default function SignUp() {
    const [email, setEmail] = useState({value: "", isTouched: false});
    const [password, setPassword] = useState({value: "", isTouched: false});
    const [confirmPassword, setConfirmPassword] = useState({value: "", isTouched: false});

    const {showToast} = useToast();
    // Validation
    const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const normalizedEmail = email.value.trim();
    const normalizedPassword = password.value.trim();
    const normalizedConfirm = confirmPassword.value.trim();

    const isEmailEmpty = !normalizedEmail;
    const isEmailValid = regexForEmail.test(normalizedEmail);

    const isPasswordEmpty = !normalizedPassword;
    const isPasswordValid = normalizedPassword.length >= 8;

    const isConfirmEmpty = !normalizedConfirm;
    const isConfirmValid =
    normalizedConfirm === normalizedPassword &&
    normalizedConfirm.length >= 8;

    const getIsFormValid = () => {
    return (
        !isEmailEmpty &&
        isEmailValid &&
        !isPasswordEmpty &&
        isPasswordValid &&
        isConfirmValid
    );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!getIsFormValid()) return;
        
        const users = JSON.parse(localStorage.getItem("youtube_app_users")) || [];
        const isExist = users.some(user => user.email === normalizedEmail)
        if(isExist){
            showToast({
                message: "Email already exists",
                type: "error"
            });
            return;
        }
        const newUser = {
            email: normalizedEmail,
            password: normalizedPassword,
            favorites: [],
        } 
        users.push(newUser);
        localStorage.setItem("youtube_app_users", JSON.stringify(users));
        showToast({
            message: "Sign up successful!",
            type: "success"
        });
    }

    return (
        <div className="h-screen flex items-center justify-center bg-gray-50 p-4 font-sans relative">
            <a
                href="/"
                className="absolute top-6 left-6 flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors duration-200 group"
            >
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Back</span>
            </a>
            <form 
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center italic tracking-tight">Sign Up</h2>
                
                <div className="space-y-5">
                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email Address <sup className="text-red-500">*</sup>
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="e.g. name@company.com"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-400"
                        onChange={e => setEmail({...email, value: e.target.value})}
                        onBlur={() => setEmail({...email, isTouched: true})}
                    />
                    {email.isTouched && isEmailEmpty && (
                        <ErrorMessage>Email is required</ErrorMessage>
                    )}

                    {email.isTouched && !isEmailEmpty && !isEmailValid && (
                        <ErrorMessage>Invalid email format</ErrorMessage>
                    )}
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                    Password <sup className="text-red-500">*</sup>
                    </label>
                        <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Min. 8 characters"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        onChange={e => setPassword({...password, value: e.target.value})}
                        onBlur={() => setPassword({...password, isTouched: true})}
                    />
                    {password.isTouched && isPasswordEmpty && (
                        <ErrorMessage>Password is required</ErrorMessage>
                    )}

                    {password.isTouched && !isPasswordEmpty && !isPasswordValid && (
                        <ErrorMessage>Password must be at least 8 characters</ErrorMessage>
                    )}
                </div>

                {/* Confirm Password Field */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-700">
                    Confirm Password <sup className="text-red-500">*</sup>
                    </label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        id="confirmPassword" 
                        placeholder="Repeat your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                        onChange={e => setConfirmPassword({...confirmPassword, value: e.target.value})}
                        onBlur={() => setConfirmPassword({...confirmPassword, isTouched: true})}                    
                    />
                    {confirmPassword.isTouched && isConfirmEmpty && (
                        <ErrorMessage>Confirm password is required</ErrorMessage>
                    )}

                    {confirmPassword.isTouched && !isConfirmEmpty && !isConfirmValid && (
                        <ErrorMessage>Passwords do not match</ErrorMessage>
                    )}           
                </div>

                {/* Register Button */}
                <button
                    disabled={!getIsFormValid()} 
                    type="submit" 
                    className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md active:scale-[0.98] uppercase tracking-wide"
                >
                    Create Account
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account? <Link to="/signin" className="text-blue-600 font-medium hover:underline">Sign in</Link>
                </p>
                </div>
            </form>
        </div>
    );
}