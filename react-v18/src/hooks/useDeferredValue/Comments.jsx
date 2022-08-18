import React,{useDeferredValue} from 'react'

function Comments({entities = []}) {
  const values = useDeferredValue(entities)

    const content = values.map(comment=>{
         
        return <ul key={comment.id}>
            <h2>{comment.name}</h2>
            <li>{comment.body}</li>
        </ul>
    })
  return (
    <div>{content}</div>
  )
}

export default Comments