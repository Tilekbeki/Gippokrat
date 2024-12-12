import "./ServiceBlock.scss"

const ServiceBlock = () => {
    return (
        <section className="service">
            <div className="container">
                <h2 className="title title_h2 title_center">
                    Наши услуги
                </h2>
                <div className="service-wrap">
                    <div className="service-item" data-icon="diagnostic">
                        <p>Диагностика</p>
                    </div>
                    <div className="service-item" data-icon="doctor">
                        <p>Прием врачей</p>
                    </div>
                    <div className="service-item" data-icon="programs">
                        <p>Комплексные программы</p>
                    </div>
                    <div className="service-item" data-icon="analysis">
                        <p>Анализы</p>
                    </div>
                    <div className="service-item" data-icon="medical-certificates">
                        <p>Медицинские справки</p>
                    </div>
                    <div className="service-item" data-icon="day-hospital">
                        <p>Дневной стационар</p>
                    </div>
                    <div className="service-item" data-icon="procedure-room">
                        <p>Процедурный кабинет</p>
                    </div>
                    <div className="service-item" data-icon="surgery">
                        <p>Хирургия</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceBlock;