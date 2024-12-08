import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from '../pages/MainPage';
import AuthPage from '../pages/AuthPage'
// const Page404 = lazy(() => import('../pages/404'));
// const MainPage = lazy(() => import('../pages/MainPage'));
// const ComicsPage = lazy(() => import('../pages/ComicsPage'));
// const SingleComicLayout = lazy(() => import('../pages/singleComicLayout/SingleComicLayout'));
// const SingleCharacterLayout = lazy(() => import('../pages/singleCharacterLayout/SingleCharacterLayout'));
// const SinglePage = lazy(() => import('../pages/SinglePage'));

function App() {
  return (
    <Router>
            <div className="app">
                <main>
                        <Routes>
                            <Route path="/" element={<MainPage/>} />
                            <Route path='/login' element={<AuthPage/>}/>
                        </Routes>
                </main>
            </div>
        </Router>
  );
}

export default App;
