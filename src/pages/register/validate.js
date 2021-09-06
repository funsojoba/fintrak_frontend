import * as Yup from 'yup'

const validate = Yup.object({
    first_name: Yup.string().min(2, 'Ensure first name is longer than 2 characters').required('Please enter your first name'),
    last_name: Yup.string().min(2, 'Ensure last is longer than 2 characters').required('Please enter your last name'),
    email: Yup.string().email('Please make sure your email is valid').required('Please enter a valid email'),
    password: Yup.string().min(6, 'Password must not be less than 6 characters').required('Please enter a password'),
    confirm_password: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
})

export default validate