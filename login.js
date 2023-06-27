async function login(loginData){
    const response = await fetch("http://localhost:3500/login",{
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });
    console.log('response status: ', response.status);
    const data = await response.json();
    console.log('received data: ', data)
    const payloadJson = atob(data.accessToken.split('.')[1])
    const userData = JSON.parse(payloadJson);
    const email = userData.email;
    const role = userData.sub;
    console.log("user Data", `email: ${email}, role: ${role}`)
}   

login({email: "admin@co.il" , password: "admin1234"})

