import React, { Component } from 'react'
import './Loading.css'

    function WithLoading(Component) {
        return function WihLoadingComponent({ loader, ...props }) {
          if (!loader){ 
              return (<div className="loader"></div>)
            }
            else 
            return<Component {...props} />;
        }

}
export default WithLoading ;