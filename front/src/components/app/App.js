import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from '../pages/MainPage';
import AuthPage from '../pages/AuthPage/AuthPage';
import AdminPage from '../pages/AdminPage/AdminPage';
import Patients from '../pages/AdminPage/Patients';
import Staff from '../pages/AdminPage/Staff';
import Storage from '../pages/AdminPage/Storage';
import Services from '../pages/AdminPage/Services';
import Reports from '../pages/AdminPage/Reports';
import Calendar from '../pages/AdminPage/Calendar';
import Accounting from '../pages/AdminPage/Accounting';

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/admin/*" element={<AdminPage />} />
            <Route path="/admin/patients" element={<AdminPage component={Patients} />} />
            <Route path="/admin/staff" element={<AdminPage component={Staff} />} />
            <Route path="/admin/storage" element={<AdminPage component={Storage} />} />
            <Route path="/admin/services" element={<AdminPage component={Services} />} />
            <Route path="/admin/reports" element={<AdminPage component={Reports} />} />
            <Route path="/admin/calendar" element={<AdminPage component={Calendar} />} />
            <Route path="/admin/accounting" element={<AdminPage component={Accounting} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
