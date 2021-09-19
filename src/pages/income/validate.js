import * as Yup from 'yup'

const validate = Yup.object({
    amount:Yup.number().required('amount is required'),
    source:Yup.string().required('source is required'),
    description: Yup.string().required('description is required'),
    income_date: Yup.date().required("date is required")
})

export default validate