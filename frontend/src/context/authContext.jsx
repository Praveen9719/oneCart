import React, { createContext } from "react";

// Capitalize context name for consistency
export const AuthDataContext = createContext();

function AuthContext({ children }) {
  const serverUrl = "https://onecart-backend-9953.onrender.com";

  const value = {
    serverUrl,
  };

  return (
    <AuthDataContext.Provider value={value}>
      {children}
    </AuthDataContext.Provider>
  );
}

export default AuthContext;
