import 'bootstrap/dist/css/bootstrap.css';
import TipusList from './components/TipusList';
import TipusDetails from './components/TipusDetails';
import TipusAdd from './components/TipusAdd';
import './components/style.css';
import { Route, Routes, NavLink, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>TipusosOldal</h1>
      </header>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <ul>
          <li><NavLink to="/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pie-chart" viewBox="0 0 16 16">
  <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
</svg>Tipusok</NavLink></li>
          <li><NavLink to="/tipus-hozzaadasa"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
</svg>Új Tipus</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<TipusList/>}></Route>
        <Route path='/Tipus/:id' element={<TipusDetails/>}></Route>
        <Route path='/tipus-hozzaadasa' element={<TipusAdd/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
