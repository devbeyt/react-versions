import React, { useTransition,useState } from 'react'

function UseTransition() {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    function handleClick() {
        startTransition(() => {
           // Mark updates as transitions
            setCount(c => c + 1);
        })
    }
    return (
        <div>
            {isPending && <h1>Loading...</h1>}
            <h1>{count}</h1>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default UseTransition