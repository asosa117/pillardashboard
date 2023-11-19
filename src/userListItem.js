function UserListItem(props) {
    const { user } = props


    return (
        <body>
        <li key={user.id}>
            <h3>Email: {user.email}</h3>
            <p>Password: {user.password}</p>
            <p>Username: {user.username}</p>
        </li>
        </body>
    )
}

export default UserListItem