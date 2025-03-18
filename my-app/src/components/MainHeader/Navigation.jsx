import "./Navigation.css"
import Button from "../UI/Button"

const Navigation = (props) => {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/users">Users</a>
                </li>
                <li>
                <a href="/admin">Admin</a>
                </li>
                {props.loggedIn && (
                    <li>
                        <Button onclick={props.onLogout}>Logout</Button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navigation