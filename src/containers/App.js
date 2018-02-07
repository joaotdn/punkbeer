import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import PropTypes from 'prop-types'
const { Header, Content, Footer } = Layout
import { ConnectedRouter } from 'connected-react-router'
import routes from '../routes'

const App = ({ history }) => {
  return (
    <Layout className="App">
        <Header>
            <a 
                onClick={(e) => { history.push('/') }}
                style={{
                    display: 'block',
                    width: '100%',
                    padding: 30,
                    textAlign: 'center'
                }}
            >
                <div className="logo" />
                <br />
                <span>Sample PunkApi React Application</span>
            </a>
        </Header>

        <Content>
            <Row>
                <Col sm={24} lg={{ span: 12, offset: 6 }}>
                    <ConnectedRouter history={history}>
                        { routes }
                    </ConnectedRouter>
                </Col>
            </Row>
        </Content>

        <Footer>
            <span>PunkBeer &copy;2018 Created by @joaotdn</span>
        </Footer>
    </Layout>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
