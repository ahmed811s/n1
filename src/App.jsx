import { useState, useEffect } from "react";
import PopupForm from "./components/pop/PopupForm";
import Header from './components/1-Header/Header';
import Hero from './components/2-Hero/Hero';
import Main from './components/3-main/Main';
import Contact from './components/4-Contact/Contact';
import Footer from './components/5-Footer/Footer';
import About from './components/About/About';
import Last from './components/Last/AnimatedHeader';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    console.log("⏳ سيتم فتح النافذة بعد 5 ثوانٍ...");

    const timer = setTimeout(() => {
      setIsPopupOpen(true);
      console.log("✅ النافذة المنبثقة مفتوحة الآن!");
    }, 5000); // 5000 ميلي ثانية تعادل 5 ثواني

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='container'>
      <Header />
      <div className='divider' />
      <Hero />
      <div className='divider' />
      <Main />
      <div className='divider' />
      <Contact />
      <div className='divider' />
      <Footer />
      <div className='divider' />
      <About />
      <div className='divider' />
      <Last />

      {isPopupOpen && <PopupForm />} {/* هنا إضافة النافذة المنبثقة */}
    </div>
  );
}

export default App;
