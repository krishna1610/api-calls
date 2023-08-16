import React, { useEffect, useState } from 'react';

const FetchApi = () => {
    const [data, setData]= useState({});

    // useEffect(()=>{
    //     const url = "https://jsonplaceholder.typicode.com/users";
    //     const requestContent = {
    //         method: 'POST',
    //         headers: {'Content-Type' : 'application/json'},
    //         body: JSON.stringify({title: 'React POST Request example'})
    //     }
    //     fetch(url, requestContent)
    //     .then((response)=>{return response.json();})
    //     .then((data)=>{
    //         setData(data);
    //     })
    // },[]);

    useEffect(()=>{
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then((response)=>{return response.json();})
        .then((data)=>{
            setData(data);
        })
    },[]);

    return (<div>
        {data.map((user)=>{
            return <div key={user.id}>
            <div>Krishna Bhadkoliya website:</div>
            <div>Email: {user.email}</div>
            <div>Name: {user.name}</div>
            <div>Phone: {user.phone}</div>
            </div>
        })}
        
       
    </div>);

};

export default FetchApi;