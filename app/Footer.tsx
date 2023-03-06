import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaTelegram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer__socialsContainer">
            <div className="footer__socials">
                <Link href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </Link>
                <Link href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                    <FaFacebook />
                </Link>
                <Link href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                    <FaTwitter />
                </Link>
                <Link href="https://www.telegram.com/" target="_blank" rel="noreferrer">
                    <FaTelegram />
                </Link>
                <Link href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
                    <FaWhatsapp />
                </Link>
            </div>
        </div>

        <div className="footer__content">
            <div className="footer__linksContainer">
                <div className="footer__links">
                    <Link href="/">HOME</Link>
                    <Link href="/">ABOUT</Link>
                    <Link href="/">CONTACT</Link>
                    <Link href="/">SERVICE</Link>
                </div>
                <div className="footer__links">
                    <Link href="/">Vission</Link>
                    <Link href="/">Mission</Link>
                    <Link href="/">Value</Link>
                </div>
            </div>

            <div className="footer__logoContainer">
                <div className="footer__logo">
                    <Image src="/icon.png" alt="logo" width={100} height={100} />
                </div>
            </div>

            <div className="footer__emailContainer">
                <form className="footer__email" action="" method="post" encType="text/plain">
                    <input name='name' type="text" placeholder="Name" />
                    <textarea name="message" id="message" placeholder='your message'></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>

        <div className="footer__copyRightContainer">
            <div className="footer__copyRight">
                <p>© 2021 All Rights Reserved. Designed and developed by <Link href={"https://afriopia.com"}>Afriopia Unified Systems</Link></p>
            </div>
        </div>
    </div>
  )
}
