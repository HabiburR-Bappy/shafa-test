import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import axios from '../authAxios'
import SpecialitiesCard from '../Components/SpecialitiesCard';

import Link from 'next/link'

import { useEffect, useState } from 'react';

export default function Specialist(){

    
    const [speialistList, setSpeialistList] = useState();
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        if (loadingData) {
            getSpecialistList().then(res => {
                setSpeialistList(res);
            }).catch((err) => { console.log(err) });
        }
    })
    const getSpecialistList = async () => {
        return await axios.post('/specialities/specialities-list')
            .then(response => {
                let status = 'status' in response
                if (!status) {
                    response.status = 401
                    return response
                }
                return response.data.data
            })
            .catch(err => {
                console.log(err)
                return []
            })
    }
    return(
        <>
            <Navbar />
            <section id="specialist-page" className="ptb-100">
                <div className="container">
                    <div className="row pt-5">
                        <h3>Top Specialities</h3>
                    </div>

                    <div className="row pt-5">
                        <ul id="scroller-specialitie">

                        {
                            speialistList ?
                            speialistList.map((item) => {
                                    return (
                                        <li>
                                            <SpecialitiesCard data={item} />
                                        </li>
                                    )
                                }) : null
                        }
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}