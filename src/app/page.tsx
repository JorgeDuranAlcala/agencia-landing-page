import Image from 'next/image'
import styles from './page.module.css'


export default function Home() {
  return (
    <main className={styles.main}>
			<section className={styles.mainSection}>
			<div className={styles.hero} >
				<h1>
					Lorem ipsum <br/>
					Ipsum dolor <br/>
					Magna sit Amet <br/>
				</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
				</p>
				<a className={styles.btnHero}>
					Build me a website
				</a>
			</div>
			<div className={styles.imgContainer}>
				<Image src="/compu.jpg" width={400} height={400} alt="girl-smiling"/>
				<div className={styles.box}></div>
			</div>
		 </section>
		 <section className={styles.servicesSection}>
				<h3>Our Services</h3>	
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<Image src="/laptop-code.svg" width={80} height={80} alt="laptop-code"/>
						<h4>Service 1</h4>
						<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
					<div className={styles.card}>
						<Image src="/server.svg" width={80} height={80} alt="server"/>
						<h4>Service 2</h4>
						<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>
					</div>
				 <div className={styles.card}>
					<Image src="/cloud-phone.svg" width={80} height={80} alt="cloud-phone"/>
						<h4>Service 3</h4>
						<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</p>

					</div>
				</div>
		 </section>
		 <section className={styles.contactSection}>
			<h3>Contact Us</h3>
			<form className={styles.contactForm}>
				<input type="email" placeholder="Email"/>
				<input type="text" placeholder="Nombre Completo" />
				<textarea placeholder="Deja tu mensaje aqui">
				</textarea>
				<button type="submit">Enviar</button>
			</form>
		</section>
    </main>
  )
}
