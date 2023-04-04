import styles from './styles.module.css'

export default function NavBar() {

	return (
		<nav className={styles.nav}>
			<h4>Logo</h4>
			<ul className={styles.ul}>
				<li>Home</li>
				<li>Services</li>
				<li>Contacts</li>
			</ul>
		</nav>
	)
}
