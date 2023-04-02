// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import SearchCar from './pages/SearchCar';
import ListCar from './pages/ListCar';
import DetailCar from './pages/DetailCar';
import BelajarUseStateUseEffect from './pages/BelajarUseStateUseEffect';
import BelajarUseRefHook from './pages/BelajarUseRefHook';
import KonsepFIlterData from './pages/KonsepFIlterData';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Index/>}/>
                    <Route path='search' element={<SearchCar/>}/>
                    <Route path='list' element={<ListCar/>}/>
                    <Route path='show' element={<DetailCar/>}/>
                    <Route path='effect' element={<BelajarUseStateUseEffect/>}/>
                    <Route path='test' element={<BelajarUseRefHook/>}/>
                    <Route path='api' element={<KonsepFIlterData/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
