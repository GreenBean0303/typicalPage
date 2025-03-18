import "./MainHeader.css"
import Navigation from "./Navigation.jsx"

const MainHeader = (props) => {
    return (
        <header className="main-header">
            <h1>A Typical page</h1>
            <Navigation loggedIn = {props.isAuthenticated} />
        </header>
    )
}
export default MainHeader