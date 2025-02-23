import { Route, Routes, NavLink, Navigate } from "react-router-dom";
import Logo from "../../../resources/img/logo.png";
import "./AdminPage.scss";
import Patients from "./Patients";

const AdminPage = ({ component: Component }) => {
  return (
    <div className="admin-container">
      <div className="side-panel">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <button className="side-panel__btn">Добавить пациента</button>
        <div className="side-panel__menu">
          <ul className="side-panel__menu-block">
            <li>
              <NavLink to="/admin/patients" className={({ isActive }) => isActive ? "active" : ""}>
                Мои пациенты
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/calendar" className={({ isActive }) => isActive ? "active" : ""}>
                Календарь
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/services" className={({ isActive }) => isActive ? "active" : ""}>
                Услуги
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/reports" className={({ isActive }) => isActive ? "active" : ""}>
                Отчеты
              </NavLink>
            </li>
          </ul>
          <ul className="side-panel__menu-block">
            <li>
              <NavLink to="/admin/storage" className={({ isActive }) => isActive ? "active" : ""}>
                Склад
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/accounting" className={({ isActive }) => isActive ? "active" : ""}>
                Бухгалтерия
              </NavLink>
            </li>
          </ul>
          <ul className="side-panel__menu-block">
            <li>
              <NavLink to="/admin/staff" className={({ isActive }) => isActive ? "active" : ""}>
                Персонал
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/settings" className={({ isActive }) => isActive ? "active" : ""}>
                Настройки программы
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="maincontent">
          {Component ? <Component /> : null}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
