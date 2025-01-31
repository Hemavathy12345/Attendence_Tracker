import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

const Home = () => {
    const navigate = useNavigate();
    const [classes, setClasses] = useState([
        { id: "class-1", name: "CSE A" },
        { id: "class-2", name: "CSE B" },
        { id: "class-3", name: "CSE C" },
        { id: "class-4", name: "IT" },
        { id: "class-5", name: "CCE" }
    ]);
    
    const [newClass, setNewClass] = useState("");
    const [editClassId, setEditClassId] = useState(null);
    const [editClassName, setEditClassName] = useState("");

    const handleClassClick = (className) => {
        navigate("/markattedence", { state: { className } });
    };

    const handleAddClass = () => {
        if (newClass.trim() !== "") {
            const newClassObj = {
                id: `class-${classes.length + 1}`,
                name: newClass.trim()
            };
            setClasses([...classes, newClassObj]);
            setNewClass("");
        }
    };

    const handleEditClick = (id, name) => {
        setEditClassId(id);
        setEditClassName(name);
    };

    const handleSaveEdit = () => {
        setClasses(classes.map(cls => cls.id === editClassId ? { ...cls, name: editClassName } : cls));
        setEditClassId(null);
        setEditClassName("");
    };

    return (
        <section className="home-section">
            <h1 className="home-heading">WELCOME TO THE ATTENDANCE TRACKER PAGE..!</h1>

            <div className="add-class-container">
                <input 
                    type="text" 
                    placeholder="Enter new class name" 
                    value={newClass} 
                    onChange={(e) => setNewClass(e.target.value)}
                />
                <button onClick={handleAddClass}>Add</button>
            </div>

            <div className="classes-container">
                {classes.map((cls) => (
                    <div key={cls.id} className="class-box">
                        {editClassId === cls.id ? (
                            <input 
                                type="text" 
                                value={editClassName} 
                                onChange={(e) => setEditClassName(e.target.value)}
                            />
                        ) : (
                            <span onClick={() => handleClassClick(cls.id)}>{cls.name}</span>
                        )}

                        {editClassId === cls.id ? (
                            <button onClick={handleSaveEdit}>Save</button>
                        ) : (
                            <button onClick={() => handleEditClick(cls.id, cls.name)} className="edit-button">Edit</button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Home;
