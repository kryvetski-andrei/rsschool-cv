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
    text: 'ru.linkedin.com/kryvecki',
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

export const educationList = [
  {
    place: 'Gymnasium №3',
    date: '2002 - 2013',
    location: 'Pinsk, Belarus',
    link: 'http://gymn3.pinsk.edu.by/',
    description: 'Primary and Secondary school',
    isComplited: true
  },
  {
    place: 'Belarusian National Technical University',
    date: '2013 - 2018',
    location: 'Minsk, Belarus',
    link: 'https://bntu.by/',
    description: 'Major is Civil Engineering',
    isComplited: true
  },
  {
    place: 'The Rolling Scopes School',
    date: '2021',
    location: 'Minsk, Belarus',
    link: 'https://rs.school/',
    description: 'Web development',
    isComplited: false
  }
]

export const workAndExpList = [
  {
    place: 'Industrial house building rental company',
    date: '2014',
    location: 'Minsk, Belarus',
    link: 'http://mapid.by/',
    description: 'As a builder',
    isComplited: true
  },
  {
    place: 'PB Boulangerie Bistro',
    date: '2016',
    location: 'South Wellfleet, Massachusetts, USA',
    link: 'https://pbboulangeriebistro.com/',
    description: 'As a runner',
    isComplited: true
  },
  {
    place: 'Stop & Shop',
    date: '2016',
    location: 'Orleans, Massachusetts, USA',
    link: 'https://stopandshop.com/',
    description: 'As a merchandiser',
    isComplited: true
  },
  {
    place: 'Border guards',
    date: '2019 - 2020',
    location: 'Nizhniy Terebezhov, Belarus',
    link: 'https://stopandshop.com/',
    description: 'As a soldier',
    isComplited: true
  },
  {
    place: '21vek.by',
    date: '2021 - ...',
    location: 'Minsk, Belarus',
    link: 'https://www.21vek.by/',
    description: 'As a seller',
    isComplited: false
  },

]