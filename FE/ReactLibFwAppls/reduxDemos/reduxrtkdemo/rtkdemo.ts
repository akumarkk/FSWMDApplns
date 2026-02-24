import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
});

console.log("counterSlice ", counterSlice );

console.log('Initial state:', store.getState());
store.dispatch(counterSlice.actions.increment());
console.log('State after increment:', store.getState());