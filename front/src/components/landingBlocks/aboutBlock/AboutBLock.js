import "./AboutBlock.scss";
import doctorImg from "../../../resources/files/firstdocrot.png"

const AboutBlock = () => {
    return (
        <section className="about">
            <h2 className="title title_h2">О клинике</h2>
            <div className="container">
                <div className="about-wrap">
                    <div className="about-item">
                        <div className="about-item__img">
                            <img src={doctorImg} alt="Фотография врача, Марина Александровна"/>
                        </div>
                        <div className="about-item__info">
                            <h3>Директор клиники</h3>
                            <p>Марина Александровна</p>
                            <a href="vk.com/tillekbek">Перейти к карточке врача</a>
                        </div>
                    </div>
                    <div className="about-info">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
<br/><br/>
Vivamus ut mollis risus, vitae auctor urna. Cras bibendum mi in tellus gravida, et mattis nulla luctus. Aenean mattis nunc ac gravida pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/><br/>
Pellentesque malesuada fermentum magna eget laoreet. Etiam fringilla orci a consequat gravida. Mauris lobortis quis mauris vitae posuere.
<br/><br/>
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
<br/><br/>
Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
<br/><br/>
At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. 
<br/><br/>
Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum 
et dolorum fuga. Et harum quidem rerum..
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
<br/><br/>
Vivamus ut mollis risus, vitae auctor urna. Cras bibendum mi in tellus gravida, et mattis nulla luctus. Aenean mattis nunc ac gravida pretium. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBlock;