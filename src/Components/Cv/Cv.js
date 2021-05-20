import React from 'react'
import './Cv.css'

import cv from './../../pdf/Prataps CV.pdf'
import pdf from './../../image/pdf-icon.png'



export function Cv() {
    return (
        <div className="cv-background">
            <div className="container">
                <div className="cv-box">

                    <a href={cv} download="cv"> <img src={pdf} />
                        <p>DOWNLOAD MY CV</p>
                    </a>

                </div>

            </div>
        </div>
    )
}


