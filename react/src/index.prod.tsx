import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Home from './containers/Home.tsx'

import styles from './Main.scss'

export default class CustomHome extends HTMLElement {
    createHome() {
        return React.createElement(Home, React.createElement('slot'))
    }

    connectedCallback() {
        const mountPoint = document.createElement('span')
        const style = document.createElement('style')

        style.type = 'text/css'
        style.append(styles)

        const shadowRoot = this.attachShadow({
            mode: 'open'
        })

        shadowRoot.appendChild(mountPoint)
        shadowRoot.appendChild(style)

        // Hack for event triggering correction (Fabio's suggestion)
        Object.defineProperty(mountPoint, 'ownerDocument', {
            value: shadowRoot
        })
        shadowRoot.createElement = (...args) => document.createElement(...args)

        ReactDOM.render(this.createHome(), mountPoint)
    }
}

window.customElements.define('inspirance-home', CustomHome)
