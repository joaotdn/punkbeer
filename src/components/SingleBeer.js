import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Card, Button, Icon } from 'antd'
import BeerAbv from './BeerAbv'
import BeerSince from './BeerSince'
import BeerPh from './BeerPh'
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
                        title={beer.name}
                        actions={[<BeerAbv abv={beer.abv} />, <BeerSince since={beer.first_brewed} />, <BeerPh ph={beer.ph} />]}
                        extra={<Button type="primary" onClick={this.goBack.bind(this)}><Icon type="left" />Go back</Button>}
                        hoverable
                        style={{ width: '100%' }}
                    >
                        <Row className="beer-img">
                            <div style={{ backgroundImage: 'url("https://cdn.shopify.com/s/files/1/1793/7601/products/american-wheat-beer-glass-spiegelau-filled_2000x.jpg?v=1517255457")' }}></div>
                        </Row>
                        <Meta
                            description={beer.description}
                        />
                    </Card>
                ) : null }
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