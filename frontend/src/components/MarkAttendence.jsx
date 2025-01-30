import React, { useState } from "react";
import axios from "axios";
import "../css/mark.css";

const MarkAttendance = () => {
    const [students, setStudents] = useState([
        { name: "Student1", status: "Present" },
        { name: "Student2", status: "Present" },
        { name: "Student3", status: "Present" },
        { name: "Student4", status: "Present" },
        { name: "Student5", status: "Present" },
        { name: "Student6", status: "Present" },
        { name: "Student7", status: "Present" },
        { name: "Student8", status: "Present" },
        { name: "Student9", status: "Present" }
    ]);

    const [newStudent, setNewStudent] = useState("");
    const toggleStatus = (index) => {
        const updatedStudents = [...students];
        updatedStudents[index].status = updatedStudents[index].status === "Present" ? "Absent" : "Present";
        setStudents(updatedStudents);
    };
    const addStudent = () => {
        if (newStudent.trim() === "") {
            alert("Please enter a valid student name!");
            return;
        }
        setStudents([...students, { name: newStudent, status: "Present" }]);
        setNewStudent("");
    };
    const submitAttendance = async () => {
        try {
            const res = await axios.post("http://localhost:3000/submit", { students });
            alert(res.data);
        } catch (err) {
            console.log(err);
            alert("Error submitting attendance!");
        }
    };

    return (
        <div >
            <h1>Mark Attendance</h1>
            
            <div className="add-student">
                <input 
                    type="text" 
                    placeholder="Enter student name" 
                    value={newStudent} 
                    onChange={(e) => setNewStudent(e.target.value)}
                />
                <button onClick={addStudent}>Add</button>
            </div>

         
            <table cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td style={{ color: student.status === "Present" ? "green" : "red" }}>
                                {student.status}
                            </td>
                            <td>
                                <button onClick={() => toggleStatus(index)}>
                                    {student.status === "Present" ? "Mark Absent" : "Mark Present"}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="btn">
                <button onClick={submitAttendance} className="submit">Submit Attendance</button>
            </div>
        </div>
    );
};

export default MarkAttendance;
