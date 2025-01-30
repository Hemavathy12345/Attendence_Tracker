import React, { useState, useEffect } from "react";
import axios from "axios"
const ViewAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const res= await axios.get("http://localhost:3001/attendance");
        setAttendance(res.data)
      } catch (error) {
        console.error("Error fetching attendance:", error);
      }
    };
    fetchAttendance()
  }, [])
  return (
    <div>
      <h1>View Attendance</h1>
      <table  border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {
            attendance  .map((record, index) => (
                <tr key={index}>
                  <td>{record.name}</td>
                  <td>{record.status}</td>
                  <td>{record.date}</td>
                  <td>{record.time}</td>
                </tr>
              ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default ViewAttendance;
