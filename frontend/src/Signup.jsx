import './Signup.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then((res) => {
                navigate('/login');
            })
            .catch((err) => {
                console.log('Error in signup handlesubmit', err.message);
                alert(err.message);
            });
    }

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">Create Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            autoComplete="off"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="submit-btn">
                        Register
                    </button>
                </form>
                <p className="switch-text">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;
