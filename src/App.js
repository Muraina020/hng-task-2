import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie" element={<Movie/>}/>
      {/* <Route path="/hotels/:id" element={<Hotel/>}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
