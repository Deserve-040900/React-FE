import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/views/Home";
import Books from "./components/views/Books";
import Login from "./components/views/Login";
import Detail from "./components/views/Detail";
import Shopping from "./components/views/Shopping";
import NoPage from "./components/views/404";
import Signup from "./components/views/Signup";
import Comics from "./components/views/Comics";
import Body from "./components/Body";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Body />} />
          <Route path="books" element={<Books />} />
          <Route path="login" element={<Login />} />
          <Route path="detail" element={<Detail />} />
          <Route path="cart" element={<Shopping />} />
          <Route path="signup" element={<Signup />} />
          <Route path="comics" element={<Comics />} />
          <Route path="404" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// import logo from './logo.svg';
// import './components/css/App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
