import React from 'react'
import {IoIosArrowUp} from 'react-icons/io'
import {Link} from 'react-scroll'
const Footer = () => {
    return (
        <>
            <div className="main-footer mt-2">
                <div className="container">
                    <div className="row">
                        
                        {/* column 1 */}
                        <div className="col-md-3 col-sm- my-2 ">
                            <img className="logo-footer " src="green_app_icon.svg" alt="logo.." />
                        </div>
                        {/* column 2 */}
                        <div className="col-md-3 col-sm- my-2">
                            <h4>The Basics</h4>
                            <ul className="list-unstyled">
                                <li>support forums</li>
                                <li>system status</li>
                                <li>API</li>
                                <li>ContactUs</li>
                            </ul>
                        </div>
                        {/* column 3 */}
                        <div className="col-md-3 col-sm- my-2">
                            <h4>Get Involved</h4>
                            <ul className="list-unstyled">
                                <li>Add New Movie</li>
                                <li>Add New TV Show</li>
                                <li>contactus</li>
                            </ul>
                        </div>
                        {/* column 4 */}
                        <div className="col-md-2 col-sm- my-2">
                            <h4>Legal</h4>
                            <ul className="list-unstyled">
                                <li>Guideline</li>
                                <li>Leaderboard</li>
                                <li>Discussion</li>
                                <li>facebook</li>
                            </ul>
                        </div>
                        <div className="  col-md-1 col-sm">
                            <Link to="navbar" >< IoIosArrowUp style={{color:"white" ,fontSize:"3rem"}}/></Link>
                        </div>
                    </div>
                    {/* footer bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy;{new Date().getFullYear()} MoviesDB - All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
