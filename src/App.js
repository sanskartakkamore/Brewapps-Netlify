import './App.css';
import Maincontent from './components/Maincontent';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
    

    
<Navbar title="24h Trending-Topics " shows="Latest News"/>
{/* <Maincontent/> */}
      <Routes>
          <Route path="/" element={<Maincontent/>} />
{/* <div className="container my-3"> */}
          <Route path="/news" element={<News/>}/>
{/* </div> */}
      </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
 