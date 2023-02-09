import ChatCardScreen from "./screens/ChatCardScreen";
import LoginScreen from "./screens/LoginScreen";
import "./GlobalStyle.css";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setLogin] = useState(
    localStorage.getItem("username") != null
  );

  return (
    <div className="body">
      {isLoggedIn ? <ChatCardScreen /> : <LoginScreen />}
    </div>
  );
}

export default App;
