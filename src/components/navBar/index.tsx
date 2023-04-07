"use client"
import React from 'react'
import styles from './styles.module.css'

export default function NavBar() {

	const navRef = React.useRef<HTMLElement | null>(null);

	React.useEffect(() => {
			
			function onScroll(e: Event) {

				if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
					navRef?.current?.classList.add('bg-glass')
				} else {
					navRef?.current?.classList.remove('bg-glass')
				}

			}

			window.addEventListener('scroll', onScroll)

			return () => {
				window.removeEventListener('scroll', onScroll)
			}
	}, [])

	return (
		<nav className={styles.nav} ref={navRef}>
			<h4>Logo</h4>
			<ul className={styles.ul}>
				<li><a href="#home">Home</a></li>
				<li><a href="#service">Services</a></li>
				<li><a href="#price">prices</a></li>
				<li><a href="#contactus">Contact Us</a></li>
			</ul>
		</nav>
	)
}
