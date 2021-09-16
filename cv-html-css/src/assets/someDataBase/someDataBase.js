import { faGithub, faInstagram, faVk, faFacebook, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'

export const socialLinksList = [
  {
    text: 'github.com/kryvetski-andrei',
    link: 'https://github.com/kryvetski-andrei', 
    icon: faGithub,
    isActive: true
  },
  {
    text: 'instagram.com/kryvecki',
    link: 'https://www.instagram.com/kryvecki/', 
    icon: faInstagram,
    isActive: true
  },
  {
    text: 'vk.com/kryvecki',
    link: 'https://vk.com/kryvecki', 
    icon: faVk,
    isActive: true
  },
  {
    text: 'facebook.com/kryvecki',
    link: 'https://www.facebook.com/', 
    icon: faFacebook,
    isActive: true
  },
  {
    text: 'ru.linkedin.com/',
    link: 'https://ru.linkedin.com/', 
    icon: faLinkedin,
    isActive: true
  },
  {
    text: 'andrei-kryvetski#8943',
    icon: faDiscord,
    isActive: false
  },
  {
    text: 'kryvetskistud@gmail.com',
    icon: faMailBulk,
    isActive: false
  },
]