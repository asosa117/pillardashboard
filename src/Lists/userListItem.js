function UserListItem(props) {
    const {user} = props

    return (
        <body>
            <table id = "UTable" className="userTable">
                    <tr key = {user.id}> 
                        <td>{user.email}</td>
                        <td>{user.username} </td>
                    </tr>
            </table>
        </body>
    )
}

export default UserListItem