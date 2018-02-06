import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List, Avatar, Button, Spin } from 'antd'

class Home extends Component {
    render() {
        const { beers } = this.props
        return (
            <List 
                className="list-beers"
                dataSource={beers}
                renderItem={item => (
                    <List.Item actions={[<a>edit</a>, <a>more</a>]}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.image_url} />}
                            title={<a href="#">{item.name}</a>}
                            description={item.description}
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
