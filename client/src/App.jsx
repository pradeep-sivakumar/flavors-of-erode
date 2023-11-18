import "./App.css";
import { Routes, Route } from "react-router-dom";
import AdminLogin from './Pages/Admin/admin-login/AdminLogin'
function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/admin" element={<AdminLogin />} />
        {/*  <Route path="/" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
