import './App.css';
import { Fragment,useEffect,useState } from "react";
import MainHeader from './components/MainHeader/MainHeader.jsx';
import Login from "./components/Login/Login.jsx"
import Home from './components/Home/Home.jsx';

function App() {
    // Initialize loggedIn state based on localStorage
    const [loggedIn, setLoggedIn] = useState(() => {
        const storedUser = JSON.parse(localStorage.getItem('isLoggedUser'));
        return storedUser ? storedUser.isLogged : false;
    });

    console.log(loggedIn); // Debugging: Log current login state

    // Effect to check localStorage on initial load
    useEffect(() => {
        const storedLoggedUserData = JSON.parse(localStorage.getItem('isLoggedUser'));
        if (storedLoggedUserData?.isLogged === true) {
            setLoggedIn(true);
        }
    }, []);

    // Login handler to store login state
    const loginHandler = (user, password) => {
        localStorage.setItem('isLoggedUser',JSON.stringify({
                username: user,
                isLogged: true,
            })
        );
        setLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedUser');
        setLoggedIn(false);
    };
    
    return (
        <Fragment>
            <MainHeader />
            <main>
            {!loggedIn && <Login onLogin={loginHandler} />}
            {loggedIn && <Home />}

            </main>
        </Fragment>
    );
}

export default App;
