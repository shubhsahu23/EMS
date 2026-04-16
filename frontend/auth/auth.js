import API from "../api/axios";

export const login=async (data)=>{
    const form=new URLSearchParams();
    form .append("username",data.email);
    form .append("password",data.password);

    const res=await API.post("/login",form);
    localStorage.setItem("token",res.data);
    return res.data;
}

export const register=async (data)=>{
    return await API.post("/register",data);
}

export const logout=()=>{
    localStorage.removeItem("token");
}
