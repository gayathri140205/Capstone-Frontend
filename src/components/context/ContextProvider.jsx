/* eslint-disable react-refresh/only-export-components */


// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from "react";

export const adddata = createContext("");
export const updatedata = createContext("");
export const deldata = createContext("");

// eslint-disable-next-line react/prop-types
const ContextProvider = ({ children }) => {
  const [udata, setUdata] = useState("");
  const [updata, setUPdata] = useState("");
  const [dltdata, setDLTdata] = useState("");

  return (
    <adddata.Provider value={{ udata, setUdata }}>
      <updatedata.Provider value={{ updata, setUPdata }}>
        <deldata.Provider value={{ dltdata, setDLTdata }}>
          {children}
        </deldata.Provider>
      </updatedata.Provider>
    </adddata.Provider>
  );
};

export default ContextProvider;