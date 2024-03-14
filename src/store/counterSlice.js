import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
    besArttir : state => {
        state.count +=5
    }
  }
})
export const { increment, decrement, incrementByAmount,besArttir } = counterSlice.actions

export default counterSlice.reducer

//DAHA SONRA STORE.JS SAYFASINA İMPORT EDERİZ ve REDUCER'IN İÇİNİ DOLDURURUZ