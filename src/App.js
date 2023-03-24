import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
import Testimonials from "./Components/Testimonials";
import About from "./Components/About";
// --white: #EDEFEE;
//   --green: #495E57;
//   --yellow: #F4CE14;
//   --dark: #333333;
//   --peach: #FBDABB;
//   --orange: #EE9972;
//WRITE MEDIA QUERIES FOR UNDER 1200px WIDE

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Testimonials />
        <About />

    </>
  );
}

export default App;
