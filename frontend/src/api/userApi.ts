const BASE_URL='http://localhost:3000'

export const fetchUser = async ()=>{
    const response = await fetch(`${BASE_URL}/getUser`,{
        credentials:"include"
    })
    const data= await response.json();

    if(!response.ok){
        throw new Error(data.message || "couldn't find user");
    }
    return data;
}