import './Header.scss';
import Logo from '../../resources/img/logo.png';
import Phone from '../../resources/icons/phone.svg';
import Clock from '../../resources/icons/clock.svg';
import Location from '../../resources/icons/location.svg';
import User from '../../resources/icons/user.svg';

const Header = () => {
    return (
        <header className='header'>
            <div className="header-wrap">
                <div className='logo'><img src={Logo} alt='logo' /></div>
                <div class="contact-info">
                    <div class="contact-item">
                        <img src={Location} alt="Адрес" />
                        <p>ул. Чернышевского 75а</p>
                    </div>
                    <div class="contact-item">
                        <img src={Clock} alt="Время работы" />
                        <p>8.00 - 20.00</p>
                    </div>
                    <div class="contact-item">
                        <img src={Phone} alt="Телефон" />
                        <p><a href="tel:+996708998877">+996 708 99-88-77</a></p>
                    </div>
                </div>

            </div>
            <a href="http://stackoverflow.com" className='header-auth'><button className='header-auth__btn'><span>Войти как врач</span> <img src={User} alt="Иконка человека" /></button></a>
            <nav>
                <div>
                    <ul class="header-menu">
                        <li class="menu-item menu-item_active"><a href="/#">Главная</a></li>
                        <li class="menu-item"><a href="/#">Цены</a></li>
                        <li class="menu-item">
                            <a href="/#">Услуги</a>
                            <ul class="header-submenu">
                                <li><a href="/#">Диагностика</a></li>
                                <li><a href="/#">Прием врачей</a></li>
                                <li><a href="/#">Комплексные программы</a></li>
                                <li><a href="/#">Анализы</a></li>
                                <li><a href="/#">Медицинские справки</a></li>
                                <li><a href="/#">Дневной стационар</a></li>
                                <li><a href="/#">Процедурный кабинет</a></li>
                                <li><a href="/#">Хирургия</a></li>
                            </ul>
                        </li>
                        <li><a href="/#">Специалисты</a></li>
                        <li><a href="/#">Контакты</a></li>
                        <li><a href="/#">Информация</a></li>
                        <li><a href="/#">Отзывы</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;