import React from 'react'
import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'
//arreglo fuera de componente para evitar renderizarlo en cada render
const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
]
export const Navbar = () => {
  return (
     <nav className={styles['menun-container']}>
        {/* <ActiveLink text="Home" href="/"></ActiveLink> 
        <ActiveLink text="About" href="/about"></ActiveLink>
        <ActiveLink text="Contact" href="/contact"></ActiveLink>
  <ActiveLink text="Pricing" href="/pricing/"></ActiveLink>*/}
        {menuItems.map(item => (
            <ActiveLink key={item.text} text={item.text} href={item.href}></ActiveLink>
        ))}
      </nav>
  )
}
