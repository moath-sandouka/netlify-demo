import React from "react";
import { useFormik } from "formik";
import { constRoutes } from "../constants/constRoutes";
import { Link } from "react-router-dom";

type formData = {
    username: string;
    email: string;
    password: string;
};

function Signup() {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        onSubmit: (values: formData) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="container col-md-6 offset-md-3 col-xs-12">
            <div className="sign-banner">
                <h1>Sign up</h1>
                <Link to={constRoutes.SIGNIN}>Have an account?</Link>
            </div>
            <form
                className="ng-pristine ng-valid ng-valid-email"
                onSubmit={formik.handleSubmit}
            >
                <input
                    className="form-control form-control-lg mb-3"
                    id="username"
                    name="username"
                    type="username"
                    placeholder="Username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                <input
                    className="form-control form-control-lg mb-3"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <input
                    className="form-control form-control-lg mb-3"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />

                <button
                    type="submit"
                    className="btn btn-lg btn-primary pull-xs-right ng-binding"
                >
                    Sign up
                </button>
            </form>
        </div>
    );
}

export default Signup;
