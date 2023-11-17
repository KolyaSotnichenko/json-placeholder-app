import { useEffect, useState } from "react"

export const useGetUsers = () => {
    const [usersData, setUsersData] = useState([])

    const fetchUsersData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            const data = await response.json()

            setUsersData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsersData()
    },[])

    return {usersData}
}