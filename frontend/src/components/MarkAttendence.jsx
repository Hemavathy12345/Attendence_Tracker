import React, { useState } from "react";
import axios from "axios";
import "../css/mark.css";

const MarkAttendance = () => {
    const [students, setStudents] = useState([
        { id: 1, name: "Student1", status: "Present" },
        { id: 2, name: "Student2", status: "Present" },
        { id: 3, name: "Student3", status: "Present" },
        { id: 4, name: "Student4", status: "Present" },
        { id: 5, name: "Student5", status: "Present" }
    ]);

    const [newStudent, setNewStudent] = useState("");
    const [error, setError] = useState(null);
    const [editingId, setEditingId] = useState(null);
    const [editingName, setEditingName] = useState("");
    const [menuOpen, setMenuOpen] = useState(null);

    const toggleStatus = (id) => {
        setStudents(students.map(student =>
            student.id === id ? { ...student, status: student.status === "Present" ? "Absent" : "Present" } : student
        ));
    };

    const addStudent = () => {
        if (newStudent.trim() === "") {
            setError("Please enter a valid student name!");
            return;
        }
        setStudents([...students, { id: students.length + 1, name: newStudent.trim(), status: "Present" }]);
        setNewStudent("");
        setError(null);
    };

    const deleteStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    const startEditing = (id, name) => {
        setEditingId(id);
        setEditingName(name);
        setMenuOpen(null); // Close menu when editing starts
    };

    const saveEdit = () => {
        setStudents(students.map(student =>
            student.id === editingId ? { ...student, name: editingName } : student
        ));
        setEditingId(null);
        setEditingName("");
    };

    const submitAttendance = async () => {
        try {
            const res = await axios.post("http://localhost:3000/submit", { students });
            alert(res.data);
        } catch (err) {
            setError("Error submitting attendance! Please try again.");
        }
    };

    return (
        <div className="mark-attendance">
            <h1>Mark Attendance</h1>

            {error && <p className="error">{error}</p>}

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
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>
                                {editingId === student.id ? (
                                    <input
                                        type="text"
                                        value={editingName}
                                        onChange={(e) => setEditingName(e.target.value)}
                                    />
                                ) : (
                                    student.name
                                )}
                            </td>
                            <td style={{ color: student.status === "Present" ? "green" : "red" }}>
                                {student.status}
                            </td>
                            <td>
                                <button onClick={() => toggleStatus(student.id)}>
                                    {student.status === "Present" ? "Mark Absent" : "Mark Present"}
                                </button>
                            </td>
                            <td style={{ position: "relative" }}>
                                <button onClick={() => setMenuOpen(menuOpen === student.id ? null : student.id)}>⋮</button>

                                {menuOpen === student.id && (
                                    <div className="dropdown-menu">
                                        <button onClick={() => startEditing(student.id, student.name)}>Edit</button>
                                        <button onClick={() => deleteStudent(student.id)}>Delete</button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingId && (
                <div className="edit-actions">
                    <button onClick={saveEdit}>Save</button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                </div>
            )}

            <div className="btn">
                <button onClick={submitAttendance} className="submit">Submit Attendance</button>
            </div>
        </div>
    );
};

export default MarkAttendance;
