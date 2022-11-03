export default function Table({users}) {

    return (
        <table className="table table-hover" style={{ width: '60%'}}>
            <thead>
                <tr className="table-active">
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length > 0 ?
                    users.map((user, index) => {
                        return (
                            <tr>
                                <th scope="row">{index}</th>
                                <td>{user.name}</td>
                                <td>{user.lastname}</td>
                                <td>{user.age}</td>
                            </tr>
                        )
                    })
                    :
                    <tr>
                        <td colSpan="4" className="center">No data!</td>
                    </tr>
                }
            </tbody>
        </table>
    )
} 