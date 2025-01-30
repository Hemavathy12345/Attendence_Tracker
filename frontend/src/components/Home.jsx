import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
    const navigate = useNavigate();
    const handleClassClick = (className) => {
        navigate("/markattedence", { state: { className } });
    };

    return (
        <section className="home-section">
            <h1 className="home-heading">WELCOME TO THE ATTENDANCE TRACKER PAGE..!</h1>
            <div className="classes-container">
                <div className="class-box class-1" onClick={() => handleClassClick('class-1')}>CSE A</div>
                <div className="class-box class-2" onClick={() => handleClassClick('class-2')}>CSE B</div>
                <div className="class-box class-3" onClick={() => handleClassClick('class-3')}>CSE C</div>
                <div className="class-box class-4" onClick={() => handleClassClick('class-4')}>IT</div>
                <div className="class-box class-5" onClick={() => handleClassClick('class-5')}>CCE</div>
            </div>
        </section>
    );
}

export default Home;
