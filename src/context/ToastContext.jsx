import { useState, useContext, createContext } from "react";
import Toast from "../components/notification/Toast";
const ToastContext = createContext();

export const ToastProvider = ({children}) => {
    const [toast, setToast] = useState({
        message: "",
        type:"",
    });

    const showToast = ({message, type = "success"}) => {
        setToast({
            message,
            type
        });
        setTimeout(() => {
            setToast({
                message: "",
                type: ""
            })
        }, 3000);    
    }

    const closeToast = () => {
        setToast({
            message: "",
            type: ""
        })
    }

    return (
        <ToastContext.Provider value={{showToast}}>
            {children}
            <Toast 
                message={toast.message}
                type={toast.type}
                onClose={closeToast}
            />
        </ToastContext.Provider>
    );
} 

export const useToast = () => useContext(ToastContext);