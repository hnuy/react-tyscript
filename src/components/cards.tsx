import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type Props = {
    id?: String;
    name?: string;
    portrait?: {
        full?: string
    };
    attack?: String;
    roles?: Array<String>;
    bio?: String;
    primary_attribs?: String;
}

const Cards = (props: Props) => {
    const [data, setData] = useState<Props>()

    useEffect(() => {
        // Use [] as second argument in useEffect for not rendering each time
        axios
            .get<Props>(`https://peerapongsam.github.io/heropedia/json/english/hero/${props.id}.json`)
            // .get<Hero[]>('https://ggn2tfls3e.execute-api.ap-southeast-1.amazonaws.com/Prod/heroes.json')
            .then(response => {
                setData(response.data)
            }).catch((err) => {
                throw err
            })
    });

    return (
        <div style={{ display: 'inline-block', paddingTop: '20px', paddingRight: '15px', height: 'auto' }}>
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Header style={{ backgroundColor: 'DimGrey' }}>{props.name}</Card.Header>
                <Card.Img variant="top" src={props.portrait?.full} />
                <Card.Body style={{ backgroundColor: 'GhostWhite' }}>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <p style={{ overflow: 'auto', height: '100px', overflowY: 'hidden' }}>
                            {data?.bio}
                        </p>
                    </Card.Text>
                    <Link to={{
                        pathname: `/herodetail`,
                        state: props.id
                    }} className="btn btn-secondary">View details »</Link>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Cards;