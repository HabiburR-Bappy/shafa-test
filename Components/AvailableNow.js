import { useState, useEffect } from 'react'
import defaultImg from '../public/assets/img/team/default-team.png'

export default function BlogItem({ data }) {

    const [activeDoctor, setActiveDoctor] = useState(false)
    const [countDown, setCountdown] = useState()

    var startTime = data.doctor_schedules[0].startTime

    var startHour = parseInt(startTime.slice(0, 2))
    var startMinute = parseInt(startTime.slice(3, 5))
    var startSeconds = parseInt(startTime.slice(6, 8))

    var endTime = data.doctor_schedules[0].endTime

    var endHour = parseInt(endTime.slice(0, 2))
    var endMinute = parseInt(endTime.slice(3, 5))
    var endSeconds = parseInt(endTime.slice(6, 8))

    var today = new Date();
    var currentHour = parseInt(today.getHours());
    var currentMinute = parseInt(today.getMinutes());
    var currentSecond = parseInt(today.getSeconds());

    function doctorOnlineStatus() {
        if (currentHour > startHour
            && currentHour < endHour) setActiveDoctor(true)

        else if (currentHour == startHour && currentMinute > startMinute
            && currentHour < endHour) setActiveDoctor(true)

        else if (currentHour == startHour && currentMinute == startMinute && currentSecond <= startSeconds
            && currentHour < endHour) setActiveDoctor(true)

        else if (currentHour > startHour
            && currentHour == endHour && currentMinute < endMinute) setActiveDoctor(true)

        else if (currentHour == startHour && currentMinute > startMinute
            && currentHour == endHour && currentMinute < endMinute) setActiveDoctor(true)

        else if (currentHour == startHour && currentMinute == startMinute && currentSecond <= startSeconds
            && currentHour == endHour && currentMinute < endMinute) setActiveDoctor(true)

        else if (currentHour > startHour
            && currentHour == endHour && currentMinute == endMinute && currentSecond <= endSeconds) setActiveDoctor(true)

        else if (currentHour == startHour && currentMinute > startMinute
            && currentHour == endHour && currentMinute == endMinute && currentSecond <= endSeconds) setActiveDoctor(true)

        else if (currentHour == startHour && currentMinute == startMinute && currentSecond <= startSeconds
            && currentHour == endHour && currentMinute == endMinute && currentSecond <= endSeconds) setActiveDoctor(true)

        else {
            setActiveDoctor(false)
            setCountdownFunction()
        }
    }

    function setCountdownFunction() {

        var tempHour = startHour - currentHour
        var tempMinute = startMinute - currentMinute
        var tempSecond = startSeconds - currentSecond

        console.log(tempHour, "  first ", tempMinute, " ", tempSecond)

        if ((startHour < currentHour)
            || (startHour == currentHour && startMinute < currentMinute)
            || (startHour == currentHour && startMinute == currentMinute && startSeconds < currentSecond)) tempHour += 24;
        console.log(tempHour, "  secont ", tempMinute, " ", tempSecond)

        function countDownFun() {

            if (tempSecond < 0) {
                tempSecond += 60;
                tempMinute--;
            }
            if (tempMinute < 0) {
                tempMinute += 60;
                tempHour--;
            }

            var tempTime = (("0" + tempHour.toString()).slice(-2) + " : " + ("0" + tempMinute.toString()).slice(-2) + " : " + ("0" + tempSecond.toString()).slice(-2)).toString()

            tempSecond--;
            setCountdown(tempTime)

            if (tempHour >= 0) setTimeout(countDownFun, 1000);
            else setActiveDoctor(true)

        }
        countDownFun()
    }

    useEffect(() => {
        doctorOnlineStatus();
    })



    console.log("start ", startTime, "  ", startHour, "  ", startMinute, "  ", startSeconds, "  ")
    console.log("end", endTime, "  ", endHour, "  ", endMinute, "  ", endSeconds, "  ", currentHour)

    return (
        <div className="single-available-doctor d-flex flex-column">
            {
                data.file ?
                    <img src={"https://api-admin.shafa.care/api/v3/auth/publicFile/" + data.file.path} alt="avatar" />
                    :
                    <img src={defaultImg} alt="avatar" />
            }
            <h5>{data.name}</h5>
            <p>{data.specialist.name}</p>
            {
                activeDoctor ?
                    <div className="d-flex available-time bg-green"><p>Online</p></div>
                    :
                    <div className="d-flex available-time bg-gray"><p>{countDown}</p></div>
            }

        </div>
    )
}