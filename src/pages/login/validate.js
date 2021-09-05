import * as Yup from 'yup'

const validate = Yup.object({
    email: Yup.string().email('Please make sure your email is valid').required('Please enter a valid email'),
    password: Yup.string().min(6, 'Password must not be less than 6 characters').required('Please enter a password'),
})

export default validate