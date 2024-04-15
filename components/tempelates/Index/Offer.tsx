import React, {useState} from "react";
import Swal from 'sweetalert2'
import {Button, Form} from "react-bootstrap";
import axios from "axios";
import * as formik from 'formik';
import * as yup from 'yup';

const Offer = () => {
    const [email, setEmail] = useState("");
    const {Formik} = formik;

    const schema = yup.object().shape({
        email: yup.string().required().email(),
    });

    const addEmail = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:4000/newsLetters", {
            email
        });
        if (response.status === 201) {
            setEmail("");
            Swal.fire({
                title: "Joined",
                text: "Join Successfully 🎉",
                icon: "success"
            });
        }
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <Formik

            validationSchema={schema}
            onSubmit={(e) => addEmail(e)}
            initialValues:any={
                {email: ""}
            }
        >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
            <div class="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
                <div class="container py-5">
                    <h1 class="display-3 text-primary mt-3">50% OFF</h1>
                    <h1 class="text-white mb-3">Sunday Special Offer</h1>
                    <h4 class="text-white font-weight-normal mb-4 pb-3">
                        Only for Sunday from 1st Jan to 30th Jan 2045
                    </h4>
                    <Form onSubmit={addEmail} class="form-inline justify-content-center mb-4">
                        <div className="input-group">
                            <Form.Group className="mr-4" controlId="formBasicEmail">
                                <Form.Control type="email" onChange={handleChangeEmail} style={{width: 400}}
                                              placeholder="Enter email"/>
                            </Form.Group>
                            <div className="input-group-append">
                                <Button className="ml-4" type={"submit"} size="sm" style={{height: 40, width: 120}}
                                        variant="primary">Join</Button>
                            </div>
                        </div>
                    </Form>
                    {/*<form class="form-inline justify-content-center mb-4">*/}
                    {/*    <div class="input-group">*/}
                    {/*        <input*/}
                    {/*            type="text"*/}
                    {/*            class="form-control p-4"*/}
                    {/*            placeholder="Your Email"*/}
                    {/*            style={{height: "60px"}}*/}
                    {/*            value={email}*/}
                    {/*            onChange={(e) => setEmail(e.target.value)}*/}
                    {/*        />*/}
                    {/*        <div class="input-group-append">*/}
                    {/*            <Button variant="primary" size="sm">Join</Button>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
            </div>
            )}
        </Formik>
    );
}

export default Offer;
