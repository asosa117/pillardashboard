function UserListItem(props) {
    const {user} = props

    return (
        <body>
            <table id = "UTable" className="userTable">
                    <tr key = {user.id}> 
                        <td>Participant@gmail.com</td>
                        <td>Participant</td>
                    </tr>
            </table>
        </body>
    )
}

export default UserListItem