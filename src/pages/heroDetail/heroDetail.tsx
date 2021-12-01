import Navbar from '../../components/navbar'
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import "./detail.css"
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';
import { Pie, Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Filler,
    Tooltip,
    Legend);


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
    overview: {
        attribs: {
            int: {
                base: String
            },
            agi: {
                base: String
            },
            str: {
                base: String
            },
            dmg: {
                min: String
            },
            armor: String
        }
    };

}


const Agility: React.FC<Hero> = () => {
    const { state } = useLocation<String>()
    const [heroDetail, setHeroDetail] = useState<Hero>()

    const pieData = {
        labels: ['int', 'agi', 'str', 'dmg', 'armor'],
        datasets: [
            {
                label: '# of Votes',
                data: [
                    heroDetail?.overview.attribs.int.base,
                    heroDetail?.overview.attribs.agi.base,
                    heroDetail?.overview.attribs.str.base,
                    heroDetail?.overview.attribs.dmg.min,
                    heroDetail?.overview.attribs.armor
                ],
                backgroundColor: [
                    'rgba(54, 162, 235)',
                    'rgba(75, 192, 192)',
                    'rgba(255, 99, 132)',
                    'rgba(255, 206, 86)',
                    'rgba(153, 102, 255)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const radarData = {
        labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
        datasets: [
            {
                label: '# of Votes',
                data: [2, 9, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    useEffect(() => {

        axios
            .get<Hero>(`https://peerapongsam.github.io/heropedia/json/english/hero/${state}.json`)
            // .get<Hero[]>('https://ggn2tfls3e.execute-api.ap-southeast-1.amazonaws.com/Prod/heroes.json')
            .then(response => {
                setHeroDetail(response.data)
            }).catch((err) => {
                throw err
            })
    }, [state]);


    return (
        <div className="detail-wrapper">
            <Navbar />
            <div className="detail-inner">
                <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', borderRadius: "5%", marginTop: "20px" }} src={heroDetail?.portrait?.full} alt="holderimage" width="250" height="200" />
                <h4 style={{ justifyContent: 'center', display: 'flex', fontWeight: "bold" }}>{heroDetail?.name}</h4>
                <p style={{ justifyContent: 'center', display: 'flex', fontFamily: 'Cursive', marginLeft: '30px', marginRight: '20px' }}>{heroDetail?.bio}</p>
            </div>
            <div style={{ display: 'inline-block', }}>
                <div className="chart1-inner"><Pie data={pieData} style={{ maxWidth: 700, maxHeight: 360 }} /></div>
                <div className="chart2-inner"><Radar data={radarData} style={{ maxWidth: 700, maxHeight: 360 }} /></div>
            </div>
        </div>
    )
}
export default Agility;