import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Topbar from './components/Topbar';
import MoviesDetails from './components/MoviesDetails';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function App() {
  const storeValue = useSelector((state) => state.moviesDetails.responsData)
  const [serach, setSearch] = useState("")
  const handleChange = (e) => {
    let value = e.target.value;
    setSearch(value)

  }
  const seachData = (data) => {
    return data.toLowerCase().includes(serach.toLowerCase());
  };
  const filtterMoviesList = storeValue?.data?.filter((data) => {
    console.log(data)
    if (serach === "") {
      return data;
    } else if (
      seachData(data.movie_name)||
      seachData(data.description)||
      seachData(data.director)
    ) {
      return data
    }
  })

  console.log(filtterMoviesList)
  return (
    <>
      <Topbar
        serach={serach}
        handleChange={handleChange}
      />
      <Routes>
        <Route path='/' element={<Home
        filtterMoviesList={filtterMoviesList}
        />} />
        <Route path='/moviesdetails' element={< MoviesDetails />} />
      </Routes>
    </>
  );
}

export default App;
