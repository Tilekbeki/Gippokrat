import "./ReasonsBlock.scss";
const ReasonsBLock = () => {
    return(
        <section className="reasons">
            <h2 className="title title_h2">Почему именно к нам?</h2>
            <div className="container">
                <div className="reasons-wrap">
                    <div className="reason-item">
                        <div data-icon="QualityCircleIcon">
                        </div>
                        <h3>Качество</h3>
                        <p>80% наших врачей обладают высшей или 1-й категорией</p>
                    </div>
                    <div className="reason-item">
                        <div data-icon="AnalysesCircleIcon">
                        </div>
                        <h3>Анализы</h3>
                        <p>Вы можете сдавать любые анализы, даже самые редкие</p>
                    </div>
                    <div className="reason-item">
                        <div data-icon="ProgramCircleIcon">
                        </div>
                        <h3>Программы</h3>
                        <p>Для вашего удобства мы разработали программы медицинского обслуживания</p>
                    </div>
                    <div className="reason-item">
                        <div  data-icon="AtHomeCircleIcon">
                        </div>
                        
                        <h3>На дому</h3>
                        <p>Проводим лечение на дому, если состояние пациента не позволяет прийти в клинику</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReasonsBLock;