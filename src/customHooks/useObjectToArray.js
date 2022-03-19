import { useEffect, useState } from "react";

const useObjectToArray = (obj) => {
    const [arr, setArr] = useState(() => []);

    useEffect(() => {
        let arr_ = [];
        for (const [key, value] of Object.entries(obj)) {
            arr_.push([[key], value])
        }

        setArr((prev) => prev = arr_)
    }, [obj])

    return arr
}

export default useObjectToArray