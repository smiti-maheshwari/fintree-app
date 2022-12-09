import React, { Fragment } from "react";
import { useSelector } from "react-redux";
// import { Redirect, Route } from "react-router-dom";
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const chalja = (isAdmin, isAuthenticated, user) => {
    if(isAuthenticated === false) {
        return <Navigate to="/loginGrowPlants" />;
    }
    if ( isAdmin === true && user.role !== "admin") {
        return <Navigate to="/loginGrowPlants " />;
    }
    return <Outlet />;
}

const ProtectedRoute = ({isAdmin}) => {
    const { loading, isAuthenticated, user } = useSelector((state) => state.user);
    const navigate = useNavigate();
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return (
            <Fragment>
                {loading == false && chalja(isAdmin, isAuthenticated, user)}
            </Fragment>
          );
}

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Redirect to="/login" />;
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               return <Redirect to="/login" />;
//             }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

export default ProtectedRoute;