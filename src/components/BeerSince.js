import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Tooltip } from 'antd'

const BeerSince = ({since}) => (
    <div>
        <Tooltip title="Since">
            <Icon type="calendar" /> {` ${since}`}
        </Tooltip>
    </div>
)

BeerSince.propTypes = {
    since: PropTypes.string
}

export default BeerSince

