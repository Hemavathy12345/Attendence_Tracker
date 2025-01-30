import React, { useState } from "react"
import axios from "axios"
import "../css/mark.css"
const MarkAttendence = () => {
    const [students,setStudents] =useState([{ name: "Hemavathy", status: "Present" },
        { name: "suji", status: "Present" },
      { name: "Sudha", status: "Present" },
         { name: "Siva", status: "Present" },{ name: "Hema", status: "Present" },
        { name: "Lakshmi", status: "Present" },
      { name: "Keerthi", status: "Present" },
        { name: "Maha", status: "Present" },
{ name: "Harsha", status: "Present" }
    ])
    const status = (i) => {
        const stud = [...students];
        if (stud[i].status === "Present") {
            stud[i].status = "Absent";
        } else {
            stud[i].status = "Present";
        }
        setStudents(stud)
    };
    const Submit = async () => {
        try {
            const res = await axios.post('http://localhost:3000/submit', { students })
            alert(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div>
            <table border="1" cellPadding="10" >
                <thead>
                <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{students[0].name}</td>
                        <td style={{ color:students[0].status === "Present" ? "green" : "red" }}>
                            {students[0].status}
                        </td>
                        <td>
                            <button onClick={() => status(0)}>
                                {students[0].status === "Present" ? "Mark Absent" : "Mark Present"}
                            </button>
                        </td>
                    </tr>
      <tr>
                            <td>{students[1].name}</td>
                <td style={{ color:students[1].status === "Present" ? "green" : "red" }}>
                            {students[1].status}
                        </td>
                        <td>
                            <button onClick={() => status(1)}>
                                {students[1].status === "Present" ? "Mark Absent" : "Mark Present"}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>{students[2].name}</td>
                        <td style={{ color: students[2].status === "Present" ? "green" : "red" }}>
               {students[2].status}
                        </td>
                        <td>
                            <button onClick={() => status(2)}>
                                {students[2].status === "Present" ? "Mark Absent" : "Mark Present"}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>{students[3].name}</td>
                        <td style={{ color: students[3].status === "Present" ? "green" : "red" }}>
                            {students[3].status}
                        </td>
                        <td>
                            <button onClick={() => status(3)}>
                                {students[3].status === "Present" ? "Mark Absent" : "Mark Present"}
                            </button>
                        </td>
                    </tr>
                    <tr>
         <td>{students[4].name}</td>
                        <td style={{ color:students[4].status === "Present" ? "green" : "red" }}>
                            {students[4].status}
                        </td>
                        <td>
                            <button onClick={() => status(4)}>
                                {students[4].status === "Present" ? "Mark Absent" : "Mark Present"}
                     </button>
                        </td>
                    </tr>
                    <tr>
                        <td>{students[5].name}</td>
                        <td style={{ color: students[5].status === "Present" ? "green" : "red" }}>
      {students[5].status}
                        </td>
                        <td>
                            <button onClick={() => status(5)}>
                                {students[5].status === "Present" ? "Mark Absent" : "Mark Present"}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>{students[6].name}</td>
                        <td style={{ color: students[6].status === "Present" ? "green" : "red" }}>
                            {students[6].status}
                        </td>
                        <td>
                            <button onClick={() => status(6)}>
                                {students[6].status === "Present" ? "Mark Absent" : "Mark Present"}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>{students[7].name}</td>
                        <td style={{ color: students[7].status === "Present" ? "green" : "red" }}>
                            {students[7].status}
                        </td>
                        <td>
                            <button onClick={() => status(7)}>
                                {students[7].status === "Present" ? "Mark Absent" : "Mark Present"}
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>{students[8].name}</td>
                        <td style={{ color: students[8].status === "Present" ? "green" : "red" }}>
                            {students[8].status}
                        </td>
                        <td>
                            <button onClick={() => status(8)}>
                                {students[8].status === "Present" ? "Mark Absent" : "Mark Present"}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="btn">
                <button onClick={Submit} className="submit">Submit Attendance</button>
            </div>
        </div>
    )
}

export default MarkAttendence
