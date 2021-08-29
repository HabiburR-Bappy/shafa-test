
import Link from 'next/link'

import React, {Component, useEffect, useState} from 'react';
import {useRouter} from 'next/router'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from '../authAxios'

import maleDocImg from '../public/assets/img/avater/Male_doctor_avatar.jpg'
import femaleDocImg from '../public/assets/img/avater/Female_doctor_avatar.jpg'
import selectedCircle from '../public/assets/img/icon/selectedCircle.png'
import initialCircle from '../public/assets/img/icon/circle.png'

import loading from '../public/assets/img/loading.gif'

export default function Doctor(){

    const router = useRouter();
    var {id} = router.query;
    const[tempId,setTempId] = useState(true)

    const [synId,setSynId] = useState(id);

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
      const getHospitalLists = async () => {
        return await axios
          .post("hospital/public/list")
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

      const getSpecilistLists = async () => {
        return await axios.post('/specialist/specialist-list')
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

    const getBlogList = async () => {
        return await axios.post('doctor/doctor-list')
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
      
  const [blog, setblog] = useState(); 
  const [symptom, setSymptom] = useState(); 
  const [hospital, setHospital] = useState(); 
  const [specilities, setSpecilities] = useState();  
  const [allData, setAllData] = useState();  
  const [loadingData, setLoadingData] = useState(true);
    
  function fulterBySymptom(getData){
      let tempObj = []
      id.map((items) => {
        let tempItem = getData.filter(item => item.specialist.id  == items)
        tempObj = tempObj.concat(tempItem)
      })
      setblog(tempObj);
  }
  function fulterBySpecialist(getData){
    let tempObj =getData.filter(item => item.specialist.id  == id)    
    setblog(tempObj);
}

  // load hospital data list
  useEffect(() => {
      if (loadingData) {
          
        getBlogList().then(res => {         
            setAllData(res);
            if(!synId){
                setblog(res)
            }
            else if(synId==11 && tempId){
                fulterBySpecialist(res)
            }
            else if(Array.isArray(synId) && tempId){
                fulterBySymptom(res)
            }
            else if(tempId){
                fulterBySpecialist(res)
            }
        }).catch((err) => { console.log(err) }); 

        getsymptomItems().then(res => {
            setSymptom(res);
            
        }).catch((err)=>{ console.log(err) });
        getHospitalLists().then(res =>{
            setHospital(res)
        }).catch((err) => { console.log(err) })
        getSpecilistLists().then(res =>{
            setSpecilities(res)
        }).catch((err) => { console.log(err) })
      }
  }, []);
  
  const [countFilter, setCountFilter] = useState(0);
  const [symptomFilter, setSymptomFilter] = useState(null);
  const [specialitiesFilter, setSpecialitiesFilter] = useState(null);
  const [maleFilter, setMaleFilter] = useState(false);
  const [femaleFilter, setFemaleFilter] = useState(false);
  const [less200, setLess200] = useState(false);
  const [less500, setLess500] = useState(false);
  const [greater500, setGreater500] = useState(false);
  const [filterSpecilist,setFilterSpecilist] = useState(null)
  const [filterHospital,setFilterHospital] = useState(null)
  const [filterSymptom,setFilterSymptom] = useState(null)


  function cleareAll(){
   
    setblog(allData)
    setSynId(null)
    id = null;
    setTempId(false)
    setSymptomFilter(null)
    setSpecialitiesFilter(null)
    setFilterSpecilist(null)
    setFilterHospital(null)
    setFilterSymptom(null)
    setFemaleFilter(false)
    setMaleFilter(false)
    setLess200(false)
    setLess500(false)
    setGreater500(false)
    setFilterBtnSpecilist("Specialities")    
    setFilterBtnHospital("Hospital")   
    setFilterBtnhospital("display__none")   
    setFilterBtn("display__none") 
    setFilterBtnsymptom("display__none")        
    setCountFilter(0)
  }

  function filterMale(){
    let tempData = allData
    tempData = tempData.filter(item => item.gender == "Male")    

    setFemaleFilter(false)
    setMaleFilter(true);

    var temp = 1;
      if(symptomFilter) temp+=1;
      if(specialitiesFilter) {
        tempData = tempData.filter(item => item.specialist && item.specialist.id  == specialitiesFilter)              
        temp++;
    }
      if(less200){
          temp++;
          tempData = tempData.filter(item => item.fee < 200)
        }
      if(less500){
        temp++;
        tempData = tempData.filter(item => item.fee <= 500 && item.fee>=200)
      }
      if(greater500){
        temp++;
        tempData = tempData.filter(item => item.fee > 500)
      }
      if(filterSpecilist){
          temp++;
          tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSpecilist)
      }
      if(filterHospital){
          temp++;
          tempData = tempData.filter(item =>  item.hospital && item.hospital.id  == filterHospital)
      }
      if(filterSymptom){
          temp++;
          tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSymptom)
      }

       

      setCountFilter(temp)
      setblog(tempData)  
      setFilterBtnhospital("display__none")   
      setFilterBtn("display__none") 
      setFilterBtnsymptom("display__none")   

        if(synId==11&& tempId){
            fulterBySpecialist(tempData)
        }
        else if(Array.isArray(synId)&& tempId){
            fulterBySymptom(tempData)
        }
        else if(synId && tempId){
            fulterBySpecialist(tempData)
        }    
    }


    function filterFemale(){

    let tempData = allData
    tempData = tempData.filter(item => item.gender == "Female")

    setFemaleFilter(true)
    setMaleFilter(false);
    var temp = 1;
        if(symptomFilter) temp+=1;
        if(specialitiesFilter) {
            tempData = tempData.filter(item => item.specialist && item.specialist.id  == specialitiesFilter)              
            temp++;
        }
        if(less500){
            temp++;
            tempData = tempData.filter(item => item.fee <= 500 && item.fee>=200)
          }
        if(less200){
            temp++;
            tempData = tempData.filter(item => item.fee < 200)
          }
        if(greater500){
          temp++;
          tempData = tempData.filter(item => item.fee > 500)
        }
        if(filterSpecilist){
            temp++;
            tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSpecilist)
        }
        if(filterHospital){
            temp++;
            tempData = tempData.filter(item =>  item.hospital && item.hospital.id  == filterHospital)
        }
        if(filterSymptom){
            temp++;
            tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSymptom)
        }
  
        setCountFilter(temp)
        setblog(tempData)  
        setFilterBtnhospital("display__none")   
        setFilterBtn("display__none")
        setFilterBtnsymptom("display__none")   
        
        if(synId==11&& tempId){
            fulterBySpecialist(tempData)
        }
        else if(Array.isArray(synId)&& tempId){
            fulterBySymptom(tempData)
        }
        else if(synId && tempId){
            fulterBySpecialist(tempData)
        }       

    }


    function filterLess200(){
       
        let tempData = allData
        tempData = tempData.filter(item => item.fee < 200)

        setLess200(true);
        setGreater500(false)
        setLess500(false);
        var temp = 1;
        if(symptomFilter) temp+=1;
        if(specialitiesFilter) {
            tempData = tempData.filter(item => item.specialist && item.specialist.id  == specialitiesFilter)              
            temp++;
        }
        if(femaleFilter){
            temp++;
            tempData = tempData.filter(item => item.gender == "Female")
        }
        if(maleFilter) {
            temp++;
            tempData = tempData.filter(item => item.gender == "Male")
        };
        if(filterSpecilist){
            temp++;
            tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSpecilist)
        }
        if(filterHospital){
            temp++;
            tempData = tempData.filter(item =>  item.hospital && item.hospital.id  == filterHospital)
        }
        if(filterSymptom){
            temp++;
            tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSymptom)
        }
  
        setCountFilter(temp)
        setblog(tempData)  
        setFilterBtnhospital("display__none")   
        setFilterBtn("display__none")
        setFilterBtnsymptom("display__none")
        
        if(synId==11&& tempId){
            fulterBySpecialist(tempData)
        }
        else if(Array.isArray(synId)&& tempId){
            fulterBySymptom(tempData)
        }
        else if(synId && tempId){
            fulterBySpecialist(tempData)
        }       
    }


    function filterLess500(){
        
        let tempData = allData
        tempData = tempData.filter(item => item.fee <= 500 && item.fee>=200)

        setLess200(false);
        setGreater500(false)
        setLess500(true);
        var temp = 1;
        if(symptomFilter) temp+=1;
        if(specialitiesFilter) {
            tempData = tempData.filter(item => item.specialist && item.specialist.id  == specialitiesFilter)              
            temp++;
        }
        if(femaleFilter){
            temp++;
            tempData = tempData.filter(item => item.gender == "Female")
        }
        if(maleFilter) {
            temp++;
            tempData = tempData.filter(item => item.gender == "Male")
        };
        if(filterSpecilist){
            temp++;
            tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSpecilist)
        }
        if(filterHospital){
            temp++;
            tempData = tempData.filter(item =>  item.hospital && item.hospital.id  == filterHospital)
        }
        if(filterSymptom){
            temp++;
            tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSymptom)
        }
  
        setCountFilter(temp)
        setblog(tempData)  
        setFilterBtnhospital("display__none")   
        setFilterBtn("display__none")
        setFilterBtnsymptom("display__none")
        
        if(synId==11&& tempId){
            fulterBySpecialist(tempData)
        }
        else if(Array.isArray(synId)&& tempId){
            fulterBySymptom(tempData)
        }
        else if(synId && tempId){
            fulterBySpecialist(tempData)
        }        
    }

    function filterGreater500(){
        let tempData = allData
        tempData = tempData.filter(item => item.fee > 500)
        setLess200(false);
        setGreater500(true)
        setLess500(false);
        var temp = 1;
        if(symptomFilter) temp+=1;
        if(specialitiesFilter) {
            tempData = tempData.filter(item => item.specialist && item.specialist.id  == specialitiesFilter)              
            temp++;
        }
        if(femaleFilter){
            temp++;
            tempData = tempData.filter(item => item.gender == "Female")
        }
        if(maleFilter) {
            temp++;
            tempData = tempData.filter(item => item.gender == "Male")
        };
        if(filterSpecilist){
            temp++;
            tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSpecilist)
        }
        if(filterHospital){
            temp++;
            tempData = tempData.filter(item =>  item.hospital && item.hospital.id  == filterHospital)
        }
        if(filterSymptom){
            temp++;
            tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSymptom)
        }
  
        setCountFilter(temp)
        setblog(tempData)  
        setFilterBtnhospital("display__none")   
        setFilterBtn("display__none") 
        setFilterBtnsymptom("display__none")    
        
        if(synId==11&& tempId){
            fulterBySpecialist(tempData)
        }
        else if(Array.isArray(synId)&& tempId){
            fulterBySymptom(tempData)
        }
        else if(synId && tempId){
            fulterBySpecialist(tempData)
        }      
        
    }
    const [filterBtn,setFilterBtn] = useState("display__none")
    const [filterBtnSpecilist,setFilterBtnSpecilist] = useState("Specilities")
    const [filterBtnHospital,setFilterBtnHospital] = useState("Hospital")
    const [filterBtnhospital,setFilterBtnhospital] = useState("display__none")

    
        function onchangeFun(name,idd){
            setFilterBtnSpecilist(name)
            setFilterBtn("display__none") 

            let tempData = allData
            tempData = tempData.filter(item => item.specialist && item.specialist.id  == idd)              
            var temp = 1;
            if(symptomFilter) temp+=1;
            if(specialitiesFilter) {
                tempData = tempData.filter(item => item.specialist && item.specialist.id  == specialitiesFilter)              
                temp++;
            }
            if(less500){
                temp++;
                tempData = tempData.filter(item => item.fee <= 500 && item.fee>=200)
              }
            if(less200){
                temp++;
                tempData = tempData.filter(item => item.fee < 200)
              }
            if(greater500){
              temp++;
              tempData = tempData.filter(item => item.fee > 500)
            }
            if(femaleFilter){
                temp++;
                tempData = tempData.filter(item => item.gender == "Female")
            }
            if(maleFilter) {
                temp++;
                tempData = tempData.filter(item => item.gender == "Male")
            };
            if(filterHospital){
                temp++;
                tempData = tempData.filter(item =>  item.hospital && item.hospital.id  == filterHospital)
            }
            if(filterSymptom){
                temp++;
                tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSymptom)
            }
      

            setCountFilter(temp)  
            setSpecialitiesFilter(idd)   
            setFilterSpecilist(idd)         
            setblog(tempData);            
        }
        function filterBtnFun(){
            if(filterBtn == "display__none")
                setFilterBtn("dropdown__menu")
            if(filterBtn == "dropdown__menu")
                setFilterBtn("display__none")   
                
            setFilterBtnhospital("display__none")
            setFilterBtnsymptom("display__none")     
        }

        function onchangeFunHospital(name,idd){
            setFilterBtnHospital(name)
            setFilterBtnhospital("display__none") 
            
            let tempData = allData
            tempData = tempData.filter(item => item.hospital && item.hospital.id == idd)      
            var temp = 1;
            if(symptomFilter) temp+=1;
            if(specialitiesFilter) {
                tempData = tempData.filter(item => item.specialist && item.specialist.id  == specialitiesFilter)              
                temp++;
            }
            if(less500){
                temp++;
                tempData = tempData.filter(item => item.fee <= 500 && item.fee>=200)
              }
            if(less200){
                temp++;
                tempData = tempData.filter(item => item.fee < 200)
              }
            if(greater500){
              temp++;
              tempData = tempData.filter(item => item.fee > 500)
            }
            if(femaleFilter){
                temp++;
                tempData = tempData.filter(item => item.gender == "Female")
            }
            if(maleFilter) {
                temp++;
                tempData = tempData.filter(item => item.gender == "Male")
            }
            if(filterSymptom){
                temp++;
                tempData = tempData.filter(item =>  item.specialist && item.specialist.id  == filterSymptom)
            }
            setCountFilter(temp)
            setFilterHospital(idd)            
            setblog(tempData); 
            
            if(synId==11&& tempId){
                fulterBySpecialist(tempData)
            }
            else if(Array.isArray(synId)&& tempId){
                fulterBySymptom(tempData)
            }
            else if(synId && tempId){
                fulterBySpecialist(tempData)
            }   
        }

        function filterBtnFunHospital(){
            if(filterBtnhospital == "display__none")
                setFilterBtnhospital("dropdown__menu")
            if(filterBtnhospital == "dropdown__menu")
                setFilterBtnhospital("display__none")  
            
                setFilterBtn("display__none") 
                setFilterBtnsymptom("display__none") 
        }


        // const [filterBtnSymptom,setFilterBtnSymptom] = useState("Common Symptom")
        const [filterBtnsymptom,setFilterBtnsymptom] = useState("display__none")

        function onchangeFunSypmtom(name,idd){
            setFilterBtnSymptom(name)
            setFilterBtnsymptom("display__none") 

            
            let tempData = allData
            tempData = tempData.filter(item => item.specialist && item.specialist.id == idd)      
            var temp = 1;
            if(symptomFilter) temp+=1;
            if(specialitiesFilter) {
                tempData = tempData.filter(item => item.specialist && item.specialist.id  == specialitiesFilter)              
                temp++;
            }
            if(less500){
                temp++;
                tempData = tempData.filter(item => item.fee <= 500 && item.fee>=200)
              }
            if(less200){
                temp++;
                tempData = tempData.filter(item => item.fee < 200)
              }
            if(greater500){
              temp++;
              tempData = tempData.filter(item => item.fee > 500)
            }
            if(femaleFilter){
                temp++;
                tempData = tempData.filter(item => item.gender == "Female")
            }
            if(maleFilter) {
                temp++;
                tempData = tempData.filter(item => item.gender == "Male")
            };
            if(filterHospital){
                temp++;
                tempData = tempData.filter(item =>  item.hospital && item.hospital.id  == filterHospital)
            }
            setFilterSymptom(idd)
            setCountFilter(temp)          
            setblog(tempData);  
        }
        function filterBtnFunSymptom(){
            if(filterBtnsymptom == "display__none")
                setFilterBtnsymptom("dropdown__menu")
            if(filterBtnsymptom == "dropdown__menu")
                setFilterBtnsymptom("display__none")  
            
                setFilterBtn("display__none") 
                setFilterBtnhospital("display__none")  
        }
        
        
    if(specilities && blog && symptom && hospital)
    return (
        <>
        <Navbar />
            

            {/* Start Blog Area */}
            <section className="doctor-list-page ptb-100">
                <div className="container">
                    <div className="row count__doctor d-flex mb-5">
                        <div>
                            {
                                blog?<h4 className="mb-4 mt-4">{blog.length} Doctors available</h4>: null
                            }
                        </div>
                       
                        <div className="filter__area">

                            <div class="dropdown d-flex pl-3">
                                <div className="mr-2">
                                    <button class="btn common__filter__btn" onClick={filterBtnFun}>
                                        {filterBtnSpecilist} <i class="ml-2 fas fa-angle-down"></i>
                                    </button>
                                    <div class={filterBtn}>
                                        {
                                        specilities? specilities.map((item) => {
                                            return(
                                                <button class="dropdown__item" onClick={() => onchangeFun(item.name,item.id)} >{item.name}</button>
                                            )                                    
                                        }):null
                                    }
                                    </div>
                                </div>

                                <div className="mr-2">
                                    <button class="btn common__filter__btn" onClick={filterBtnFunHospital}>
                                        {filterBtnHospital} <i class="ml-2 fas fa-angle-down"></i>
                                    </button>
                                    <div id="hospital_div" class={filterBtnhospital}>
                                        {
                                        hospital? hospital.map((item) => {
                                            return(
                                                item.name?
                                                <button class="dropdown__item" onClick={() => onchangeFunHospital(item.name,item.id)}>{item.name}</button>:null                                                   
                                            )                                
                                        }):null
                                    }
                                    </div>
                                </div>

                            </div>                           
                            
                        </div>
                    </div>
                    <div className="row">
                                    
                        <div id="filter-for-phone" className="col-md-3">
                            <div className="doctor_filter">
                                <div className="filter_header d-flex justify-content-between">
                                    <p>Filters ({countFilter})</p>
                                    <button onClick = {cleareAll}>Clear All</button>
                                </div>
                                <hr />
                                <div className="filter_header">
                                    <p className="mb-4">Gender</p>
                                    {
                                    maleFilter?
                                        <button className="d-flex mb-3" onClick={() => filterMale()}>
                                            <img src={selectedCircle} alt="" />
                                            <p className="blue-color ml-2">Male</p>
                                        </button>:
                                        <button className="d-flex mb-3" onClick={filterMale}>
                                            <img src={initialCircle} alt="" />
                                            <p className="black-color ml-2">Male</p>
                                        </button>
                                    } 
                                    {
                                    femaleFilter?
                                        <button className="d-flex" onClick={filterFemale}>
                                            <img src={selectedCircle} alt="" />
                                            <p className="blue-color ml-2 mb-3">Female</p>
                                        </button>:
                                        <button className="d-flex" onClick={filterFemale}>
                                            <img src={initialCircle} alt="" />
                                            <p className="black-color ml-2 mb-3">Female</p>
                                        </button>
                                    } 
                                </div>
                                <hr />
                                <div className="filter_header">
                                    <p className="mb-4">Fee</p>
                                    {
                                    less200?
                                        <button className="d-flex mb-3" onClick={filterLess200}>
                                            <img src={selectedCircle} alt="" />
                                            <p className="blue-color ml-2">&#60; 200</p>
                                        </button>:
                                        <button className="d-flex mb-3" onClick={filterLess200}>
                                            <img src={initialCircle} alt="" />
                                            <p className="black-color ml-2">&#60; 200</p>
                                        </button>
                                    } 
                                    {
                                    less500?
                                        <button className="d-flex" onClick={filterLess500}>
                                            <img src={selectedCircle} alt="" />
                                            <p className="blue-color ml-2 mb-3">200-500</p>
                                        </button>:
                                        <button className="d-flex" onClick={filterLess500}>
                                            <img src={initialCircle} alt="" />
                                            <p className="black-color ml-2 mb-3">200-500</p>
                                        </button>
                                    } 
                                    {
                                    greater500?
                                        <button className="d-flex" onClick={filterGreater500}>
                                            <img src={selectedCircle} alt="" />
                                            <p className="blue-color ml-2 mb-3">&#62; 500</p>
                                        </button>:
                                        <button className="d-flex" onClick={filterGreater500}>
                                            <img src={initialCircle} alt="" />
                                            <p className="black-color ml-2 mb-3">&#62; 500</p>
                                        </button>
                                    } 
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="row doctor_list">
                                    {blog ?
                                        blog.map((doctor) => {
                                            
                                            return (
                                                <div className="col-md-12 doctor_card">
                                                    <div className="d-flex">
                                                        {
                                                            doctor.file? 
                                                            <img key={doctor.id} src={"https://api-admin.shafa.care/api/v3/auth/publicFile/" + doctor.file.path}  alt="doctor profile"/>:
                                                            <>
                                                                {
                                                                    doctor.gender === "Female" ? 
                                                                    <img src={femaleDocImg} alt = "doctor profile"/>:
                                                                    <img src={maleDocImg} alt = "doctor profile"/>                                                                    
                                                                }
                                                            </>
                                                            
                                                        }
                                                        <div className="doctor_details pl-3">
                                                            <h6>{doctor.name}</h6>
                                                            {
                                                                doctor.specialist?
                                                                <p className="specialist">{doctor.specialist.name}</p>:
                                                                <p className="specialist">Specialist: Not Mentioned</p>
                                                            }
                                                            
                                                            <p className="degree">{doctor.degree}</p>
                                                            <p className="fee">Fees : {doctor.fee} &#2547;</p>
                                                            {
                                                                doctor.hospital?
                                                                <p className="hospital">Hospital: {doctor.hospital.name}</p>:
                                                                <p className="hospital">Hospital: Not Mentioned</p>
                                                            }
                                                            
                                                        </div>                                                        
                                                    </div>
                                                    <hr />
                                                    <div className="d-flex justify-content-between">
                                                        <p>Speaks: {doctor.language}</p>
                                                        <Link href=""><a href="" className="appintment_btn">Book Appointment</a></Link>
                                                    </div>
                                                </div>
                                            )
                                        }) : null
                                    }
                            </div>
                        </div>
                    
                        <div id="filter-for-pc" className="col-md-3">
                            <div className="doctor_filter">
                                <div className="filter_header d-flex justify-content-between">
                                    {/* <p>Filters ({countFilter})</p> */}
                                    <p>Filters</p>
                                    <button onClick = {cleareAll}>Clear All</button>
                                </div>
                                <hr />
                                <div className="filter_header">
                                    <p className="mb-4">Gender</p>
                                    {
                                    maleFilter?
                                        <button className="d-flex mb-3" onClick={() => filterMale()}>
                                            <img src={selectedCircle} alt="" />
                                            <p className="blue-color ml-2">Male</p>
                                        </button>:
                                        <button className="d-flex mb-3" onClick={filterMale}>
                                            <img src={initialCircle} alt="" />
                                            <p className="black-color ml-2">Male</p>
                                        </button>
                                    } 
                                    {
                                    femaleFilter?
                                        <button className="d-flex" onClick={filterFemale}>
                                            <img src={selectedCircle} alt="" />
                                            <p className="blue-color ml-2 mb-3">Female</p>
                                        </button>:
                                        <button className="d-flex" onClick={filterFemale}>
                                            <img src={initialCircle} alt="" />
                                            <p className="black-color ml-2 mb-3">Female</p>
                                        </button>
                                    } 
                                </div>
                                <hr />
                                <div className="filter_header">
                                    <p className="mb-4">Fee</p>
                                    {
                                    less200?
                                        <button className="d-flex mb-3" onClick={filterLess200}>
                                            <img src={selectedCircle} alt="" />
                                            <p className="blue-color ml-2">&#60; 200</p>
                                        </button>:
                                        <button className="d-flex mb-3" onClick={filterLess200}>
                                            <img src={initialCircle} alt="" />
                                            <p className="black-color ml-2">&#60; 200</p>
                                        </button>
                                    } 
                                    {
                                    less500?
                                        <button className="d-flex" onClick={filterLess500}>
                                            <img src={selectedCircle} alt="" />
                                            <p className="blue-color ml-2 mb-3">200-500</p>
                                        </button>:
                                        <button className="d-flex" onClick={filterLess500}>
                                            <img src={initialCircle} alt="" />
                                            <p className="black-color ml-2 mb-3">200-500</p>
                                        </button>
                                    } 
                                    {
                                    greater500?
                                        <button className="d-flex" onClick={filterGreater500}>
                                            <img src={selectedCircle} alt="" />
                                            <p className="blue-color ml-2 mb-3">&#62; 500</p>
                                        </button>:
                                        <button className="d-flex" onClick={filterGreater500}>
                                            <img src={initialCircle} alt="" />
                                            <p className="black-color ml-2 mb-3">&#62; 500</p>
                                        </button>
                                    } 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
            {/* End Blog Area */}
            <Footer />
        </>
    )    
    else return(
        <>

            <div className="pre__loader">
                <img src={loading} alt="loading" />
            </div>
        </>
    )
}
