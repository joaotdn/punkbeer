import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, Icon } from 'antd'
const { Meta } = Card

class SingleBeers extends Component {
    goBack() {
        this.props.history.goBack()
    }

    render() {
        console.log(this.props)
        const { beers } = this.props, 
              beerId = this.props.match.params.id,
              beer = (beers && beerId) ? beers.find(beer => beer.id==beerId) : null

        return (
            <div>
                {beer ? (
                    <Card
                        hoverable
                        style={{ width: '100%' }}
                        actions={[<Button type="primary"><Icon type="left" />Go back</Button>]}
                    >
                        <Meta
                            title={beer.name}
                            description={beer.description}
                        />
                    </Card>
                ) : (<a onClick={this.goBack.bind(this)}>Voltar</a>) }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        beers: state.beers
    }
}

export default connect(mapStateToProps)(SingleBeers)