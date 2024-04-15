import React from 'react';
import Slider from "@/components/tempelates/Index/Slider";
import About from "@/components/tempelates/Index/About";
import Services from "@/components/tempelates/Index/Services";
import Offer from "@/components/tempelates/Index/Offer";
import 'sweetalert2/src/sweetalert2.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
const Index = (props: any) => {
    return (
        <>
            <Slider/>
            <About/>
            <Services data={props.data.services}/>
            <Offer/>
        </>
    );
};

export async function getStaticProps() {
    const data = await fetch('http://localhost:4000/services')
    const services = await data.json();
    return {
        props: {
            data: {
                services
            }
        },
        revalidate: 60 * 60 * 12,
    }
}

export default Index;
