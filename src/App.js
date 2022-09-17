
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/Home'
import Header from './components/layouts/Header';



function App() {
  return (
   <div className='app'>
     
      <BrowserRouter>
          <Header/>
          <Routes>
          <Route path="/" element={<Home/>} exact />         
          </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
