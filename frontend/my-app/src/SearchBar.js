import React, { useEffect, useState } from "react";
import axios from "axios"

function SearchBar(){

    const[query, setQuery] = useState("");
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchUsers = async () =>{
            const res = await axios.get(`http://localhost:8800?q=${query}`)
            setData(res.data)
        }
        if (query.length === 0 || query.length>1) fetchUsers();
    },[query]);
    
    return(
        <div>
            <input placeholder="Search for College" onChange={(e) => setQuery(e.target.value)} />

            {data.map(function(item){
                return(
                    <h2>{item}</h2>
                )
            })}
        </div>
    )
}

export default SearchBar