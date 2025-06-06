import { Navigate, Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
// import Collaboration from "./components/Collaboration";
import ContactPage from "./components/myComp/ContactUs";
import Footer from "./components/mycomp2/Footer";
import Header from "./components/mycomp2/Header";
// import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
// import Roadmap from "./components/Roadmap";
// import Services from "./components/Services";
import { Homepage } from "./components/myComp/Homepage";
import Login from "./components/myComp/Login";
// import Signup from "./components/Signup";
import Products from "./comp2/Products";
import AboutPage from "./components/myComp/Aboutus";
import SignupForm from "./components/myComp/Signup";
import Error404 from "./components/myComp/errorPage";
import Logout from "./components/myComp/Logout";
import Checkout from "./components/myComp/Checkout";


const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignupForm />} />
          <Route path='/products' element={<Products />} />
          <Route path='/aboutus' element={<AboutPage />} />
          <Route path='/logout' element={<Logout />} />
          <Route path ='Checkout' element={<Checkout/>} />
          <Route path='*' element={<Error404/>} />
        </Routes>
        <Footer />
      </div>

      <ButtonGradient />
    </>




  );
};

export default App;
