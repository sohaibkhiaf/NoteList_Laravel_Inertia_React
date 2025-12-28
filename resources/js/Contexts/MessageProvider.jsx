import { createContext, useContext, useState } from "react";

const MessageContext = createContext();

export function MessageProvider({ children }) {
  const [warning, setWarning] = useState(null);
  const [normal, setNormal] = useState(null);

  const showWarning = (message) => setWarning(message);
  const clearWarning = () => setWarning(null);

    const showNormal = (message) => {setNormal(message);
            console.log("provider")
        console.log(message)
    }

  const clearNormal = () => setNormal(null);

  return (
    <MessageContext.Provider value={{ warning, showWarning, clearWarning,
        normal, showNormal, clearNormal,
     }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  return useContext(MessageContext);
}
