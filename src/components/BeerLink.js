import React from 'react'
import { Link as RouterLink, Route, Link } from 'react-router-dom'

const BeerLink = ({label, to}) => (
    <Route
        path={to}
    >
        {({match}) => (
            <Link to={to}>{label}</Link>
        )}
    </Route>
)

export default BeerLink