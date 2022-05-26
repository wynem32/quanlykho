import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name:'category',
    initialState: {
        data: [
            { listName: 'Áo', listCode: '1', dateCreated: '01/03/2022', describle: 'quần áo quanh mùa' },
            { listName: 'Quần', listCode: '2', dateCreated: '02/03/2022', describle: 'quần áo quanh mùa' },
            { listName: 'Mùa hè', listCode: '3', dateCreated: '03/03/2022', describle: 'quần áo quanh mùa' },
            { listName: 'Mùa đông', listCode: '4', dateCreated: '04/03/2022', describle: 'quần áo quanh mùa' },
            { listName: 'Mùa thu', listCode: '5', dateCreated: '05/03/2022', describle: 'quần áo quanh mùa' },
            { listName: 'Áo khoác', listCode: '6', dateCreated: '06/03/2022', describle: 'quần áo quanh mùa' }
        ],
        filter: {
            search: '',
            date: ''
        }
    },
    reducers: {
        addCategory: (state, action) => {
            state.data.push(action.payload)
        },
        deleteCategory: (state, action) => {
            const deleteCategoryCode = action.payload
            state.data = state.data.filter(item => item.listCode !== deleteCategoryCode)
        },
        updateCategory: (state, action) => {
            const newData = action.payload
            state.data.map(item => {
                if (item.listCode === newData.oldListCode) {
                    item.listName = newData.listName
                    item.listCode = newData.listCode
                    item.dateCreated = newData.dateCreated
                    item.describle = newData.describle
                }
            })
        },
    }
})

const { actions, reducer } = categorySlice
export const { addCategory, deleteCategory, updateCategory } = actions
export default reducer