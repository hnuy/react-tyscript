import Navbar from '../../components/navbar'
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import "./detail.css"

interface Hero {
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


const Agility: React.FC<Hero> = () => {
    const { state, pathname } = useLocation<String>()
    const [heroDetail, setHeroDetail] = useState<Hero>()



    useEffect(() => {
        // Use [] as second argument in useEffect for not rendering each time
        axios
            .get<Hero>(`https://peerapongsam.github.io/heropedia/json/english/hero/${state}.json`)
            // .get<Hero[]>('https://ggn2tfls3e.execute-api.ap-southeast-1.amazonaws.com/Prod/heroes.json')
            .then(response => {
                setHeroDetail(response.data)
            }).catch((err) => {
                throw err
            })
    });

    return (
        <div className="detail-wrapper">
            <Navbar />
            <div className="detail-inner" style={{ overflow: 'hidden', height: 'auto' }}>
                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', borderRadius: "5%", marginTop: "20px" }} src={heroDetail?.portrait?.full} alt="holderimage" width="250" height="200" />
                <h4 style={{ justifyContent: 'center', display: 'flex' }}>{state}</h4>
                <p style={{ justifyContent: 'center', display: 'flex', fontFamily: 'Cursive', marginLeft: '30px', marginRight: '20px' }}>{heroDetail?.bio}</p>
            </div>
        </div>
    )
}
export default Agility;