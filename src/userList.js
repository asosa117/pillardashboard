import { useState, useEffect } from 'react'
import { findAll } from '../src/users.js'
import { findAllMeds } from '../src/users.js'


import UserListItem from '../src/userListItem.js'
import MedListItem from '../src/medListItem.js'

function UserList() {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [meds, setMeds] = useState([])
    


    const fetchData = async () => {
        setLoading(true)

        const res = await findAll()

        setUsers([...res])
        setLoading(false)
    }

    const handleClick = async () => {
        try {
            const data = await findAllMeds()
            setMeds([...data])
        } catch (err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section>
            <header>
                <h2>Users</h2>
            </header>

            { loading && 
                <p>loading...</p>
            }
            <ul>
                {users.length > 0 && users.map(users => (
                    <UserListItem user={users}/>
                ))}
            </ul>
            <div>
                <button type="submit" onClick={handleClick} >Medication</button>
                <ul>
                {meds.length > 0 && meds.map((meds, index) => (
                    <MedListItem med={meds} key={index} id={index}/>
                ))}
                </ul>
            </div>
        </section>
    )
}

export default UserList