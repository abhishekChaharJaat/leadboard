import { useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Leadboard from "./pages/Leadboard";
import LeaderboardTable from "./components/LeadboradTable";
import UserNudge from "./components/UserNudge";
function App() {
  const { theme } = useSelector((state) => state.students);
  useEffect(() => {
    if (theme === "dark") {
      document.getElementById("root").classList.add("dark");
    } else {
      document.getElementById("root").classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="bg-q3-surface-default min-h-screen">
      <div className="App mx-auto border-red-200 relative">
        <Header />
        <Leadboard />
        <UserNudge />
      </div>
    </div>
  );
}

export default App;
