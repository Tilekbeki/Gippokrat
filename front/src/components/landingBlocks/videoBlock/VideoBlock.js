import "./VideoBlock.scss";

const VideoBlock = () => {
    return (
        <section className="video-block ">
            <h2 className="title title_h2">Видео о клинике</h2>
            <div className="container">
            <div className="video-promo">
            <iframe src="https://www.youtube.com/embed/4dtV3iF4MPg" title="Рекламный ролик клиники &quot;Гранд Медика&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            </div>
        </section>
    )
}

export default VideoBlock;