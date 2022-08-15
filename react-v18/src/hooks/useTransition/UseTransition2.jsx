import React,{useTransition,useEffect, useState} from 'react'
import Comments from './Comments';

const filterBySearch = (entities,search)=>entities.filter(item=>item.name.concat(item.body).includes(search))


function UseTransition2() {
    const [isPending, startTransition] = useTransition();
    const [comments,setComments] = useState([])
    const [search,setSearch] = useState('')

    const handleChange = (e)=>{
        startTransition(()=>{
            setSearch(e.target.value)
        })
    }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments`).then(res=>res.json().then(setComments))
    },[])
     
    
  return (
    <div>
        <input type="text"  onChange={handleChange}/>
        {isPending && <p>Updating List...</p>}
         <Comments entities={filterBySearch(comments,search)}/>
    </div>
  )
}

export default UseTransition2