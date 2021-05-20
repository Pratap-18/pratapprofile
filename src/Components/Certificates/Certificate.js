import React from 'react'
import mern from './../../image/mernCertificate.JPG'
import './Certificate.css'
import ged from './../../image/ged.jpg'
import degin from './../../image/degin.JPG'

function Certificate() {


    return (
        <div className="container ">
            <h1>Certificate</h1>

            <div className="d-flex justify-content-center">
                <div className="cert1">
                    <div className="cert-box" >
                        <img src={mern} data-bs-toggle="modal" data-bs-target="#exampleModal" />
                        <h5>MERN Stack Development</h5>
                    </div>
                    {/* <!-- Button trigger modal --> */}


                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">

                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body modal-xl">
                                    <img src={mern} className="fluid" />


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="cert2">
                    <div className="cert-box" >
                        <img src={ged} data-bs-toggle="modal" data-bs-target="#exampleModal2" />
                        <h5>GED</h5>
                    </div>
                    {/* <!-- Button trigger modal --> */}


                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">

                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body modal-xl">
                                    <img src={ged} className="fluid" />


                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="cert3">
                    <div className="cert-box" >
                        <img src={degin} data-bs-toggle="modal" data-bs-target="#exampleModal3" />
                        <h5>Web Degin</h5>
                    </div>
                    {/* <!-- Button trigger modal --> */}


                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">

                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body modal-xl">
                                    <img src={degin} className="fluid" />


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Certificate
