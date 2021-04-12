
const getAdmins= async () =>  {
    let url = `http://ec2-54-209-2-124.compute-1.amazonaws.com:3000/admins`;
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