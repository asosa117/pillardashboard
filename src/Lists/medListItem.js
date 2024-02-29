function MedListItem(props) {
    const { user } = props

    //code for adherence tracking everyday
    // <td>{String(Math.trunc((meds.when_to_take[0].adherence/(Math.trunc((new Date() - meds.when_to_take[0].taken_dates[0].taken_date.toDate())/8.64e+7)))*100))}%</td> 

    const  meds  = user.medications
    return (
        <body>
            {(meds.length === undefined || meds.length > 0) && meds.map(meds => (
                <table id = "MTable" className="medTable">
                    <tr> 
                        <td>Participant</td>
                        <td>{meds.medication_name} </td>
                        <td>{String(meds.when_to_take[0].taken_dates[0].taken_date.toDate())} </td>
                        <td>{String(meds.when_to_take[0].taken_dates[(meds.when_to_take[0].taken_dates).length-1].taken_date.toDate())} </td>
                        <td>{String(meds.when_to_take[0].monday + meds.when_to_take[0].tuesday
                            + meds.when_to_take[0].wednesday + meds.when_to_take[0].thursday +
                            meds.when_to_take[0].friday + meds.when_to_take[0].saturday +
                            meds.when_to_take[0].sunday)} </td>
                        <td>{String(((meds.when_to_take[0].adherence/(28-((7-(meds.when_to_take[0].monday + meds.when_to_take[0].tuesday
                            + meds.when_to_take[0].wednesday + meds.when_to_take[0].thursday +
                            meds.when_to_take[0].friday + meds.when_to_take[0].saturday +
                            meds.when_to_take[0].sunday)
                            )*4)))*100).toFixed(1))}%</td> 
                    </tr>
                </table>
                ))}
        </body>
    )
}

export default MedListItem