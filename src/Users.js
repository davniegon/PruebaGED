import {useEffect, useState} from "react";
import {Button, Paper, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

export default function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orderedAsc, setOrderedAsc] = useState(true);
    const [orderedIdAsc, setOrderedIdAsc] = useState(true);
    const [orderedNameAsc, setOrderedNameAsc] = useState(true);
    const [orderedUsernameAsc, setOrderedUsernameAsc] = useState(true);
    const [orderedEmailAsc, setOrderedEmailAsc] = useState(true);

    //cdm
    useEffect(async () => {
        await getUsers();
    }, []);


    let getUsers = async () => {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        response = await response.json();
        setUsers(response);
        setLoading(false)
    }


    const headCells = [
        {id: 'id', label: 'id'},
        {id: 'name', label: 'name'},
        {id: 'username', label: 'username'},
        {id: 'email', label: 'email'},

    ];
    let sortUsers = (column) => {
        // eslint-disable-next-line default-case
        switch (column) {
            case "id":
                setOrderedAsc(!orderedAsc);
                users.reverse();
                break;
            case "name":
                console.log("ordenando por name");
                break;
            case "username":
                console.log("ordenando por username");
                break;
            case "email":
                console.log("ordenando por email");
                break;
        }
    }

    let usersTable = () => {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headCells.map((headCell) => {
                                return (
                                    <TableCell>
                                        {headCell.label.toUpperCase()}
                                        <Button style={{marginLeft: '1em'}}
                                                onClick={() => sortUsers(headCell.id)}> {orderedAsc ? "↓" : "↑"}</Button>
                                    </TableCell>
                                    //En el método anterior me debería fijar en el atributo correspondiente a la columna (orderedIdAsc ...) y dependiendo del atributo, mostrar una flecha/Icono u otra
                                );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => {
                            return (
                                <TableRow>
                                    <TableCell>
                                        {user.id}
                                    </TableCell>
                                    <TableCell>
                                        {user.name}
                                    </TableCell>
                                    <TableCell>
                                        {user.username}
                                    </TableCell>
                                    <TableCell>
                                        {user.email}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>


                </Table>


            </Paper>
        )


    }

    return (
        <div>
            <h1>Users</h1>
            {loading ? <h1>"LOADING"</h1>  : usersTable()}
        </div>

    );

}