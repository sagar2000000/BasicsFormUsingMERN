import { createContext,useState } from "react";

const userContext = createContext(null);

function StoreContextProvider(props){
  const [userData,setUserData] = useState({});


  const userDataUpload = async ()=>{
    
  }


}