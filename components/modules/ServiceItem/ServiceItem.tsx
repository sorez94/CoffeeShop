import React from "react";

import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";

const ServiceItem = (props: any) => {
    const {title, desc, img, icon} = props
    return (
        <div className="col-lg-6 mb-5">
            <div className="row align-items-center">
                <div className="col-sm-5">
                    <img className="img-fluid mb-3 mb-sm-0" src={img} alt=""/>
                </div>
                <div className="col-sm-7">
                    <h4
                        style={{
                            display: "flex",
                            alignItems: "baseline",
                        }}
                    >
                        {/* <i class="fa fa-truck service-icon"></i> */}

                        <div
                            style={{
                                background: "#da9f5b",
                                borderRadius: "100%",
                                height: "35px",
                                width: "40px",
                                textAlign: "center",
                            }}
                        >
                            <FontAwesomeIcon
                                // icon={faTruck}
                                icon={Icons[icon]}
                                style={{fontSize: "1rem", margin: "0,auto"}}
                            />
                        </div>

                        <p className="ml-3">{title}</p>
                    </h4>
                    <p className="m-0">{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceItem;