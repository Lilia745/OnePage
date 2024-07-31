import Button from "../Button/Button";

function Header() {
    const list = [
        {title:"Home", url:"#"},
        {title:"About", url:"#"},
        {title:"Services", url:"#"},
        {title:"Portfolio", url:"#"},
        {title:"Team", url:"#"},
        {title:"Contact", url:"#"}
    ]
    return(
        <div className="cont">
            <header>
                <div className="logoDiv">
                    <a href="">OnePage</a>
                </div>
                <nav>
                    <ul className="menu-list">
                        {list.map(((item,index) =>{
                            return(
                                <li key={index} className="menu-link">
                                    <a href="">{item.title}</a>
                                </li>
                            )
                        }))}
                    </ul>
                    <Button />
                </nav>
            </header>
        </div>
    );
}

export default Header