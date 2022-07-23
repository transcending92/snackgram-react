import "../styles/navigation.scss";



function Navigation() {
return (
    <div className="navigation">
        <div className="container">
            <img className="logo" src="" alt="Snackgram Logo"/>
            <div className="search"> 
                <img className="searchIcon" src="" alt="search bar"/>
                <span className="searchText">Search</span>
            </div>
            <menu />
        </div>
    </div>
);
}

export default Navigation;