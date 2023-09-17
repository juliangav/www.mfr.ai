import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/mfr-logo.svg" alt="mfr.AI Logo" className={styles.logo} />
      </footer>
    </>
  )
}
