import React, { useEffect, useState } from 'react'

const Response = () => {
    const [response, setResponse] = useState("")

    useEffect(() => {
        async function getResponse() {
            try {
              const response = await fetch(
                `http://localhost:5000/`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
      
              const result = await response.json();
              console.log(JSON.stringify(result));
              setResponse(JSON.stringify(result));
            } catch (error) {
              console.log(error.message);
            }
          }
          getResponse();
    }, [])
    

    

  return (
    <div>
    
        Response is : <span style={{color:"red"}}>{response}</span>
    </div>
  )
}

export default Response

