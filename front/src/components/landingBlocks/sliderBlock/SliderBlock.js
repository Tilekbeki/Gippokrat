import './SliderBlock.scss';
import arrow from "../../../resources/icons/arrow.svg"
const SliderBlock = () => {
    return(
        <div className="slider">
            <div className="container">
                <div className="slider-block">
                    <div className="slider-item">
                        <div className="slider-item__title">Грамотные взрослые <br/>и детские стоматологи</div>
                        <div className="slider-item__info">
                            <button className="slider-info__btn">Подробнее</button>
                            <div className="controller">
                                <div className="controller-prev"><img src={arrow} /></div>
                                <div className="controller-next"><img src={arrow} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderBlock;