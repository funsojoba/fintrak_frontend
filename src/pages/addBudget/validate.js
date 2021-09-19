import * as Yup from 'yup'

export const validateIncome = Yup.object({
    amount: Yup.number().required('amount is required'),
    source: Yup.string().required('source is required'),
    description: Yup.string().required('description is required'),
})

export const validateExpense = Yup.object({
    amount: Yup.number().required('amount is required'),
    category: Yup.string().required('category is required'),
    description: Yup.string().required('description is required'),
})

