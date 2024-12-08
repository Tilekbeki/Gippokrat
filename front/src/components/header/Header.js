import './Header.scss';
import Logo from '../../resources/img/logo.png';

const Header = () => {
    return(
        <header className='header'>
            <div className='logo'><img src={Logo}/></div>
            <div class="contact-info">
                <div class="contact-item">
                    <img src="address.png" alt="Адрес"/>
                    <p>Адрес: ул. Чернышевского 75а</p>
                </div>
                <div class="contact-item">
                    <img src="time.png" alt="Время работы"/>
                    <p>Время работы: 10:00-20:00</p>
                </div>
                <div class="contact-item">
                    <img src="phone.png" alt="Телефон"/>
                    <p>Телефон: <a href="tel:+996708998877">+996 708 99-88-77</a></p>
                </div>
            </div>
            <a href="http://stackoverflow.com" className='header-auth'><button className='header-auth__btn'>Link Text</button></a>
        </header>
    )
}

export default Header;