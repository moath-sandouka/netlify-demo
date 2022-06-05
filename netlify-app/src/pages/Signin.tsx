import { useState } from "react";
import { useFormik } from "formik";
import { constRoutes } from "../constants/generalConstants";
import { Link } from "react-router-dom";
import { USER_LOGIN_TYPE } from "../constants/interfaces";
import { useMutation, useQueryClient } from "react-query";
import { login } from "../services/user";

function Signin() {
    const queryClient = useQueryClient();
    const [signInResults, setSignInResults] = useState({});

    const { mutate } = useMutation(login, {
        onSuccess: (response) => {
            console.log(response);
            setSignInResults(response);
        },
        onError: () => {
            alert("there was an error");
            setSignInResults({});
        },
        onSettled: () => {
            queryClient.invalidateQueries("create");
        },
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values: USER_LOGIN_TYPE) => {
            mutate(values);
        },
    });
    return (
        <div className="container col-md-6 offset-md-3 col-xs-12">
            <div className="sign-banner">
                <h1>Sign in</h1>
                <Link to={constRoutes.SIGNUP}>Need an account?</Link>
            </div>
            <form
                className="ng-pristine ng-valid ng-valid-email"
                onSubmit={formik.handleSubmit}
            >
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
                    Sign in
                </button>
            </form>
        </div>
    );
}

export default Signin;
