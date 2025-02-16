import "./Footer.scss";
import VkIcon from "../../resources/icons/vk-icon.svg";
import WhatsappIcon from "../../resources/icons/whatsapp-icon.svg";
import TgIcon from "../../resources/icons/tg-icon.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__flex">
                <div className="footer__menu">
                    <div>Cтоматологическая клиника «Gippokrat»</div>
                    <ul>
                        <li>Услуги</li>
                        <li>Цены</li>
                        <li>Анализы</li>
                        <li>Комплексные программы</li>
                        <li>Специалисты</li>
                        <li>Отзывы</li>
                        <li>Контакты</li>
                        <li>Карта сайта</li>
                    </ul>
                </div>
                <div className="footer__menu">
                    <div>Информация</div>
                    <ul>
                        <li>О клинике</li>
                        <li>Оплата услуг</li>
                        <li>Пациентам</li>
                        <li>Правовая информация</li>
                        <li>СМИ о нас</li>
                        <li>Новости</li>
                        <li>Блог</li>
                        <li>Справочник заболеваний</li>
                        <li>Галерея</li>
                    </ul>
                </div>
                <div className="footer__contacts">
                    <div className="footer-call">По всем вопросам звоните:<br/>
                    <a href="tel:+996908888888">+996 908 88-88-88</a></div>
                    <ul>
                        <li><a href="#"><image src={TgIcon} /></a></li>
                        <li><a href="#"><image src={WhatsappIcon} /></a></li>
                        <li><a href="#"><image src={VkIcon} /></a></li>
                    </ul>
                    <div className="footer__info">
                        <a href="#">Политика конфиденциальности</a>
                        <span>Copyryght ©Gippokrat</span>
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;