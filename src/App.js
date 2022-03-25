import { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/AppRouter/AppRouter";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);
  if (loading) return <Loader />;
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
