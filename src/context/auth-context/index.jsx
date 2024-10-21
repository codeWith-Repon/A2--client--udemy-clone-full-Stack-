import { initalSignInFormData, initalSignUpFormData } from "@/config";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [signInFormData, setSignInFormData] = useState(initalSignInFormData);
  const [signUpFormData, setSignUpFormData] = useState(initalSignUpFormData);

  return (
    <AuthContext.Provider
      value={{
        signInFormData,
        setSignInFormData,
        signUpFormData,
        setSignUpFormData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
