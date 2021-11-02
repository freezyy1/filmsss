const Footer = () => {
    return (
        <div>
            <footer className="page-footer indigo darken-1">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">My Websites on pure css</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://freezyy1.github.io/">Site of company</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            </ul>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Projects on react</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="#!">Movies search</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Copyright
                        <a className="grey-text text-lighten-4 right" href="https://github.com/freezyy1">My github</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export {Footer}