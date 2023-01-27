import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import './App.css';

/*npm i react-router-dom*/

function About(){
  return(
    <div>
      <h2>lala</h2>
    </div>
  )
}


function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Nav/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        </Route>
    </Routes>
    </>
  );
}

export default App;
