import Image from 'next/image'
import styles from './page.module.css'
import ContactForm from '../components/contact-form'

export default function Home() {


  return (
    <main className={styles.main}>
			<section className={styles.mainSection} id="home">
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
		 <section className={styles.servicesSection} id="service">
				<h3>Our Services</h3>	
				<div className={styles.cardContainer}>
					<div className={styles.card}>
						<Image src="/laptop-code.svg" width={80} height={80} alt="laptop-code"/>
						<h4>Service 1</h4>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry
						</p>
					</div>
					<div className={styles.card}>
						<Image src="/server.svg" width={80} height={80} alt="server"/>
						<h4>Service 2</h4>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry
						</p>
					</div>
				 <div className={styles.card}>
					<Image src="/cloud-phone.svg" width={80} height={80} alt="cloud-phone"/>
						<h4>Service 3</h4>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry
						</p>

					</div>
				</div>
		 </section>
<section className="pricing-section" id="price">
            <div className="pricing ">
                <div className="item">
                    <h3 className="tier">Basico</h3>
                    <p className="desc">Un sitio web basico personalizado</p>
                    <div className="price"><span className="currency">$</span>150<span className="period">1 month</span></div>
                    <ul className="features-list">
                        <li className="features">Lorem Ipsum</li>
                        <li className="features">Lorem Ipsum</li>
                        <li className="features">Lorem Ipsum</li>
                    </ul>
                    <button className="cta">Pagar ahora</button>
                </div>
							  <div className="item">
                    <h3 className="tier">Pequeño Negocio</h3>
                    <p className="desc">Para pequeños negocios</p>
                    <div className="price"><span className="currency">$</span>600<span className="period">1 month</span></div>
                    <ul className="features-list">
                        <li className="features">Lorem Ipsum</li>
                        <li className="features">Lorem Ipsum</li>
                        <li className="features">Lorem Ipsum</li>
                    </ul>
                    <button className="cta">Pagar ahora</button>
                </div>
								<div className="item">
                    <h3 className="tier">Empresas</h3>
                    <p className="desc">Para empresas</p>
                    <div className="price"><span className="currency">$</span>1200<span className="period">1 month</span></div>
                    <ul className="features-list">
                        <li className="features">Lorem Ipsum</li>
                        <li className="features">Lorem Ipsum</li>
                        <li className="features">Lorem Ipsum</li>
                    </ul>
                    <button className="cta">Pagar ahora</button>
                </div>

            </div>
        </section>
		 <section className={styles.contactSection} id="contactus">
			<h3>Contact Us</h3>
				<ContactForm/>
				</section>
    </main>
  )
}
