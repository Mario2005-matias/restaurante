import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../Pages/Home/Home';
import BrowseMenu from '../Pages/BrowseMenu/BrowseMenu';
import SpecialOffer from '../Pages/SpecialOffer/SpecialOffer';
import Restaurant from '../Pages/Restaurant/Restaurant';

export default function Header() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
                <h2>Logo</h2>
          </div>
        </div>

        <BrowserRouter>
            <nav className='w-[1000px]'>
                <ul className='flex flex-row justify-around items-center'>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Restaurant">Restaurant</Link></li>
                    <li><Link to="/BrowseMenu">Browse Menu</Link></li>
                    <li><Link to="/SpecialOffer">Especial Offer</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/Home" element={<Home/>} />
                <Route path="/Restaurant" element={<Restaurant/>} />
                <Route path="/BrowseMenu" element={<BrowseMenu/>} />
                <Route path="/SpecialOffer" element={<SpecialOffer/>} />
            </Routes>
        </BrowserRouter>

        <div className="navbar-end">
         <h1>loaoso</h1>
        </div>
      </div>
    </>
  );
}
