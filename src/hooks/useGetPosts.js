import { useState, useEffect } from "react"

export const useGetPosts = (id) =>{
    const [postsData, setPostsData] = useState([])

    const fetchPostsData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

            const data = await response.json()

            setPostsData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchPostsData()
    },[])

    return {postsData}
}