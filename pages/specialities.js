

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Link from "next/link";

import axios from "../authAxios";
import { useEffect, useState } from "react";
import tempImg from "../public/assets/img/logo.png";


export default function Specialities(){


    const getsymptomItems = async () => {
        return await axios
          .post("healthIssue/symptom-list")
          .then((response) => {
            let status = "status" in response;
            if (!status) {
              response.status = 401;
              return response;
            }
            return response.data.data;
          })
          .catch((err) => {
            console.log(err);
            return [];
          });
      };
    
      const [symptomItems, setsymptomItems] = useState();
    
      // load hospital data list
      useEffect(() => {
        getsymptomItems()
          .then((res) => {
            // console.log("ressssssssssss", res);
            setsymptomItems(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
    

    return(
        <>
            <Navbar />
            <section id="specialities">
                <div className="container pt-100 pb-50">
                    <div className="row specilalists_area">
                        <h4>Common Symptoms</h4>
                        <div className="w-100 d-flex flex-wrap justify-content-between">
                            {
                                symptomItems?

                                symptomItems.map((item) =>{
                                    let data = []
                                        item.specialists ?
                                        item.specialists.map((tempItem) => {
                                          data.push(tempItem.id)
                                        }):null
                                    return(
                                        <Link href={{ pathname: '/doctor-list', query: {id:  data} }}>
                                            <a>
                                            <div className="single_specialities d-flex align-items-center flex-column">

                                            {item.file && item.file.path ? (
                                                <img src={"https://api-admin.shafa.care/api/v3/auth/publicFile/" +
                                                item.file.path} alt="img" />
                                                ) : (
                                                    <img src={tempImg} alt="img" />
                                                )}
                                                <h6 className="mt-3">{item.name}</h6>
                                            </div>
                                        </a></Link>
                                    )
                                }):null
                            }
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}