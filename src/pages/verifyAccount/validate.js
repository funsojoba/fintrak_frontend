import * as Yup from 'yup'

const validate = Yup.object({

    otp: Yup.string().min(8, 'OTP must not be less than 8 characters').required('Please enter your OTP'),
})

export default validate