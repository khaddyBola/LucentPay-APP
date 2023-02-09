import { useState, useRef, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../Images/lucent-logo-white.jpeg";
import "./login.css";
import "../../pages/createAccount/createAccount.css";

const LOGIN_URL = "/auth";

const Login = () => {
  const { setAuth, persist, setPersist } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/usersProfile";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  // Set the focus on the first input when the component loads
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // clear errors whem user is changing the input
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }), {
        headers: { "Content-Type": "application/json" },
        withCredential: true,
      });
      // console.log(JSON.stringify(res?.data));
      // console.log(JSON.stringify(res));
      const accessToken = res?.data?.accessToken;
      const roles = res?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.res) {
        setErrMsg("No server response");
      } else if (err.res?.status === 400) {
        setErrMsg("Username or password missing");
      } else if (err.res?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login failed");
      }
      errRef.current.focus();
    }
  };

  const togglePersist = () => {
    setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", persist);
  }, [persist]);

  return (
    <>
      <main className="login">
        <section className="login-section">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <img src={Logo} alt="logo" className="form-logo" />
          <h2>Happy to have you back</h2>
          <p className="your-details">
            Login into your account with your details
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username"> Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password"> Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Log In</button>
            <div className="persist-check">
              <input
                type="checkbox"
                id="persist"
                onChange={togglePersist}
                checked={persist}
              />
              <label htmlFor="persist">Trust This Device</label>
            </div>
            <p>
              Need an account ? <br />
              <Link to="/createAccount">Register an account</Link>
            </p>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
