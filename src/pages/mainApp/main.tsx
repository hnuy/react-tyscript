import { Carousel } from 'react-bootstrap';
import Navbar from '../../components/navbar'



const MianApp: React.FC = () => {
    // const [username, setUsername] = useState<String>("")
    // const [password, setPassword] = useState<String>("")
    return (
        <div>
            <Navbar />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.teahub.io/photos/full/206-2061559_banner-de-dota-2..png"
                        alt="First slide"
                        style={{ height: "600px" }}
                    />
                    <Carousel.Caption>
                        <h3> Multiplayer Online Battle Arena </h3>
                        <p> video game developed and published by Valve.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.teahub.io/photos/full/332-3329460_dota-2-youtube-banner..jpg"
                        alt="Second slide"
                        style={{ height: "600px" }}

                    />

                    <Carousel.Caption>
                        <h3> Defense of the Ancients </h3>
                        <p>Dota 2 is played in matches between two teams of five players.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://s1.1zoom.me/b5050/151/DOTA_2_Warriors_Sven_Swords_517189_1920x1080.jpg"
                        alt="Third slide"
                        style={{ height: "600px" }}

                    />

                    <Carousel.Caption>
                        <h3>Player Versus Player</h3>
                        <p>Combat A team wins by being the first to destroy the other team's "Ancient".</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <br />
            <div className="container marketing">
                <div className="row">
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="https://pbs.twimg.com/media/DcYdCZLUQAAQUcj?format=jpg&name=medium" alt="holderimage" width="140" height="140" />
                        <h2>Strength</h2>
                        <p>Strength is one of the three primary attributes that grants health and health regeneration to every hero. Strength heroes also gain attack damage per point of strength.</p>
                        <p><a className="btn btn-secondary" href="/strength" role="button">View details »</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="https://pbs.twimg.com/media/DcYdDmaVwAAIfYQ?format=jpg&name=medium" alt="holderimage" width="140" height="140" />
                        <h2>Agility</h2>
                        <p>Agility is one of the three primary attributes that grants attack speed and armor to every hero. Agility heroes also gain attack damage per point of agility.</p>
                        <p><a className="btn btn-secondary" href="/agility" role="button">View details »</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="rounded-circle" src="https://pbs.twimg.com/media/DcYdET-V0AAS1kK?format=jpg&name=medium" alt="holderimage" width="140" height="140" />
                        <h2>Intelligent</h2>
                        <p>Intelligence is one of the three primary attributes that grants mana and mana regeneration to every hero. Intelligence heroes also gain attack damage per point of intelligence.</p>
                        <p><a className="btn btn-secondary" href="/intelligent" role="button">View details »</a></p>
                    </div>
                </div>

            </div>
            <hr className="featurette-divider" /><br />

            <div className="row featurette" style={{ marginLeft: "50px" }}>
                <div className="col-md-7" style={{ marginTop: "25px" }}>
                    <h2 className="featurette-heading" style={{ textAlign: 'center' }}>Herointroductions</h2>
                    <p className="lead" >Heroes are the essential element of Dota 2, as the course of the match is dependent on their intervention. During a match, two opposing teams select five out of 122
                        heroes that accumulate Experience Experience and Gold Gold to grow stronger and gain new abilities in order to destroy the opponent's Ancient. Most heroes have a distinct role that defines how they affect the battlefield, though many heroes can perform multiple roles. A hero's appearance can be modified with equipment.
                        There are currently 122 heroes in Dota 2. For a table of heroes sorted by attributes and mechanics, see table of hero attributes.</p>
                </div>
                <div className="col-md-5">
                    <img src="https://upload.wikimedia.org/wikipedia/th/0/08/DotA2.jpg" alt="DOTA2" style={{ width: "400px", height: "300px" }} />
                </div>
            </div>

        </div>
    );
};
export default MianApp;