import styles from './styles.module.css'
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebook  } from 'react-icons/fa'

export default function Footer() {

	return (
		<footer className={styles.footer}>
			<div className={styles.socialMediaContainer}>
				<span><FaInstagram/></span>
				<span><FaTwitter/></span>
				<span><FaWhatsapp/></span>
				<span><FaFacebook/></span>
			</div>
		</footer>
	)
}
