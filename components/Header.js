import Image from "next/image"
import Link from "next/link"
import styles from '@/styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>

      <Link href={'/'}>
        <Image src={'/images/logo.png'} width={165} height={58} priority alt='logo' />
      </Link>

      <div className={styles.userInformation}>
        <Link href={'/'}>
          <Image src={'/images/profile.png'} width={24} height={24} priority alt="user's profile" />
        </Link>

        <div className={styles.shoppingCart}>
          <Image src={'/images/cart.png'} width={24} height={24} priority alt="user's shopping cart" />
        </div>
      </div>

    </header>
  )
}
export default Header