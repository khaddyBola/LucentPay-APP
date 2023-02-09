import { Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import CreateAccount from "./pages/createAccount/CreateAccount";
import Company from "./pages/company/Company";
import Login from "./pages/login/Login";
import Pricing from "./pages/pricing/Pricing";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import Contacts from "./pages/contacts/Contacts";
import NotFound from "./pages/notFound/NotFound";
import FAQs from "./pages/FAQs/FAQs";
import Admin from "./pages/admin/Admin";
import "react-phone-number-input/style.css";
import PersistLogin from "./components/PersistLogin";
import Unauthorized from "./pages/unauthorized/Unauthorized";
import UsersProfile from "./pages/usersDash/UsersProfile";

const ROLES = {
  User: 2001,
  Admin: 5150,
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="services" element={<Services />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="company" element={<Company />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="login" element={<Login />} />
          <Route path="createAccount" element={<CreateAccount />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* Protected Routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
              <Route path="usersProfile" element={<UsersProfile />} />
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
              <Route path="admin" element={<Admin />} />
            </Route>
          </Route>

          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
