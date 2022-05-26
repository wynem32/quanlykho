import { createSlice } from "@reduxjs/toolkit";

const staffSlice = createSlice({
    name: 'staff',
    initialState: {
        data: [
            { staffName: 'Phạm Tất Thành', staffCode: 'A32600', position: 'nô lệ', dateJoining: '01/01/2022'}
        ]
    },
    reducers: {
        addStaff: (state, action) => {
            state.data.push(action.payload)
        },
        deleteStaff: (state, action) => {
            const deleteStaffCode = action.payload
            state.data = state.data.filter(item => item.staffCode !== deleteStaffCode)
        },
        updateStaff: (state, action) => {
            const newData = action.payload
            state.data.map(item => {
                if (item.staffCode === newData.oldstaffCode) {
                    item.staffName = newData.staffName
                    item.staffCode = newData.staffCode
                    item.position = newData.position
                    item.dateJoining = newData.dateJoining
                }
            })
        }
    }
})

const { actions, reducer } = staffSlice
export const { addStaff, deleteStaff, updateStaff } = actions
export default reducer