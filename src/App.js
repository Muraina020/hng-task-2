import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
// import MovieGrid from "./components/movieGrid/MovieGrid";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movie/>}/>
      {/* <Route path="/a" element={<MovieGrid/>}/> */}
      
      <Route path="/movies/:id" element={<Movie/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
