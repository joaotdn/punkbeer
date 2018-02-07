import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Tooltip } from 'antd'

const BeerAbv = ({abv}) => (
    <div>
        <Tooltip title="abv">
            <Icon type="dashboard" /> {` ${abv}%`}
        </Tooltip>
    </div>
)

BeerAbv.propTypes = {
    abv: PropTypes.number
}

export default BeerAbv

