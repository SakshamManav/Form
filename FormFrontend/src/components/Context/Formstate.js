import React, { useEffect,useState } from "react";
import FormContext from "./Formcontext";

export default function Formstate(props) {
  const [login, setLogin] = useState(false);
  async function createUser(name, email, password, address, gender) {
    let response = await fetch("https://form-phi-liard.vercel.app/form/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:name,
        email:email, 
        password:password,
        gender:gender,
        address:address,
      }),
    });
    let result = await response.json();
    console.log(result.msg);
     if(result.msg === "Saved successfully"){setLogin(true)};
  }
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    gender: "",
  });

  
  return (
    <div>
      <FormContext.Provider value={{login, setLogin, createUser, data, setData }}>
        {props.children}
      </FormContext.Provider>
    </div>
  );
}
