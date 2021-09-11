import * as Yup from 'yup'

const validate = Yup.object({
    amount:Yup.number().required('amount is required'),
    source:Yup.string().required('Please select income source'),
    description: Yup.string().required('Please input income description'),
    income_date: Yup.date().required("Date is required")
})

export default validate