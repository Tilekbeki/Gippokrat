import "./ReviewsBlock.scss"


const ReviewsBlock = () => {
    return(
        <section className="reviews">
            <h2 className="title title_h2 title_center">Отзывы</h2>
            <div className="container">
                <div className="reviews-list">
                    <div className="review">
                        <div className="review-name">Марина Уфимцева</div>
                        <p className="review-text">Узнала от своей знакомой по интернету, что есть такая хорошая клиника для деток. Та женщина подсказала мне конкретных специалистов...</p>
                        <a href="#" className="review-read">Читать</a>
                    </div>
                    <div className="review">
                    <div className="review-name">Ольга Фролова</div>
                        <p className="review-text">Была на приеме у Савчук Н. А. Прекрасный Доктор, очень внимательно провела осмотр, всё объяснила по моему состоянию...</p>
                        <a href="#" className="review-read">Читать</a>
                    </div>
                    <div className="review">
                    <div className="review-name">Олег Канашкин</div>
                        <p className="review-text">Мы клинику выбрали потому, что здесь работают врачи-профессионалы с большой буквы! Мне вылечили очень тяжелый бронхит...</p>
                        <a href="#" className="review-read">Читать</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewsBlock;