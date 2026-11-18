import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

const NotFoundRedirect = () => {
    const navigate = useNavigate();

useEffect(()=> {
toast.error("Page not found. Redirected to Home.", {
    autoClose: 1500,
});
navigate("/", {replace: true})
}, [navigate]);

return null;
}

export default NotFoundRedirect