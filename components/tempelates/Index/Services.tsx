import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React, {useEffect} from "react";

function Services(props: any) {
    console.log(props);
    return (
        <div className="container-fluid pt-5">
            <div className="container">
                <div className="section-title">
                    <h4
                        className="text-primary text-uppercase"
                        style={{letterSpacing: "5px"}}
                    >
                        Our Services
                    </h4>
                    <h1 className="display-4">Fresh &amp; Organic Beans</h1>
                </div>
                <div className="row">
                    {props.data.map((services: any) => (
                            <ServiceItem
                                title={services.title}
                                desc={services.desc}
                                img={services.img}
                                icon={services.icon}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;