import "./LastNewsBlock.scss";

const LastNewsBlock = () => {
    return(
        <section className="news">
            <h2 className="title title_h2 title_center">Последние новости</h2>
            <div className="container">
                <div className="news-list">
                    <div className="news-item">
                        <div className="news-item__date">XX.XX.2022</div>
                        <div className="news-item__text">On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.</div>
                    </div>
                    <div className="news-item">
                        <div className="news-item__date">XX.XX.2022</div>
                        <div className="news-item__text">On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.</div>
                    </div>
                    <div className="news-item">
                        <div className="news-item__date">XX.XX.2022</div>
                        <div className="news-item__text">On the other hand, we denounce with righteous indignation and dislike men who are so demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee.</div>
                    </div>
                </div>
                <a href="#" className="news-btn">Перейти ко всем</a>
            </div>
        </section>
    )
}

export default LastNewsBlock;