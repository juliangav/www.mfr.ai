import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import styles from '@components/Landing.module.css'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Weekly AI & Blockchain Brief for Manufacturers — mfr.AI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.test}>
        {/* <Header title="Welcome to my app!" /> */}
        <img src="/mfr-logo.svg" alt="mfr.AI Logo" className={styles.logo} />
        <p className={styles.intro}>
        Weekly AI & Blockchain Brief for Manufacturers.
        </p>

        <div id="mc_embed_shell">
    <div id="mc_embed_signup">
        <form action="https://mfr.us21.list-manage.com/subscribe/post?u=dcf52e47dfb9d59ea87074aa6&amp;id=65fbd0877a&amp;f_id=00afe2e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self">
            <div id="mc_embed_signup_scroll">
                {/* Using placeholder attribute for the input instead of label */}
                <input type="email" name="EMAIL" className="required email emailInput" id="mce-EMAIL" required placeholder="Email Address" value="" />

                <div id="mce-responses" className="clear foot">
                    <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                    <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                    <input type="text" name="b_dcf52e47dfb9d59ea87074aa6_65fbd0877a" tabindex="-1" value="" />
                </div>
                <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button subscribeButton">Subscribe</button>
                </div>
        </form>
    </div>
</div>


      </main>

      {/* <Footer /> */}
    </div>
  )
}
