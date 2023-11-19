function MedListItem(props) {
    const { med } = props


    return (
        <body>
        <li key={med.friday}>
            <h3>time: {med.friday}</h3>
        </li>
        </body>
    )
}

export default MedListItem