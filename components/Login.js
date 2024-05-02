import React from "react";
import { Formik } from "formik";

const Login = () => (
  <>
    <div className="p-5">
        <h1 className="text-4xl text-center py-5 font-bold">Login</h1>
      <div className="flex justify-center">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
          className="h-28 w-2h-28"
        />
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className="w-1/3 mx-auto">
            <form onSubmit={handleSubmit}>
              <div>
                <label className="py-1">Email </label>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="w-full border border-slate-400 rounded-md p-2"
                />
                
               <p className="text-red-500"> {errors.email && touched.email && errors.email}</p>

              </div>
              <div>
              <label className="py-1">Password </label>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="w-full border border-slate-400 rounded-md p-2"
                />
               <p className="text-red-500"> {errors.password && touched.password && errors.password}</p>
              </div>
              <div>
                <button type="submit" className="my-5 p-2  bg-black text-white  w-full hover:bg-transparent border-2 border-black hover:text-black" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  </>
);

export default Login;
