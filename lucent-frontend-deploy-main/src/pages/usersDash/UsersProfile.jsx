import { useNavigate } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

const UsersProfile = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  return (
    <section>
      <h1>Welcome to your dashboard</h1>
      <br />
      <p>You are logged in!</p>
      <div className="flexGrow">
        <button onClick={signOut}>Sign Out</button>
      </div>
    </section>
  );
};

export default UsersProfile;
