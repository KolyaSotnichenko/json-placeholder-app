import { useState, useEffect } from "react"

export const useGetAlbums = (id) =>{
    const [albumsData, setAlbumsData] = useState([])

    const fetchAlbumsData = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)

            const data = await response.json()

            setAlbumsData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAlbumsData()
    },[])

    return {albumsData}
}