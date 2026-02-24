import { createSlice, configureStore } from '@reduxjs/toolkit';

// --- Slice 1: User ---
const userSlice = createSlice({
  name: 'user',
  initialState: { name: 'Guest', preferences: { theme: 'light' } },
  reducers: {
    toggleTheme: (state) => {
      state.preferences.theme = state.preferences.theme === 'light' ? 'dark' : 'light';
    }
  }
});

// --- Slice 2: Cart ---
const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], total: 0 },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload.name);
      state.total += action.payload.price;
    }
  }
});

const store = configureStore({
  reducer: {
    userProfile: userSlice.reducer, // This key becomes the state property
    shoppingCart: cartSlice.reducer // This key becomes the state property
  }
});

console.log("cartSlice ", cartSlice );

console.log('Initial state:', store.getState());
const newItem = { name: 'Mechanical Keyboard', price: 150 };

store.dispatch(cartSlice.actions.addItem(newItem));
console.log('State after adding item to cart:', store.getState());