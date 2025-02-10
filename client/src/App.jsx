import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
    const [Employee, setEmployees] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:6969/list").then((res) => {
            setEmployees(res.data);
        });
    }, []);
    return(
        <>
         <table border={1}
         align="center"
         cellPadding={10}
         cellSpacing={10}>
            <thead>
                <tr>
                    <th>OBJECT ID</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DEPARTMENT</th>
                    <th>ROLE</th>
                </tr>
            </thead>
            <tbody>
                {
                    Employee.map((emp) => {
                        return(
                            <tr>
                                <td>{emp._id}</td>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.department}</td>
                                <td>{emp.role}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            
            
         </table>
        </>
    )
}

export default App;
