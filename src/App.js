// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import SearchCar from './pages/SearchCar';
import DetailCar from './pages/DetailCar';

const App = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path='/' element={<Index/>}/>
                    <Route path='search' element={<SearchCar/>}/>
                    <Route path='detail/:id' element={<DetailCar/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
