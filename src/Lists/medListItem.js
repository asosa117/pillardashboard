function MedListItem(props) {
    const { user } = props

    //MAKE ADHERENCE PERCENTAGE
    //CHANGE MEDS PER WEEK TITLE
    const  meds  = user.medications
    return (
        <body>
            {(meds.length === undefined || meds.length > 0) && meds.map(meds => (
                <table id = "MTable" className="medTable">
                    <tr> 
                        <td>{user.username}</td>
                        <td>{meds.medication_name} </td>
                        <td>{String(meds.when_to_take[0].taken_dates[0].taken_date.toDate())} </td>
                        <td>{String(meds.when_to_take[0].taken_dates[(meds.when_to_take[0].taken_dates).length-1].taken_date.toDate())} </td>
                        <td>{String(meds.when_to_take[0].monday + meds.when_to_take[0].tuesday
                            + meds.when_to_take[0].wednesday + meds.when_to_take[0].thursday +
                            meds.when_to_take[0].friday + meds.when_to_take[0].saturday +
                            meds.when_to_take[0].sunday)} </td>
                        <td>{meds.when_to_take[0].adherence} </td> 
                    </tr>
                </table>
                ))}
        </body>
    )
}

export default MedListItem