import React from 'react'
import './Project.css'



export function Projects() {
    const handleClick = () => {
        console.log('clicked')

    }
    return (
        <div className="background">

            <div className="container">
                <div className="titlee">
                    <h1>Project</h1>
                </div>
                <div className="box-contain">
                    <div className="outer">

                        <div className="box bx"
                            onClick={event => window.open(" https://pratap-18.github.io/ecommerce/", "_blank")}
                        >
                            {/* <img src={SiteOne} className="box-image" /> */}
                        </div>
                        <h3>E-commerce</h3>

                    </div>
                    <div className="outer">

                        <div className="box2 bx"
                            // onClick={event => window.location.href = 'https://pratap-18.github.io/myngo/index.html'}
                            onClick={event => window.open("https://pratap-18.github.io/myngo/index.html", "_blank")}

                        >

                        </div>
                        <h3>NGO</h3>

                    </div>
                    <div className="outer">

                        <div className="box3 bx">

                        </div>
                        <h3>CRM</h3>
                    </div>

                    <div className="outer">

                        <div className="box4 bx"
                            onClick={event => window.open("  https://pratap-18.github.io/News/", "_blank")}

                        >

                        </div>
                        <h3>News</h3>
                    </div>
                    <div className="outer">

                        <div className="box5 bx" onClick={event => window.open("https://pratap-18.github.io/Bank/", "_blank")}>

                        </div>
                        <h3>bank</h3>
                    </div>
                    <div className="outer">


                        <div className="box7 bx"
                            onClick={event => window.open("https://pratap-18.github.io/pratapstravel/", "_blank")}
                        >

                        </div>
                        <h3>Travel</h3>
                    </div>

                    <div className="outer">

                        <div className="box6 bx"
                            onClick={event => window.open("https://group32-store.herokuapp.com//", "_blank")}
                        >

                        </div>
                        <h3>Course</h3>
                    </div>
                </div>

            </div >
        </div>
    )
}


