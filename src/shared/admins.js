
import baseUrl from './baseUrl';

const getAdmins= async () =>  {
    let url = `${baseUrl}/admins`;
        return fetch(url,
        {
            method: "get"
        }).then(res => res.json())                      // the res should convert josn to object
        .then(res => {
            console.log(res);
            return res;
            
        });          // res is the fetch response from server
}

export default getAdmins;