import styles from './styles.module.css'

export default function NavBar() {

	return (
		<nav className={styles.nav}>
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
