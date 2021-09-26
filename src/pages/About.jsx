import React from 'react'
import logo from '../Assets/hitesh.png'


export default function About() {
    return (
        <section className="section pt-5">
            <img src={logo} alt="afdbj" height="auto" width="400px" className="mx-auto d-block"/>
            <h1 className="text-center"> Hi, I’m Hitesh. Nice to meet you. </h1>
            <p className="text-center pl-5 pr-5 pt-3">
                Since beginning my journey as a freelance designer nearly 10 years ago, I've done
                remote work for agencies, consulted for startups, <br/> and collaborated with talented
                people to create digital products for both business and consumer use. I'm quietly<br/>
                confident, naturally curious, and perpetually working on improving my chops one
                design problem at a time.
            </p>
        </section>
    )
}
