import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import PopupForm from "./components/pop/PopupForm";
import { Link } from "react-router-dom";
import Header from "./components/1-Header/Header";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-Contact/Contact";
import About from "./components/About/About";
import Last from "./components/Last/AnimatedHeader";
import Secpg from "./components/second-page/secpg";
import Rooter from "./components/5-Footer/Footer";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    console.log("⏳ سيتم فتح النافذة بعد 5 ثوانٍ...");

    const timer = setTimeout(() => {
      setIsPopupOpen(true);
      console.log("✅ النافذة المنبثقة مفتوحة الآن!");
    }, 100); // 5000 ميلي ثانية تعادل 5 ثواني

    return () => clearTimeout(timer);
  }, []);
  return(
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="hero" element={<Hero/>}/>

      <Route path="secpg" element={<Secpg/>}/>
      
    </Routes>
  )
  
}

export default App;
