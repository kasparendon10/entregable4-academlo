import axios from "axios";
import { useState } from "react";


const useCrud = (urlBase) => {
    const [apiData, setApiData] = useState();
    //leer
    const getApi = (path) => {
        axios.get(`${urlBase}${path}/`)
            .then(res => setApiData(res.data))
            .catch(err => console.log(err));
    }
    //crear
    const postApi = (path, data) => {
        axios.post(`${urlBase}${path}/`, data)
            .then(res => {
                setApiData([...apiData, res.data] );
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    const deleteApi = (path, id) => {
        axios.delete(`${urlBase}${path}/${id}/`)
            .then(()=>{
                setApiData(apiData.filter(element => element.id!==id) );
                console.log('se elimino exitosamente');
            })
            .cath(err => console.log(err));
    }
    // update
    const udpadteApi = (path, id, data) => {
        axios.patch(`${urlBase}${path}/${id}/`, data)
            .then(res => {
                setApiData(apiData.map(element => element.id===id? res.data : element ));
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    return [apiData, getApi, postApi, deleteApi, udpadteApi];
}

export default useCrud;