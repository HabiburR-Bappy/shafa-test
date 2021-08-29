import axios from '../authAxios'
import { formData } from '../FormHelper'

export const onSubmit = async (values) => {
    console.log("values", values)
    try {
        return await axios.post('send-message', values)
    } catch (error) {
        return error
    }
}
export const onSubmitEmail = async (values) => {
    console.log("values", values)
    try {
        return await axios.post('send-message', values)
    } catch (error) {
        return error
    }
}
export const onSend = async (values) => {
    console.log("values", values)
    try {
        return await axios.post('send-sms', values)
    } catch (error) {
        return error
    }
}

export const applyDoctor = async (values) => {
    console.log("values", values)
    try {
        return await axios.post('doctor/apply', formData(values))
    } catch (error) {
        return error
    }
}