import { createContext, useState } from "react";

const LoginContext = createContext();
// this context provider is called login but really it wraps around the
// entire homepage not just the login component. another whack thing is
// that this context is only used for launching a "enter username" modal
// when a user wants to continue with google and their account hasn't been
// created so they need to enter a unique username  for their new account.
// other than that, i dont think this context will have many uses
export function LoginProvider({ children }) {
  const [enterGoogleUsername, setEnterGoogleUsername] = useState(false);
  const [newGoogleUserEmail, setNewGoogleUserEmail] = useState("");

  return (
    <LoginContext.Provider
      value={{
        enterGoogleUsername,
        setEnterGoogleUsername,
        newGoogleUserEmail,
        setNewGoogleUserEmail,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

// export const LoginState = () => {
//   return useContext(LoginContext);
// };

export default LoginContext;
