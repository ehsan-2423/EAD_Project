import '../ComponentStyling/Login.css';
import axios from 'axios';
import {useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {LoginContext} from './LoginContext';

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      axios.post('http://localhost:3001/', values)
        .then((res) => {
          let msg = res.data;
          if (msg === 'Success Login') {
            resetForm();
            login();
            navigate('/home');
          } else {
            alert(msg);
          }
        })
        .catch((err) => console.log('Login error:', err))
        .finally(() => setSubmitting(false));
    }
  });

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <form onSubmit={formik.handleSubmit} noValidate>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={formik.touched.email && formik.errors.email ? 'error-input' : ''}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={formik.touched.password && formik.errors.password ? 'error-input' : ''}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>
          <button type="submit" className="submit-btn" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <p className="switch-text">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
