import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import rootReducer from './reducers'
import { getAllBeers } from './actions/beers'
import { LocaleProvider } from 'antd'
import en_US from 'antd/lib/locale-provider/en_US'
import './theme.less'

const history = createBrowserHistory()

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      ...middleware
    ),
  ),
)

store.dispatch(getAllBeers())

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <LocaleProvider locale={en_US}><App history={history} /></LocaleProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./containers/App', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
}
