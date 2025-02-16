import "./LocationBlock.scss";

const LocationBlock = () => {
    return(
        <div className="location">
            <h2 className="title title_h2 title_center">Где мы находимся</h2>
            <address className="location-address">г. Красноярск, ул. Чернышевского 75а<br/>
            E-mail: detdoc24@yandex.ru</address>
            <div className="container">
                <iframe className="location-map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A15d907658034d8fc8db2f94a1dbd74f1f3b7c12c0066fe97f21b83f42d5dcd99&amp;source=constructor" width="1170" height="556" frameborder="0"></iframe>
            </div>

        </div>
    )
}

export default LocationBlock;