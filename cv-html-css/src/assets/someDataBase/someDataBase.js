import { faGithub, faInstagram, faVk, faFacebook, faLinkedin, faDiscord,
         faHtml5, faCss3, faSass, faJs, faNodeJs, faReact, faAngular        
} from '@fortawesome/free-brands-svg-icons'

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

export const skillsList = [
  {
    name: 'html',
    logo: faHtml5,
    progress: 80,
    barColor: '#e34c26',
    example: 
     `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link rel="stylesheet" href="./assets/styles/style.css">
        <title>Museum</title>
      </head>
      <body>
        <header class="header">
          <div class="container__header">
            <a class="logo" href="#">
              <div class="logo__img"></div>
              <h1 class="logo__title">Louvre</h1>
            </a>
      
            <nav class="nav nav-header">
              <ul class="nav__list">
                <li class="nav__item"><a href="#visiting" class="nav__link">Visiting</a></li>
                <li class="nav__item"><a href="#explore" class="nav__link">Explore</a></li>
                <li class="nav__item"><a href="#video" class="nav__link">Video</a></li>
                <li class="nav__item"><a href="#tickets" class="nav__link">Tickets</a></li>
                <li class="nav__item"><a href="#contacts" class="nav__link">Contacts</a></li>
              </ul>
            </nav>
          </div>
        </header>
      
        <main class="main">
          <section class="welcome" id="welcome">
            <div class="container container__welcome">
              <div class="welcome__content">
                <h2 class="welcome__title section-title">Welcome<br>to the Louvre</h2>
                <p class="welcome__description">From the castle to the museum</p>
                <button class="btn btn__welcome">Discover the Louvre</button>
              </div> 
              <div class="welcome__bg"></div>
            </div> 
          </section>
      
          <section class="video" id="video">
            <div class="container container__video">
              <div class="video-player__wrapper">
                <div class="video-player">
                  <div class="video-player__img">
                    <button class="btn-video-player"></button>
                  </div>
      
                  <div class="video-player-footer">
                    <button class="video-player-footer__prev"></button>
                    <button class="video-player-footer__play"></button>
                    <button class="video-player-footer__next"></button>
                    <div class="progress-box">
                      <input type="range" id="time" name="time" min="0" max="100">
                      <label for="time"></label>
                    </div>
                    <button class="video-player-footer__sound"></button>
                    <div class="volume-box">
                      <input type="range" id="volume" name="volume" min="0" max="10">
                      <label for="volume"></label>
                    </div>
                    <button class="video-player-footer__full"></button>
                  </div>
                </div>
                  
      
                <div class="video-player__content">
                  <h2 class="video-player__title section-title">Video journey</h2>
                </div>
              </div>
            </div> 
          </section>
          
        </main>
        <footer class="footer">
          <div class="container__footer">
            <div class="wrapper">
              <div class="logo">
                <div class="logo__img"></div>
                <h2 class="logo__title">Louvre</h2>
              </div>
      
              <nav class="nav nav-header">
                <ul class="nav__list">
                  <li class="nav__item"><a href="#welcome" class="nav__link">Welcome</a></li>
                  <li class="nav__item"><a href="#video" class="nav__link">Video</a></li>
                  <li class="nav__item"><a href="#visiting" class="nav__link">Visiting</a></li>
                  <li class="nav__item"><a href="#tickets" class="nav__link">Tickets</a></li>
                  <li class="nav__item"><a href="#explore" class="nav__link">Explore</a></li>
                  <li class="nav__item"><a href="#contacts" class="nav__link">Contacts</a></li>
                </ul>
              </nav>
            </div>
            
      
            <div class="social-list__wrapper">
              <ul class="social__list">
                <li class="social__item social__item--youtube"><a href="#" class="social__link"></a></li>
                <li class="social__item social__item--instagram"><a href="#" class="social__link"></a></li>
                <li class="social__item social__item--facebook"><a href="#" class="social__link"></a></li>
                <li class="social__item social__item--twitter"><a href="#" class="social__link"></a></li>
                <li class="social__item social__item--pinterest"><a href="#" class="social__link"></a></li>
              </ul>
            </div>
      
          </div> 
        </footer>
      </body>
      </html>
    `,
    lang: 'html'
  },
  {
    name: 'css',
    logo: faCss3, 
    progress: 70, 
    barColor: '#264de4', 
    example: 
   `body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #0081cb33;
    font-family: "Montserrat", sans-serif;
  }
  .ball {
    position: relative;
    bottom: 100px;
    left: calc(100% - 70px);
    width: 100px;
    height: 100px;
    background: #ff0022;
    border-radius: 50%;
    animation: ball-move 4s ease-in-out 2s infinite alternate;
  }
  .ball::after {
    position: absolute;
    content: '';
    top: 50px;
    right: 10px;
    width: 10px;
    height: 10px;
    background: #FFF;
    border-radius: 50%;
  }
  .bar {
    width: 500px;
    height: 25px;
    background: black;
    border-radius: 30px;
    transform: rotate(-15deg);
    filter: drop-shadow(20px 10px 4px gray);
    animation: up-down 4s ease-in-out 2s infinite alternate;
  }
  @keyframes up-down {
    from {transform: rotate(-15deg);}
    to {transform: rotate(15deg);}
  }
  @keyframes ball-move {
    from {left: calc(100% - 70px); transform: rotate(360deg);}
    to {left: calc(0% - 35px); transform: rotate(0deg);}
  }
  .credits {
    position: fixed;
    bottom: 8px;
    right: 2px;
    padding: 10px;
    border-radius: 10px;
    background: #333;
    color: #fff;
    cursor: pointer;
    font-size: 10px;
  }
  .credits a {
    background: #333;
    color: #fff;
    cursor: pointer;
  }
  `, 
  lang: 'css'
  },
  {name: 'sass', 
  logo: faSass, 
  progress: 65,
  barColor: '#cc6699',
  example: 
  `:root {
    --primary-box-color: #112055;
    --primary-box-text: #fff;
    --primary-box-lighter: #357b70;
    --primary-box-darker: #357b70;
    
    --secondary-box-color: #4f9d92;
    --secondary-box-text: #000;
    
    --padding : 10px;
    --border-rad: 5px;
    --shadow: 4px 3px 19px 0px rgba(0,0,0,0.3);
  }
  
  $primary-box-colors: #112055;
  $primary-box-color-lighter: lighten($primary-box-colors, 20%);
  $primary-box-color-darker: darken($primary-box-colors, 10%); 
  
  .box__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 20px;
    font-family: sans-serif;
    div:hover {
      box-shadow: none;
    }
  }:root {
    --primary-box-color: #112055;
    --primary-box-text: #fff;
    --primary-box-lighter: #357b70;
    --primary-box-darker: #357b70;
    
    --secondary-box-color: #4f9d92;
    --secondary-box-text: #000;
    
    --padding : 10px;
    --border-rad: 5px;
    --shadow: 4px 3px 19px 0px rgba(0,0,0,0.3);
  }
  
  $primary-box-colors: #112055;
  $primary-box-color-lighter: lighten($primary-box-colors, 20%);
  $primary-box-color-darker: darken($primary-box-colors, 10%); 
  
  .box__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    padding: 20px;
    font-family: sans-serif;
    div:hover {
      box-shadow: none;
    }
  }
  `, 
  lang: 'scss'
  },
  {
    name: 'javascript',
    logo: faJs, 
    progress: 45,
    barColor: '#f0db4f',
    example: 
    `class Node {
      constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
      }
    }

    const isBST = node => {
      const arr = [];
      
      recursion(node, arr);
      
      let sortedArr = arr.slice().sort((a, b) => a - b);
      let sortedArr2 = arr.slice().sort((a, b) => b - a);

      return arr.join('') === sortedArr.join('') || arr.join('') === sortedArr2.join('');        
    };

    function recursion(root, arr){
      if (root) {
        recursion(root.left, arr);
        arr.push(root.value);
        recursion(root.right, arr);
      }
      
      return;
    }
    `, 
    lang: 'javascript'
  },
  {
    name: 'node js', 
    logo: faNodeJs, 
    progress: 3, 
    barColor: '#3c873a', 
    example: '//no code yet', 
    lang: 'javascript'
  },
  {
    name: 'react', 
    logo: faReact, 
    progress: 10, 
    barColor: '#61dbfb', 
    example: 
  `import React from "react";
  import MyButton from "./UI/button/SimpleButton/Button";
  import { useHistory } from "react-router-dom";
  
  const PostItem = (props) => {
    const router = useHistory()
    return (
      <div className="post">
        
        <div className="post__content">
          <h4>{props.post.id}. {props.post.title}</h4>
          <p style={{margin: "10px 10px 0px 25px"}}>
            {props.post.body}
          </p>
        </div>
  
        <div className="post__btns">
          <MyButton onClick={() => router.push('/posts/{props.post.id}')} >Открыть</MyButton>
          <MyButton onClick={() => props.remove(props.post)} >Удалить</MyButton>
        </div>
  
      </div>
    )
  }
  
  export default PostItem;`, 
  lang: 'javascript'},
  {
    name: 'angular', 
    logo: faAngular, 
    progress: 3, 
    barColor: '#a6120d', 
    example: '//no code yet', 
    lang: 'javascript'
  },
]

export const projectsList = [
  {
    name: "wildlife",
    link: 'https://github.com/kryvetski-andrei',
    preview: '#e34c26',

    tags: [
      {name: 'html', color: '#e34c26'},
      {name: 'css', color: '#264de4'},
      {name: 'not relevat', color: '#990000'},
    ],
      

    
  },
  {
    name: "online-zoo",
    tags: [
      {name: 'html', color: '#e34c26'},
      {name: 'css', color: '#264de4'},
      {name: 'js', color: '#f0db4f'},
      {name: 'not relevat', color: '#990000'},
    ],
    link: 'https://github.com/kryvetski-andrei',
    preview: '#e34c26'
  },
  {
    name: "posts",
    tags: [
      {name: 'html', color: '#e34c26'},
      {name: 'css', color: '#264de4'},
      {name: 'js', color: '#f0db4f'},
      {name: 'react', color: '#61dbfb'},
    ],
    link: 'https://github.com/kryvetski-andrei',
    preview: '#e34c26'
  },
  {
    name: "piano",
    tags: [
      {name: 'html', color: '#e34c26'},
      {name: 'css', color: '#264de4'},
      {name: 'js', color: '#f0db4f'},
      {name: 'not relevat', color: '#990000'},
    ],
    link: 'https://github.com/kryvetski-andrei',
    preview: '#e34c26'
  },
  {
    name: "js-clock",
    tags: [
      {name: 'html', color: '#e34c26'},
      {name: 'css', color: '#264de4'},
      {name: 'js', color: '#f0db4f'},
      {name: 'not relevat', color: '#990000'},
    ],
    link: 'https://github.com/kryvetski-andrei',
    preview: '#e34c26'
  },
  {
    name: "some",
    tags: [
      {name: 'html', color: '#e34c26'},
      {name: 'css', color: '#264de4'},
      {name: 'js', color: '#f0db4f'},
      {name: 'example', color: '#ae00ff'},
    ],
    link: 'https://github.com/kryvetski-andrei',
    preview: '#e34c26'
  },
  {
    name: "some",
    tags: [
      {name: 'html', color: '#e34c26'},
      {name: 'css', color: '#264de4'},
      {name: 'example', color: '#ae00ff'},
    ],
    link: 'https://github.com/kryvetski-andrei',
    preview: '#e34c26'
  },
  {
    name: "some",
    tags: [
      {name: 'example', color: '#ae00ff'},
      {name: 'not relevat', color: '#990000'},
    ],
    link: 'https://github.com/kryvetski-andrei',
    preview: '#e34c26'
  },
  {
    name: "some",
    tags: [
      {name: 'js', color: '#f0db4f'},
      {name: 'react', color: '#61dbfb'},
      {name: 'example', color: '#ae00ff'},
    ],
    link: 'https://github.com/kryvetski-andrei',
    preview: '#e34c26'
  },

]

// tags: [
//   {name: 'html', color: '#e34c26'},
//   {name: 'css', color: '#264de4'},
//   {name: 'js', color: '#f0db4f'},
//   {name: 'react', color: '#61dbfb'},
//   {name: 'node js', color: '#3c873a'},
//   {name: 'angular', color: '#a6120d'},
//   {name: 'example', color: '#ae00ff'},
//   {name: 'not relevat', color: '#990000'},
// ],