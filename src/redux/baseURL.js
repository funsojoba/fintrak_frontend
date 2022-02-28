let BASEURL = ""

if(process.env.NODE_ENV === "development"){
    BASEURL = "http://127.0.0.1:8000/"
}else if(process.env.NODE_ENV === "production"){
    BASEURL = "https://fintrak-app.herokuapp.com/"
    
}

export default BASEURL