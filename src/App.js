
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Components/Landing/Landing';
// import BottomBar from './Components/BottomBar/BottomBar';
// import NavBar from './Components/NavBar/NavBar';
import PokeList from './Components/PokeList/PokeList';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route exact path='/home' element={<PokeList />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
