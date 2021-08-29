import Link from "next/link";

import axios from "../authAxios";
import { useEffect, useState } from "react";
import tempImg from "../public/assets/img/logo.png";

export default function CommontSymptom() {
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
        console.log("common symptom", res)
        setsymptomItems(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function nextView() {
    $(".cata-sub-nav").animate({ scrollLeft: "+=460" }, 500);
  }
  function PreView() {
    $(".cata-sub-nav").animate({ scrollLeft: "-=460" }, 500);
  }

  
  return (
    <>
      <button class="nav-prev-arrow" onClick={() => PreView()}>
        <i class="fa fa-angle-left"></i>
      </button>
      <div class="cata-sub-nav ">
        <ul className="">
          {symptomItems
            ? symptomItems.map((item) => {
              let data = []

              return (
                <li>
                  {
                    item.specialists ?
                      item.specialists.map((tempItem) => {
                        data.push(tempItem.id)
                        console.log("idddddddd", data)
                      }) : null
                  }
                  {
                    item.specialists ?
                      // <Link href={{ pathname: '/doctor-list', query: {id: data.id } }}>
                      <Link href={{ pathname: '/doctor-list', query: { id: data } }}>
                        <a href="">
                          {
                            console.log("item.specialists.id", item.specialists)
                          }
                          <div className="d-flex flex-column align-items-center justify-content-around single_symptom">
                            {item.file && item.file.path ? (
                              <img
                                src={
                                  "https://api-admin.shafa.care/api/v3/auth/publicFile/" +
                                  item.file.path
                                }
                                alt="img"
                              />
                            ) : (
                              <img src={tempImg} alt="img" />
                            )}
                            {
                              item.name ?
                                <p className="d-block">{item.name}</p> :
                                <p className="d-block">Not Defined</p>
                            }

                          </div>
                        </a>
                      </Link> : null
                  }
                </li>
              );
            })
            : null}
        </ul>
      </div>
      <button class="nav-next-arrow" onClick={() => nextView()}>
        <i class="fa fa-angle-right"></i>
      </button>
    </>
  );
}
