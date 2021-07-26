import React from 'react'
import './Footer.css'
import Resume from '../../Assets/BILLY DERRINGER Dev_Resume_2021.pdf'

function Footer(props) {

    let icons = [
        {
            href:"https://www.linkedin.com/in/billy-derringer-704262114/",
            label:"LinkedIn",
            classNames:"linked-in ",
            iClassNames:"fab fa-linkedin "
        },
        /*{
            href:"https://github.com/billyderringer",
            label:"GitHub",
            classNames:"github-light ",
            iClassNames:"fab fa-github-alt "
        },
        {
            href:"https://codepen.io/billyderringer/",
            label:"CodePen",
            classNames:"",
            iClassNames:"fab fa-codepen "
        }*/
        {
            href:Resume,
            label:"Resume",
            classNames:"",
            iClassNames:"fab fa-black-tie "
        }
    ]

    return(
        <section id="container-footer"
             className="center-all-flex flex-column">
            <h2 className="section-title caps">Connect With Me</h2>
            <a href="mailto:billyderringer7@gmail.com"
               className="contact-button">
                <i className="fas fa-envelope-square" />
                billyderringer7@gmail.com
            </a>
            <a href="tel:billyderringer7@gmail.com"
               className="contact-button">
                <i className="fas fa-mobile-alt" />
                214.580.0284
            </a>
            <section id="contact-bar" className="flex-row">
                {
                    icons.map((item,i) =>
                        <a href={item.href}
                           key={i}
                           target="_blank"
                           rel="noopener noreferrer"
                           className={item.classNames + "contact-button-social"}
                        >
                            <i className={item.iClassNames + "contact-icon"} />
                            {item.label}</a>
                    )
                }
            </section>
            <footer>
                <h6>© 2021 Billy Derringer</h6>
            </footer>
        </section>
    )
}

export default Footer