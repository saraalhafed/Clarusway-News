import { Route,Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PrivateRouter from "./components/PrivateRouter";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Footer from "./components/Footer";
function App() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '50px' }}>
      <Navbar />
      <Routes>
      <Route element={<PrivateRouter />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

// iam using the private router to protect the home page and render it only if there is a user email
