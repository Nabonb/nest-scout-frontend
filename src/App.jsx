import Navbar from "./components/navbar/Navbar";
import "./layout.scss";
import HomePage from "./routes/homePage/HomePage";
function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="content">
        <HomePage></HomePage>
      </div>
    </div>
  );
}

export default App;
