import { X } from "lucide-react";
export default function Toast({message, type, onClose}) {
    if(!message) return null;
    return (
        <div className="fixed top-5 right-5 z-50">
            <div className={`px-4 py-3 rounded-lg shadow-lg text-white min-w-62.5
                ${type === "success" ? "bg-green-500" : "bg-red-500"}`
            }>
                <div className="flex justify-between items-center gap-4">
                    <span>{message}</span>
                    <button onClick={onClose}><X/></button>
                </div>
            </div>
        </div>
    );
}