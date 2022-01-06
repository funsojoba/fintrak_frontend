const headers = token =>{
    return {
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'Authorization': 'Bearer ' + token
        }
    }
}

export const fileHeader = token =>{
    return {
        headers:{
            'Content-Type': 'application/octet-stream',
            'Content-Disposition': 'attachment',
            'Authorization': 'Bearer ' + token
        }
    }
}

export default headers