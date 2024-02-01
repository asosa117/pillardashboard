function MedListItem(props) {
    const { user } = props

    const  meds  = user.medications

    return (
        <body>
            {(meds.length === undefined || meds.length > 0) && meds.map(meds => (
                <table id = "MTable" className="medTable">
                    <tr> 
                        <td>{user.username}</td>
                        <td>{meds.medication_name} </td>
                        <td>{meds.dosage_amount} </td>
                        <td>{meds.pill_count_dosage} </td>
                        <td>{meds.pill_count} </td>
                        <td>{meds.when_to_take[0].adherence} </td>
                    </tr>
                </table>
                ))}
            
        </body>
    )
}

export default MedListItem