import { configureStore, createSlice } from 'redux-starter-kit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment(state) {
      return state + 1;
    },
    decrement(state) {
      return state + 1;
    },
    set(_state, { payload: { value } }: { payload: { value: number } }) {
      return value;
    },
  },
});

const { increment, decrement, set } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

console.log(set({ value: 10 }));
console.log(store.getState());
store.dispatch(increment());
console.log(store.getState());
store.dispatch(decrement());
console.log(store.getState());
