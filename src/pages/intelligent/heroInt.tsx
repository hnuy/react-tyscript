import Navbar from '../../components/navbar'
import "./int.css"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../../components/cards';


interface Hero {
    id?: String;
    name?: string;
    portrait?: {
        full?: string
    };
    attack?: String;
    roles?: Array<String>;
    primary_attribs?: String;

}


interface HeroListProps {
    items: Hero[];
};

const Agility: React.FC<HeroListProps> = () => {

    const [data, setData] = useState<Hero[]>([])

    useEffect(() => {
        // Use [] as second argument in useEffect for not rendering each time
        axios
            .get<Hero[]>('https://peerapongsam.github.io/heropedia/json/english/heroes.json')
            // .get<Hero[]>('https://ggn2tfls3e.execute-api.ap-southeast-1.amazonaws.com/Prod/heroes.json')
            .then(response => {
                setData(response.data.filter(e => e.primary_attribs === "int"))
            }).catch((err) => {
                throw err
            })
    }, []);

    return (
        <div className="auth-wrapper">
            <Navbar />
            <div className="int-inner">
                <h1 style={{ justifyContent: 'center', display: 'flex' }}>
                    <img className="rounded-circle" src="https://pbs.twimg.com/media/DcYdDmaVwAAIfYQ?format=jpg&name=medium" alt="holderimage" width="50" height="50" />
                    Intelligent
                </h1>
                {data.map((e, i) => <Cards key={e.name} name={e.name} portrait={e.portrait} id={e.id} ></Cards>)}
            </div>
        </div>
    )
}
export default Agility;