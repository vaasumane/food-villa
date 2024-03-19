import { useRouteError } from "react-router-dom";

const ErrorPage = ()=>{
    const err = useRouteError();
    return(
        <>
        <h1>oops!!</h1>
        <h2>Something went wrong!!</h2>
        <h2>{err?.status + " : "+err?.statusText}</h2>
        </>
    )
}
export default ErrorPage;