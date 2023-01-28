import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import Home from './pages/Home';
import './App.css';

/*npm i react-router-dom*/

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Nav/>}>
        <Route index element={<Home/>}/>
        </Route>
    </Routes>
    </>
  );
}

export default App;
