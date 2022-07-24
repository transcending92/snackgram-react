import "../styles/navigation.scss";
import logo from "../images/logo.png";
import searchIcon from "../images/searchIcon.png";
import Menu from "../components/Menu.js";

function Navigation() {
return (
    <div className="navigation">
        <div className="container">
            <img className="logo" src={logo} alt="Snackgram Logo"/>
            <div className="search"> 
                <img className="searchIcon" src={searchIcon} alt="search bar"/>
                <span className="searchText">Search</span>
            </div>
            <Menu />
        </div>
    </div>
);
}

export default Navigation;