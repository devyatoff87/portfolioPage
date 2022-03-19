import { useEffect, useState } from "react"

export const useFirstWord = (str) => {

    const [firstWord, setFirstWord] = useState(null)
    const [restOfStr, setRestOfStr] = useState(null)

    useEffect(() => {
        setFirstWord((prev) => {
            prev = str.split(" ")[0]
            return prev
        });
        setRestOfStr((prev) => {
            prev = str.split(" ").slice(1).join(" ");
            return prev
        })
    }, [str])


    return { firstWord, restOfStr }
}