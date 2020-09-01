import React from 'react'
import ReactDOM from 'react-dom'
import retargetEvents from 'react-shadow-dom-retarget-events'
import Home from './containers/Home.tsx'

import * as styles from './Main.scss'

class HomeProd extends HTMLElement {
    connectedCallback() {
        const mountPoint = document.createElement('div')
        mountPoint.classList.add('main-container')

        const homeStyles = document.createElement('style')
        homeStyles.type = 'text/css'
        homeStyles.append(styles)

        const shadowRoot = this.attachShadow({ mode: 'open' })
        shadowRoot.appendChild(mountPoint)
        shadowRoot.appendChild(homeStyles)

        ReactDOM.render(React.createElement(Home), mountPoint)
        retargetEvents(shadowRoot)
    }
}

export default HomeProd

window.customElements.define('inspirance-main', HomeProd)
