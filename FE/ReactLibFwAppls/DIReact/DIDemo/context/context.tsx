import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

// The Provider acts as the "Injector"
export const UserProvider = ({ children, service }) => {
  return (
    <UserContext.Provider value={service}>
      {children}
    </UserContext.Provider>
  );
};