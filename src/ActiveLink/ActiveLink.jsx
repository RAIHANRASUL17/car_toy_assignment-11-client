import React from 'react';
import { NavLink } from 'react-router-dom';


const ActiveLink = ({to, children}) => {
    return (
        <div >
            <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "bg bg-info p-2 rounded"
                        : ""
                    }
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;