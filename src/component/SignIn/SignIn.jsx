import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './SignIn.css'; // Ensure the path is correct

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.password === password) {
      navigate('/'); // Redirect to home page
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-container">
      {/* <div className="logo">
        <img src="./src/assets/Logo.png" alt="Logo" className="logo-image" />
        <h1>HomeAcq Realty Company</h1>
      </div> */}
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
};

export default SignIn;
