import React from "react";
import "./App.css"
import Header from "./component/header/header";
import Home from "./component/home/Home";
import Services from "./component/services/services";
import Skills from "./component/skills/skills";
import Portfolio from "./component/portfolio/portfolio";
import Resume from "./component/resume/Resume";
import Testimonial from "./component/testimonial/testimonial";
import Contact from "./component/contact/contact";
import Footer from "./component/footer/footer";


function App() {
  return (
    <main className="main">
      <Header />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}
export default App;