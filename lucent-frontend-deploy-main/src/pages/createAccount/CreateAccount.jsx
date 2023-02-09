import React from "react";
import "./createAccount.css";
import Logo from "../../Images/lucent-logo-white.jpeg";
import { useRef, useState, useEffect } from "react";
import {
  faTimes,
  faInfoCircle,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import PhoneInput from "react-phone-number-input/input";
import en from "react-phone-number-input/locale/en";
import CountrySelect from "../../components/CountrySelect";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const FIRSTNAME_REGEX = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
const LASTNAME_REGEX = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const MAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHN_REGEX = /([0-9\s\-]{7,})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REG_URL = "/register";

const CreateAccount = () => {
  const userRef = useRef();
  const errRef = useRef();

  // firstname
  const [firstname, setFirstname] = useState("");
  const [validFirstname, setValidFirstname] = useState(false);
  const [firstnameFocus, setFirstnameFocus] = useState(false);

  // lastname
  const [lastname, setLastname] = useState("");
  const [validLastname, setValidLastname] = useState(false);
  const [lastnameFocus, setLastnameFocus] = useState(false);

  // username
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  // mail
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  // phone number
  const [phnCountry, setPhnCountry] = useState("NG");
  const [phn, setPhn] = useState();
  const [validPhn, setValidPhn] = useState(false);
  const [phnFocus, setPhnFocus] = useState(false);

  // seelect country
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  // password
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // password confirmation
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  // error & success message
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    // testing firstname conditions
    const result = FIRSTNAME_REGEX.test(firstname);
    setValidFirstname(result);
  }, [firstname]);

  useEffect(() => {
    // testing lastname conditions
    const result = LASTNAME_REGEX.test(lastname);
    setValidLastname(result);
  }, [lastname]);

  useEffect(() => {
    // testing username conditions
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    // testing email conditions
    const result = MAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    // testing phn conditions
    const result = PHN_REGEX.test(phn);
    setValidPhn(result);
  }, [phn]);

  // password comfirmation
  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  // to clear error messages
  useEffect(() => {
    setErrMsg("");
  }, [firstname, lastname, user, email, phn, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const res = await axios.post(
        REG_URL,
        JSON.stringify({
          firstname,
          lastname,
          email,
          user,
          phn,
          country,
          region,
          pwd,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      // TODO: remove console.logs before deployment
      console.log(JSON.stringify(res?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      // clear input
      setFirstname("");
      setLastname("");
      setEmail("");
      setUser("");
      setPhn("");
      setCountry("");
      setRegion("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.res) {
        setErrMsg("No server response");
      } else if (err.res?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <main className="create">
      <>
        {success ? (
          <section className="create-section">
            <h1>Success!</h1>
            <p>
              <Link to="/login">Login</Link>
            </p>
          </section>
        ) : (
          <section className="create-section">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <img src={Logo} alt="logo" className="form-logo" />
            <h4>Welcome</h4>
            <h2>Let's get you started here</h2>
            <p className="your-details">
              Fill in your details below to create an account
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid-2">
                <div className="register-field">
                  <label htmlFor="firstname">
                    Firstname:
                    <span className={validFirstname ? "valid" : "hide"}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span
                      className={
                        validFirstname || !firstname ? "hide" : "invalid"
                      }
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    ref={userRef}
                    value={firstname}
                    autoComplete="off"
                    required
                    onChange={(e) => setFirstname(e.target.value)}
                    aria-invalid={validFirstname ? "false" : "true"}
                    aria-describedby="fnnote"
                    onFocus={() => setFirstnameFocus(true)}
                    onBlur={() => setFirstnameFocus(false)}
                  />
                  <p
                    id="fnnote"
                    className={
                      firstnameFocus && firstname && !validFirstname
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must be in Letters at minimum of 1 <br /> and maximum of 40
                    characters
                  </p>
                </div>

                <div className="register-field">
                  <label htmlFor="lastname">
                    Lastname:
                    <span className={validLastname ? "valid" : "hide"}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span
                      className={
                        validLastname || !lastname ? "hide" : "invalid"
                      }
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    ref={userRef}
                    value={lastname}
                    autoComplete="off"
                    required
                    onChange={(e) => setLastname(e.target.value)}
                    aria-invalid={validFirstname ? "false" : "true"}
                    aria-describedby="lnnote"
                    onFocus={() => setLastnameFocus(true)}
                    onBlur={() => setLastnameFocus(false)}
                  />
                  <p
                    id="lnnote"
                    className={
                      lastnameFocus && lastname && !validLastname
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Must be in Letters at minimum of 1 <br /> and maximum of 40
                    characters
                  </p>
                </div>

                <div className="register-field">
                  <label htmlFor="email">
                    Email Adress:
                    <span className={validEmail ? "valid" : "hide"}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validEmail || !email ? "hide" : "invalid"}>
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    ref={userRef}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="emailnote"
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                  <p
                    id="emailnote"
                    className={
                      emailFocus && email && !validEmail
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    The email field must contain a valid email
                  </p>
                </div>

                <div className="register-field">
                  <label htmlFor="username">
                    Username:
                    <span className={validName ? "valid" : "hide"}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validName || !user ? "hide" : "invalid"}>
                      <FontAwesomeIcon icon={faTimes} />
                    </span>
                  </label>
                  <input
                    type="text"
                    id="username"
                    ref={userRef}
                    value={user}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                  />
                  <p
                    id="uidnote"
                    className={
                      userFocus && user && !validName
                        ? "instructions"
                        : "offscreen"
                    }
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters.
                    <br />
                    Must begin with a letter.
                    <br />
                    Letters, numbers, underscores, hyphens allowed.
                  </p>
                </div>
              </div>

              <label htmlFor="phone">
                Phone Number:
                <span className={validPhn ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validPhn || !phn ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <div className="phone">
                <CountrySelect
                  labels={en}
                  value={phnCountry}
                  onChange={setPhnCountry}
                  id="phone"
                />
                <PhoneInput
                  country={phnCountry}
                  value={phn}
                  onChange={setPhn}
                  id="phone"
                  ref={userRef}
                  autoComplete="off"
                  aria-invalid={validPhn ? "false" : "true"}
                  aria-describedby="phnnote"
                  required
                  onFocus={() => setPhnFocus(true)}
                  onBlur={() => setPhnFocus(false)}
                  className="phoneInput"
                />
              </div>
              <p
                id="phnnote"
                className={
                  phnFocus && phn && !validPhn ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must be a valid phone number
              </p>

              <label htmlFor="country">
                Select Country:
                <span className={country ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={country || !region ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <div className="country">
                <CountryDropdown
                  value={country}
                  onChange={(val) => setCountry(val)}
                  className="country-dropdown"
                  id="country"
                  aria-describedby="ctrynote"
                />
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={(val) => setRegion(val)}
                  id="region-dropdown"
                  required
                />
              </div>
              <p
                id="ctrynote"
                className={!country && !region ? "instructions" : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                You must choose a country and region
              </p>

              <label htmlFor="password">
                Password:
                <span className={validPwd ? "valid" : "hide"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validPwd || !pwd ? "hide" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <p
                id="pwdnote"
                className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:{" "}
                <span aria-label="exclamation mark">!</span>{" "}
                <span aria-label="at symbol">@</span>{" "}
                <span aria-label="hashtag">#</span>{" "}
                <span aria-label="dollar sign">$</span>{" "}
                <span aria-label="percent">%</span>
              </p>
              <label htmlFor="confirm_pwd">
                Confirm Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validMatch && matchPwd ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validMatch || !matchPwd ? "hide" : "invalid"}
                />
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>
              <button
                disabled={
                  !validName || !validPwd || !validMatch || !validFirstname
                    ? true
                    : false
                }
              >
                Sign Up
              </button>
              <p className="have-account">
                Already have an account ?
                <span className="line">
                  <Link to="/login">Login</Link>
                </span>
                <span className="line">
                  <Link to="/admin">Admin</Link>
                </span>
              </p>
            </form>
          </section>
        )}
      </>
    </main>
  );
};

export default CreateAccount;
