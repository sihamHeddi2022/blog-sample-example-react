import { useEffect, useState } from "react"

export const  useFetch=(url)=>{
    const [posts,setPosts]=useState(null)
    const [isPending,setisPending] = useState(true)
    const [error,setError] = useState(null)

    useEffect(()=>{
        setTimeout(() => {
          fetch(url)
          .then((res)=>{
            if(!res.ok) throw new Error("error during fetching !!")
            return res.json()
          }) 
          .then((data)=>{
            setPosts(data)
            setisPending(false)
          })
          .catch((err)=>{
           
              console.log(err);
             
              setError(err)
              setisPending(false)
    
          })
        }, 1000);
      
  
  
  
       },[])
       return {
        posts,isPending,error,setPosts
       }
}