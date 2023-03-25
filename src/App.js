import './App.css';
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// --white: #EDEFEE;
//   --green: #495E57;
//   --yellow: #F4CE14;
//   --dark: #333333;
//   --peach: #FBDABB;
//   --orange: #EE9972;
//WRITE MEDIA QUERIES FOR UNDER 1200px WIDE
//Menu
//Reservations
//Order Online
//Login

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" />
          <Route path="/Reservations" />
          <Route path="/OrderOnline" />
          <Route path="/Login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

