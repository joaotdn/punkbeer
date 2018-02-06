import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Avatar, Button, Spin } from 'antd'
import BeerLink from './BeerLink'

class Home extends Component {
    showBeer(beer_id) {
        this.props.history.push('/beers/' + beer_id)
    }

    render() {
        const { beers } = this.props
        return (
            <List 
                className="list-beers"
                dataSource={beers}
                renderItem={item => (
                    <List.Item actions={[<Button type="primary" icon="info-circle-o" onClick={this.showBeer.bind(this, item.id)}>More info</Button>]}>
                        <List.Item.Meta
                            title={<BeerLink to={'/beers/' + item.id} label={item.name} />}
                            description={item.tagline}
                        />
                    </List.Item>
                )}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        beers: state.beers
    }
}

export default connect(mapStateToProps)(Home)
