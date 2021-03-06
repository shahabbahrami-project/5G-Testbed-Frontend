import Axios from 'axios'


export const getAxiosInstanceAuth = () => {
    return Axios.create({
        baseURL: "http://127.0.0.1:8005/",
        headers: {
            "Content-Type": "application/json",
        }
    });
};

export const getAxiosInstanceTestBedApi = () => {
    const token=localStorage.getItem('id_token')
    return Axios.create({
        baseURL: "http://127.0.0.1:8005/",
        headers: {
            Authorization: `Token ${token}`,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        }
    });
};


export const getAxiosInstanceApi = () => {
    const token=localStorage.getItem('id_token')
    return Axios.create({
        baseURL: "http://api.currentproject.ir/",
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        }
    });
};

export const getAxiosInstanceApiExcel = () => {
    const token=localStorage.getItem('id_token')
    return Axios.create({
        baseURL: "http://api.currentproject.ir/",
        responseType: 'arraybuffer',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            
        }
    });
};
export const getAxiosInstanceApiPic = () => {
    const token=localStorage.getItem('id_token')
    return Axios.create({
        baseURL: "http://api.currentproject.ir/",
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "multipart/form-data, text/plain,*/*",
            "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
            
        }
    });
};


// export const getAxiosInstanceApiPic = () => {
//     const token=localStorage.getItem('id_token')
//     console.log(token)
//     return Axios.create({
//         baseURL: "http://api.currentproject.ir/",
//         headers: {
//             Authorization: `Bearer ${token}`,
//             Accept: "multipart/form-data, text/plain,*/*",
//             "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
            
//         }
//     });
// };

