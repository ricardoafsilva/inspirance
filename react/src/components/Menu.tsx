import React, { Component, MouseEvent } from 'react'
import cx from 'classnames'

import iconHome from './../../public/images/icon-home.png'
import iconHomeActive from './../../public/images/icon-home-active.png'
import iconSearch from './../../public/images/icon-search.png'
import iconSearchActive from './../../public/images/icon-search-active.png'
import iconRandom from './../../public/images/icon-random.png'
import iconRandomActive from './../../public/images/icon-random-active.png'
import iconFavorite from './../../public/images/icon-favorite.png'
import iconFavoriteActive from './../../public/images/icon-favorite-active.png'

import './Menu.scss'

const menuItems: MenuItemInterface[] = [
    {
        title: 'Home',
        iconRegular: iconHome,
        iconActive: iconHomeActive,
        url: '/'
    },
    {
        title: 'Search',
        iconRegular: iconSearch,
        iconActive: iconSearchActive,
        url: '/search'
    },
    {
        title: 'Surprise',
        iconRegular: iconRandom,
        iconActive: iconRandomActive,
        url: '/surprise'
    },
    {
        title: 'Saved',
        iconRegular: iconFavorite,
        iconActive: iconFavoriteActive,
        url: '/saved'
    }
]

type State = {
    selected: number,
}

class Menu extends Component<{}, State> {
    state: State = {
        selected: 0
    }

    handleClick = (index: number, url: string) => (e: MouseEvent) => {
        e.stopPropagation()

        this.setState({
            selected: index
        }, () => window.location.href = url)
    }

    render() {
        const items: JSX.Element[] = menuItems.map((item: MenuItemInterface, index: number) => {
            let currentActive: boolean = index === this.state.selected

            return <li className={cx('menu-item', currentActive && 'active')} onClick={this.handleClick(index, item.url)} key={`menu-item-${index}`}>
                <img className='item-icon' src={currentActive ? item.iconActive : item.iconRegular} />
                <p className='item-title'>{item.title}</p>
            </li>
        })

        return (
            <div className='main-menu-container'>
                <ul className='menu-list'>
                    {items}
                </ul>
            </div>
        )
    }
}

export default Menu
