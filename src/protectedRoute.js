import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem('token')
    return <Route {...rest} render={props => (
        !token ? (<Redirect to='/login' />) : (<Component {...props} />)
    )}  >

    </Route>
}

export default ProtectedRoute