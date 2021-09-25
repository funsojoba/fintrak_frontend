import * as Yup from 'yup'

export const validateProfile = Yup.object({
    amount: Yup.number().required('amount is required'),
    source: Yup.string().required('source is required'),
    description: Yup.string().required('description is required'),
    income_date: Yup.date().required("date is required")
})

export const validatePassword = Yup.object({
    current_password: Yup.string().min(8, 'Password must be more than 8 characters').required("Please provide your correct current password"),
    new_password: Yup.string().min(8, 'Password must be more than 8 characters').required("New password is required"),
})