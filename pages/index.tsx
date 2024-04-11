import React from 'react';
import Slider from "@/components/tempelates/Index/Slider";
import About from "@/components/tempelates/Index/About";
import Services from "@/components/tempelates/Index/Services";
import axios from 'axios';
import {log} from "node:util";

const Index = (props: any) => {
    return (
        <>
            <Slider/>
            <About/>
            <Services data = {props.data.services} />
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
        revalidate:     60 * 60 * 12,
    }
}

export default Index;