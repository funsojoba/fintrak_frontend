import * as Yup from 'yup'

const validate = Yup.object({
    amount: Yup.number().required('amount is required'),
    category: Yup.string().required('category is required'),
    description: Yup.string().required('description is required'),
    expense_date: Yup.date().required('date is required')
})

export default validate