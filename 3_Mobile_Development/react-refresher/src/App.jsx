import { useState } from "react";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

function onToogleTheme(){
    setDarkMode(!darkMode)
    console.log(darkMode)
}

    return (
        <div
        style={{
            height:"100vh",
            backgroundColor:darkMode ? "#121212" : "#ffffff",
            color: darkMode ? "#ffffff" : "#000000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            transition: "0.3s"
        }}>     
            <h1>Mode {darkmode ? "Change to light" : "Change to "}</h1>
            <button onClick={onToogleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}

export default App