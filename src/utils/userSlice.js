import { createSlice } from '@reduxjs/toolkit';

// What is Reducer????
// ******* Remember from LWS? a reducer takes a function (initial state), does something (action) & return a new function (new or updated state)

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    // In reducer, we'll add different types of functions
    // As soon as a user login, this "reducer" function "addUser" will be dispatched i.e. we'll "add the user to the redux store" just after login

    // according to the definition of reducer, addUser action (user er login) nibe, tarpor amra oi action er payload i.e. user er info return krbo
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      // user logout korle, null return krbo
      return null;
    },
  }
})

// export actions
export const { addUser, removeUser } = userSlice.actions;

// export reducer
export default userSlice.reducer;