const log=async (Stack,Level,Package,message)=>{
    const auth=await fetch('http://20.244.56.144/evaluation-service/auth',{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',},
        body:JSON.stringify({"email":"2215006@nec.edu.in","name":"sivasubramani m","rollNo":"2215006","accessCode":"xsZTTn","clientID":"2110aee9-ad97-4cb8-9550-395e14d9ad58","clientSecret":"GJDrRnKWTjYJcQns"}
)
    });
    const credentials=await auth.json();
    console.log(credentials);
    const token=credentials.access_token;
    const response=await fetch(`http://20.244.56.144/evaluation-service/logs`,{
          method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            body:JSON.stringify({Stack,Level,Package,message})
        })
    
    
    const data=await response.json();
    console.log(data);

}
export default log;