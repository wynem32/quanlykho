import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [
            { productName: 'Áo thun', productCode: '0000001', image: '',dateCreated: '2022/05/02', tags: ['Áo', 'Mùa hè'], inventoryNumber: '200', price: '200000' },
            { productName: 'Quần Jean', productCode: '0000002', image: '',dateCreated: '2022/05/02', tags: ['Quần'], inventoryNumber: '200', price: '200000' },
            { productName: 'Áo khoác bông', productCode: '0000003', image: '',dateCreated: '2022/05/02', tags: ['Áo khoác', 'Mùa đông'], inventoryNumber: '200', price: '200000' },            
        ]
    },reducers: {
        addProduct: (state, action) => {
            state.data.push(action.payload)
        },
        deleteProduct: (state, action) => {
            const deleteProductCode = action.payload
            state.data = state.data.filter(item => item.productCode !== deleteProductCode)
        },
        updateProduct: (state, action) => {
            const newData = action.payload
            state.data.map(item => {
                if (item.productCode === newData.oldProductCode) {
                    item.productName = newData.productName
                    item.productCode = newData.productCode
                    item.dateCreated = newData.dateCreated
                    item.tags = newData.tags
                    item.inventoryNumber = newData.inventoryNumber
                    item.price = newData.price
                }
            })
        }
    }
})

const { actions, reducer } = productSlice
export const { addProduct, deleteProduct, updateProduct } = actions
export default reducer