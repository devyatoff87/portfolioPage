import React from 'react'

function UseCallback() {
    const [count, setCount] = React.useState(0)
    const [data, setData] = React.useState(null)
    const countHandler = () => {
        let res = heavyF()
        setCount(res)
    }

    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(resp => resp.json())
            .then(data => setData(data))
            .catch(err => console.log(err))
    }, [])

    const heavyF = React.useCallback(() => {
        let a = 0;
        console.log("heavy function worked");
        for (let i = 0; i < 1000; i++) {
            for (let k = 0; k < 1000; k++) {
                a += i + k
                let data = new Date().getDate
            }
        }
        return a
    }, [])

    React.useEffect(() => {
        console.log("from log effect: ", data, count);
    })


    return (
        <>
            <div>{count}</div>
            <button onClick={countHandler}>Press</button>
        </>
    )
}

export default UseCallback