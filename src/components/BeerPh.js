import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Tooltip  } from 'antd'

const BeerPh = ({ph}) => (
    <div>
        <Tooltip title="ph">
            <Icon type="dot-chart" /> {` ${ph}`}
        </Tooltip>
    </div>
)

BeerPh.propTypes = {
    ph: PropTypes.number
}

export default BeerPh

