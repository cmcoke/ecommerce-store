import styles from '@/styles/Footer.module.scss'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'

});

const Footer = () => {

  // get the current year
  const d = new Date();
  let year = d.getFullYear();

  return (
    <footer className={`${styles.footer} ${openSans.className}`}>

      <div className={styles.topSection}>

        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>

        <p>Our product offering consists of women's apparel and accessories, intimates, home furniture and décor, beauty and gifts. Each caters to the lifestyle of our five muses: soft & delicate, boho chic, easy cool, elegant classic, and modern sporty. </p>

      </div>

      <hr />

      <div className={styles.bottomSection}>

        <span>© {year} KONSEPT. All Rights Reserved</span>

        <div>
          <ul role='list'>
            <li><img src="/images/facebook.png" alt="facebook logo" /></li>
            <li><img src="/images/twitter.png" alt="twitter logo" /></li>
            <li><img src="/images/instagram.png" alt="instagram logo" /></li>
            <li><img src="/images/pinterest.png" alt="pinterest logo" /></li>
            <li><img src="/images/tiktok.png" alt="tiktok logo" /></li>
          </ul>
        </div>

      </div>

    </footer>
  )
}
export default Footer