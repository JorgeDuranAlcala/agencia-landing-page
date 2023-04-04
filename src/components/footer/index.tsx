import styles from './styles.module.css'

export default function Footer() {

	return (
		<footer className={styles.footer}>
			<div className={styles.socialMediaContainer}>
				<span>Instragram</span>
				<span>Twitter</span>
				<span>Whatsapp</span>
			</div>
		</footer>
	)
}
