import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import React, { Component, useState, useEffect } from 'react';
import { applyDoctor } from '../Components/HttpPostRequest'
import Select from 'react-select';
import axios from '../authAxios'


function Contact() {

    const getHospitalList = async () => {
        return await axios.post('hospital/public/list')
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

    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        if (loadingData) {
            getHospitalList().then(res => {
                console.log("res", res)
                var temp = [
                    {
                        value: '',
                        label: ''
                    }
                ]
                res.map(item => {
                    temp.push({ value: item.id, label: item.name })
                })
                setHospitalList(temp)

            }).catch((err) => { console.log(err) });


            getSpecilistLists().then(res => {
                console.log("res", res)
                var temp = [
                    {
                        value: '',
                        label: ''
                    }
                ]
                res.map(item => {
                    temp.push({ value: item.id, label: item.name })
                })
                setSpecialistLists(temp)

            }).catch((err) => { console.log(err) });
        }
    }, []);

    const [HospitalLists, setHospitalList] = useState([])
    const [specialistLists, setSpecialistLists] = useState([])

    var languageValues = [
        { value: "Bangla", label: "Bangla" },
        { value: "English", label: "English" },
        { value: "Hindi", label: "Hindi" }
    ]

    const [name, setName] = useState()
    const [regNo, setRegNo] = useState()
    const [education, setEducation] = useState()
    const [degree, setDegree] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [confirm, setConfirm] = useState()
    const [practicing, setPracticing] = useState()
    const [fee, setFee] = useState()
    const [institute, setInstitute] = useState()
    const [gender, setGender] = useState()
    const [dateOfBirth, setDateOfBirth] = useState()
    const [designation, setDesignation] = useState()
    const [department, setDepartment] = useState()
    const [nid, setNid] = useState()
    const [specialist, setSpecialist] = useState([])
    const [additional, setAdditional] = useState()
    const [hospital, setHospital] = useState()
    const [avatar, setAvatar] = useState()
    const [language, setLanguage] = useState([])
    const [start, setStart] = useState()
    const [end, setEnd] = useState([])
    const[nidFileIdFront,setNidFileIdFront] = useState()
    const[nidFileIdBack,setNidFileIdBack] = useState()

    const [passMsg, setPassMsg] = useState("d-none")

    function resetForm(){
        setNidFileIdBack("")
        setNidFileIdFront("")
        setEnd("")
        setStart("")
        setLanguage([])
        setAvatar("")
        setHospital("")
        setAdditional("")
        setSpecialist("")
        setNid("")
        setDepartment("")
        setDesignation("")
        setDateOfBirth("")
        setGender("")
        setInstitute("")
        setFee("")
        setPracticing("")
        setConfirm("")
        setPassword("")
        setPhone("")
        setEmail("")
        setDegree("")
        setEducation("")
        setRegNo("")
        setName("")
        setOtpData("")
    }

    function languageHandleChange(value) {
        var tempLanguage = []
        value.map((item) => {
            tempLanguage.push(item.value)
        })
        setLanguage(tempLanguage);
    }

    function hospitalHandleChange(value) {
        setHospital(value);
    }
    function specialistHandleChange(value) {
        setSpecialist(value);
    }
const [finalStatus,setFinalStatus] = useState("d-none")
    function showStatus(){
        var sec = 6
        function setShowTime(){
            setFinalStatus("d-block")
            sec--
            if(sec>0) setTimeout(setShowTime, 1000);
            else setFinalStatus("d-none")
        }
        setShowTime()
        setFinalStatus("d-none")
    }

    function mySubmitHandler(e) {
        if (password == confirm) {

            setPassMsg('d-none')
            if(specialist && hospital){
            let body = {
                name: name,
                bmdcRegNo: regNo,
                education: education,
                degree: degree,
                password: password,
                phone:phone,
                confirmPassword: confirm,
                nIdPassport:nid,
                practicingSince: practicing,
                fee: fee,
                institute: institute,
                gender: gender,
                dateOfBirth: dateOfBirth,
                designation: designation,
                department: department,
                additionalSpeciality: additional,
                specialistId: specialist.value,
                hospitalId: hospital.value,
                email:email,
                language: language,
                startTime: start,
                endTime: end,
                online: 1,
                otp:otpData,
                followUpDuration:30,
                followUpDiscount:50,
                status:1,


                nidFileIdFront:1,
                nidFileIdBack:1,
                fileId:1,
            }
        
            console.log(body)
            applyDoctor(body).then(res => {
                console.log("eeeeeeeeeeeeeee",res.status)
                if(res.status == 200) {
                    setSubmitSMS(1)
                    resetForm()
                }
                else setSubmitSMS(0)
               
                showStatus()
            }).catch(err => {
                console.log("ERROR", err);
            })

        }
    }
        else {
            setPassMsg('d-block')
        }
    }
    
    const getOtpData = async () => {
        return await axios
          .post("doctor/isExist",{phone:phone})
          .then((response) => {
            let status = "status" in response;
            if (!status) {
              response.status = 401;
              return response;
            }
            return response.data;
          })
          .catch((err) => {
            console.log(err);
            return [];
          });
      };
    const [submitSMS,setSubmitSMS] = useState(-1)
    const [sec, setSec] = useState("");
    const [notification, setNotification] = useState()
    const [otpBtnClass, setOtpBtnClass] = useState("otp_btn_show")
    const [otpData,setOtpData] = useState()
    function phonenumber(inputtxt) {

        if (inputtxt[0] == "0" && inputtxt[1] == '1' && inputtxt.length == 11) {
            return true;
        }
        else {
            return false;
        }
    }
    function setTimeInterval() {
        var temp = true
        if (phone) {
            if (phonenumber(phone)) {
                let second = 61
                setNotification("")
                setOtpBtnClass("otp_btn_hide")
                function countDown() {
                    if (temp) {
                        temp = false;

                        getOtpData().then(res => {
                            if(!res.success){
                                setNotification("User already exist")
                                second = -2
                                setOtpBtnClass("otp_btn_show")
                                console.log("sec1",second)
                            }

                        }).catch((err) => { console.log(err) });
                    }
                    if(second<0) setSec("")
                    else setSec(second)
                    second--
                    if (second < 1) setOtpBtnClass("otp_btn_show")

                    if (second > 0) setTimeout(countDown, 1000);
                
                }

                countDown()
            }
            else {
                setNotification("Phone No. is incorrect")
            }
        }
        else {
            setNotification("Phone No. Eempty")
        }

    }


    return (
        <>
            <Navbar />

            {/* Start Contact Area */}
            <section className="contact-area pt-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Doctor Registration form</h2>

                    </div>

                    <div className="contact-form registration">
                        <form id="contactForm"  className="contact-form" onSubmit={mySubmitHandler}>
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Name <span className="text-danger">*</span></label>
                                        <input value={name} onInput={e => setName(e.target.value)} type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Name" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">BMDC Registration No. <span className="text-danger">*</span></label>
                                        <input value={regNo} onInput={e => setRegNo(e.target.value)} type="text" name="bmdc" id="bmdc" className="form-control" required data-error="Enter your BMDC Registration No" placeholder=" BMDC Registration No" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Education <span className="text-danger">*</span></label>
                                        <input value={education} onInput={e => setEducation(e.target.value)} type="text" name="education" id="education" className="form-control" required data-error="Please enter your Education" placeholder="Education" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Degree <span className="text-danger">*</span></label>
                                        <input value={degree} onInput={e => setDegree(e.target.value)} type="text" name="degree" id="degree" required data-error="Please enter your degree" className="form-control" placeholder="Degree" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Email <span className="text-danger">*</span></label>
                                        <input value={email} onInput={e => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control" required data-error="Please enter your Email" placeholder="Email" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Password <span className="text-danger">*</span></label>
                                        <input value={password} onInput={e => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control" required data-error="Please enter a Password" placeholder="Password" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Confirm Password <span className="text-danger">*</span></label>
                                        <input value={confirm} onInput={e => setConfirm(e.target.value)} type="password" name="confirmPassword" id={passMsg} required data-error="Wrong Password" className="form-control" placeholder="Confirm Password" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Practicing Since <span className="text-danger">*</span></label>
                                        <input value={practicing} onInput={e => setPracticing(e.target.value)} type="date" name="practicingSince" id="practicing-since" required data-error="Please enter Practicing Since" className="form-control" placeholder="Practicing Since" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Fee <span className="text-danger">*</span></label>
                                        <input value={fee} onInput={e => setFee(e.target.value)} type="text" name="fee" id="fee" required data-error="Please enter your fee" className="form-control" placeholder="Fee" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Institute <span className="text-danger">*</span></label>
                                        <input value={institute} onInput={e => setInstitute(e.target.value)} type="text" name="institute" id="institute" required data-error="Please enter your Institute" className="form-control" placeholder="Institute" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>



                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Gender <span className="text-danger">*</span></label>
                                        <input value={gender} onInput={e => setGender(e.target.value)} type="text" name="gender" id="gender" className="form-control" required data-error="Please enter your gender" placeholder="Gender" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Date Of Birth <span className="text-danger">*</span></label>
                                        <input value={dateOfBirth} onInput={e => setDateOfBirth(e.target.value)} type="date" name="dateOfBirth" className="form-control" id="dateOfBirth" required data-error="Please enter your Birth Date" placeholder="Date Of Birth" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Designation <span className="text-danger">*</span></label>
                                        <input value={designation} onInput={e => setDesignation(e.target.value)} type="text" name="designation" id="designation" className="form-control" required data-error="Please enter your Designation" placeholder="Designation" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Department <span className="text-danger">*</span></label>
                                        <input value={department} onInput={e => setDepartment(e.target.value)} type="text" name="department" id="department" className="form-control" required data-error="Please enter your Department" placeholder="Department" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">NID or Passport Number <span className="text-danger">*</span></label>
                                        <input value={nid} onInput={e => setNid(e.target.value)} type="text" name="NID-Number" id="NID-Number" className="form-control" required data-error="Please enter your NID or Passport Number" placeholder="NID or Passport Number" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Specialist <span className="text-danger">*</span></label>
                                        <Select
                                            placeholder={<div className="d-flex align-items-center"><div className="plaseholder__">- - - Select Specialist - - -</div></div>}
                                            className="w-100 basic-multi-select"
                                            name="specialist"
                                            classNamePrefix="select"
                                            options={specialistLists}
                                            onChange={event => specialistHandleChange(event)}
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Additional Speciality <span className="text-danger">*</span></label>
                                        <input value={additional} onInput={e => setAdditional(e.target.value)} type="text" name="additionalSpeciality" id="additionalSpeciality" className="form-control" required data-error="Please enter your Additional Speciality" placeholder="Additional Speciality" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Hospital <span className="text-danger">*</span></label>
                                        <Select
                                            placeholder={<div className="d-flex align-items-center"><div className="plaseholder__">- - - Select Hospital - - -</div></div>}
                                            className="w-100 basic-multi-select"
                                            name="hospital"
                                            classNamePrefix="select"
                                            options={HospitalLists}
                                            onChange={event => hospitalHandleChange(event)}
                                        />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Language <span className="text-danger">*</span></label>
                                        <Select
                                            placeholder={<div className="d-flex align-items-center"><div className="plaseholder__">- - - Select Languages - - -</div></div>}
                                            className="w-100 basic-multi-select"
                                            name="languages"
                                            classNamePrefix="select"
                                            isMulti
                                            options={languageValues}
                                            onChange={event => languageHandleChange(event)}
                                        />
                                        
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Profile Picture <span className="text-danger">*</span></label>
                                        <input value={avatar} onInput={e => setAvatar(e.target.value)} type="file" name="avatar" id="avatar" className="form-control" required data-error="Profile Picture" placeholder="Profile Picture" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">NID Card Front<span className="text-danger">*</span></label>
                                        <input value={nidFileIdFront} onInput={e => setNidFileIdFront(e.target.value)} type="file" name="nidFileIdFront" id="nidFileIdFront" className="form-control" required data-error="NID Card Front" placeholder="NID Card Front" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">NID Card Back<span className="text-danger">*</span></label>
                                        <input value={nidFileIdBack} onInput={e => setNidFileIdBack(e.target.value)} type="file" name="nidFileIdBack" id="nidFileIdBack" className="form-control" required data-error="NID Card Back" placeholder="NID Card Back" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Appointment Time (Start) <span className="text-danger">*</span></label>
                                        <input value={start} onInput={e => setStart(e.target.value)} type="time" name="startTime" id="start-time" required data-error="Please enter the Time" className="form-control" placeholder="10:30" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-12"></div>

                                <div className="col-lg-3 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Appointment Time (End)<span className="text-danger">*</span></label>
                                        <input value={end} onInput={e => setEnd(e.target.value)} type="time" name="endTime" id="end-time" required data-error="Please enter the Time" className="form-control" placeholder="14:45" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                
                                <div className="col-lg-3 col-md-12"></div>

                                <div className="col-lg-2 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">Phone No. <span className="text-danger">*</span></label>
                                        <input value={phone} onInput={e => setPhone(e.target.value)} type="text" name="phone" id="phone" required data-error="Please enter your Phone No." className="form-control" placeholder="Phone No." />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-12 d-flex align-items-center">
                                    <div className="d-flex send-otp">
                                        <button className={otpBtnClass} type="button" onClick={setTimeInterval}>
                                            Send OTP
                                            <span></span>
                                        </button>
                                    </div>
                                    <div className="countdown d-flex">
                                        <div className="ml-2 mr-2">
                                        {
                                            sec > 1 && sec != 61?
                                                <p>{sec - 1}</p> : null
                                        }
                                        </div>
                                        <div>
                                        {
                                            notification ?
                                                <p className="text-red">{notification}</p> : null
                                        }
                                        </div>

                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-12">
                                    <div className="form-group">
                                        <label className="w-100 text-left  ">OTP<span className="text-danger">*</span></label>
                                        <input value={otpData} onInput={e => setOtpData(e.target.value)} type="text" name="otp" id="end-time" required data-error="Please enter the OTP" className="form-control" placeholder="Please enter the OTP" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 mt-3">
                                    <button className="default-btn">
                                        Registration
                                        <span></span>
                                    </button>
                                    <div className={passMsg} id="wrongPass">Incorrect Password</div>
                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            <div className="apply_download_link mt-5">
                <div className="container">
                    <div className="row pt-70 pb-70">
                        <div className="col-lg-6 col-md-12">
                            <h3 className="title">Download the Shafa Care app</h3>
                            <p>Access video consultation with India’s top doctors on the Practo app. Connect with doctors online, available 24/7, from the comfort of your home.</p>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="app_link d-flex flex-row mt-4">
                                <a href="https://play.google.com/store/apps/details?id=care.shafa.ai.user">
                                    <div><i className="fab fa-google-play"></i> <span>Google Play</span> </div>
                                </a>
                                <a href="">
                                    <div><i className="fab fa-apple"></i> <span>App Store</span> </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className={finalStatus} id="submit_message">
                    {
                        submitSMS == 1?
                        <p className="success">Application submited successfully</p>
                        :null
                    }
                    {
                        submitSMS == 0?
                        <p>Application submited failed</p>:null
                    }
                </div>
            </section>
            {/* End Contact Area */}
            <Footer />
        </>
    )
}

export default Contact;