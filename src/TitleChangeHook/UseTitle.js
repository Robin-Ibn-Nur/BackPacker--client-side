import { useEffect } from "react"

const UseTitle = title => {
    useEffect(() => {
        document.title = `BackPacker - ${title}`
    }, [title])
}

export default UseTitle;