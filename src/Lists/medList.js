import { useState} from 'react'
import { findAll } from './users.js'
import { collection, query, getDocs, where} from "firebase/firestore"; 
import { db } from "../firebase";
import "../App.css";


import MedListItem from './medListItem.js'

function MedList() {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    const searchAll = async (e) => {
        const sUsername = query(collection(db, "users"), where ("username", "==", search));
        const doc_refs = await getDocs(sUsername);

        const sea = []
    
        doc_refs.forEach(doc => {
            sea.push({
                id: doc.id, 
                ...doc.data()
            })
        })


        console.log(sea)
        return sea
    }

    const fetchData = async () => {
        setLoading(true)

        var res = await findAll();

        if(search === ""){
            res = await findAll()
        }
        else{
            res = await searchAll()
        }

        setUsers([...res])
        setLoading(false)
    }

    return (
        <body>
            <div id ="Search" className='SearchBar'>
                <input
                    className='SearchInput'
                    type="text"
                    placeholder="Search User"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button onClick={fetchData}>Search</button>
            </div>
            <div className='instruct'>
                Leave search bar blank and click search button to display all users
            </div>
            <table className='tableHeaderWhole'>
                <tr id = "MTableHead"className='medTableHeader'>
                    <th className='medHeadE'>Email</th>
                    <th className='medHeadMN'>Medication Name</th>
                    <th className='medHeadDA'>Dosage Amount</th>
                    <th className='medHeadPD'>Pill Dosage</th>
                    <th className='medHeadPC'>Pill Count</th>
                    <th>Adherence</th>
                </tr>
            </table>
            <section className='tableWhole'>
                { loading && 
                    <p>loading...</p>
                }
                {users.length > 0 && users.map(users => (
                    <MedListItem user={users}/>
                ))}
            </section>
        </body>
    )
}

export default MedList