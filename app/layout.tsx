import './globals.css'
import React from 'react';
import { Inter } from 'next/font/google'
import Slide from './swiperservico/Swiper'
import SlideInicio from './swiperinicio/SwiperInicio'
const inter = Inter({ subsets: ['latin'] })
import { WhatsAppButton } from './button'

export const metadata = {
  title: 'Marmoraria Santa Rosa',
  description: 'Marmoraria Santa Rosa ',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href='/favicon/favicon.ico'/>
        <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.pnq"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png"/>
        <link rel="manifest" href="./favicon/site.webmanifest"/>
      </head>
      <meta charSet="UTF-8"/>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}


export const Content = () => {
  return(

    <main>
      <WhatsAppButton/>

      <section id= 'inicio'>
        <SlideInicio/>
        <section id='inicioWrite' >
          <p id='Inicio1'>Agilidade, atendimento e excelência <br></br><span id='Inicio2'>Você encontra em nossa empresa</span></p>
          <a href='https://wa.link/ag8ul1' target='_blanck' ><button id='orcamento'>Faça já seu orçamento! <img id='wpp' src='./whatsapp-2.png' alt='Imagem Whatsapp' /> </button></a>
        </section>
      </section>
    <section id='ns'>
      <h1>NOSSOS <br/> SERVIÇOS </h1>
      <div id='slider'>
      <Slide/>
      </div>
    </section>

    <section id='nsP2' >
      <p>Prestamos serviços especializados em mármores, granitos, túmulos, capelas, pias e soleiras em geral.</p>
    </section>
    <div id='Facebook'>
    <section id='fbframe' >
      <iframe src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063788702016%26sk%3Dphotos_by&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId' style={{border:'none', overflow:'hidden', width:'500px', height:'70vh'}} scrolling='no' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'>
      </iframe>
      </section>
      <section id='frameWrite'>
        <p id='p1' >ACOMPANHE NOSSA <a href='https://www.facebook.com/profile.php?id=100063788702016' target='_blanck'><br></br> PÁGINA DO FACEBOOK!</a></p>
        <p id='p2'>É lá que postamos nossos trabalhos!</p>
      </section>
      </div>
      <section id='qsn' >
      <div id='qsn1' >
        <p id='qsnp'>QUEM SOMOS NÓS?</p>
      </div>
      <div id='qsn2' >
        <p id='textao'>Descubra a excelência em pedras naturais com a Marmoraria Santa Rosa.
        Oferecemos uma ampla variedade de serviços especializados para transformar seu espaço em algo verdadeiramente extraordinário. Do requinte intemporal dos mármores aos granitos de alta durabilidade, nossa equipe talentosa cria obras-primas personalizadas que superam todas as expectativas. <br></br> <br></br>
        Com anos de experiência e um compromisso inabalável com a qualidade, garantimos que cada projeto seja executado com maestria, selecionando cuidadosamente materiais nobres e utilizando tecnologias de ponta para criar peças sob medida, repletas de detalhes refinados e acabamentos impecáveis.
        Seja para uma elegante pia de cozinha, uma impressionante escada de mármore ou até um belo túmulo, estamos prontos para realizar suas visões mais ambiciosas. Nossa dedicação em oferecer resultados excepcionais se reflete em cada etapa do processo, desde o planejamento e design até a instalação final. <br></br> <br></br>
        Na Marmoraria Santa Rosa, não apenas fornecemos produtos de alta qualidade, mas também uma experiência excepcional ao cliente. Nossa equipe dedicada está pronta para oferecer orientação especializada, colaborando de perto com você para transformar seus sonhos em realidade. Sua satisfação é nossa prioridade máxima, e garantimos que seu espaço se torne um verdadeiro testemunho de elegância e estilo.
        Deixe-nos demonstrar por que devemos ser a sua escolha, venha se maravilhar com nossos serviços impecáveis e descubra um mundo de possibilidades em mármore e granito. Seu projeto merece a grandiosidade que só a Marmoraria Santa Rosa pode oferecer.</p>
      </div>
      </section>
      <section id='qsn2' >
      <p id='msr'>MARMORARIA SANTA ROSA PALOTINA</p>
      </section>
      <div  id='allContato' >
      <section id='contatoTitle' >
        <p>CONTATO</p>
      </section>
      <section id='maps' >
      <div className='mapouter'><div className='gmap_canvas'><iframe className='gmap_iframe' width='100%' src="https://maps.google.com/maps?width='800px'&amp;height='500px'&amp;hl=en&amp;q=marmoraria Santa Rosa palotina&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div>
      <script src='https://static.elfsight.com/platform/platform.js' data-use-service-core defer></script>
      <div id='contate-nos'  className='elfsight-app-207d73dc-4c10-47f4-a9af-14e87d7ca388'></div>
      </section>
      <section id='info'>
        <div className='infoElements' >
        <a href="tel:+5544998624700"><img src="./contatos/phone-call.png" alt="telefone"></img></a>
          <p>(44) 3649-1063 <br/> (44) 99852-4700</p>
        </div>
        <div className='infoElements' >
          <a href='mailto:marmoraria.santarosa@hotmail.com'> <img src="./contatos/email.png" alt="email" /></a>
          <p>marmoraria.santarosa@hotmail.com</p>
        </div>
        <div className='infoElements' >
          <a href='https://www.google.com/maps/dir//Marmoraria+Santa+Rosa+R.+Gov.+Munhoz+da+Rocha,+158+-+Santa+Terezinha+Palotina+-+PR+85950-000/@-24.2839386,-53.8537098,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94f36e5b1ac4df4d:0xdb88da44933d9681!2m2!1d-53.8537004!2d-24.2839358?entry=ttu' target='blanck'>
            <img src="./contatos/location.png" alt="localização" /></a>
          <p>Palotina - PR</p>
        </div>
        <div className='infoElements' >
          <a href='https://instagram.com/marmorariasantarosa.palotina?igshid=NTc4MTIwNjQ2YQ==' target='blanck'> <img src="./contatos/instagram-2.png" alt="instagram" /> </a>
          <p>@marmorariasantarosa.palotina</p>
        </div>
        <div className='infoElements' >
          <a href='https://www.facebook.com/profile.php?id=100063788702016' target='blanck'> <img src="./contatos/facebook-2.png" alt="facebook" /></a>
          <p>Marmoraria Santa Rosa Palotina</p>
        </div>
      </section>

      </div>
    </main>
    )
    }
    
export const Footer = () => {
  return (
    <footer>
      <section id='dadosCriador' >
        <p> Site desenvolvido por <span id='cttp'> <a href='https://github.com/Pedrohbbier' target='_blanck'> Pedro Henrique Boldori Bier </a> </span> e <a href='https://github.com/Andreyspl' target='_blanck' ><span id='ctta'>Andrey Henrique Splett Pires</span></a></p>
        <p>Clique em nossos nomes para nossos contatos!</p>
        <p>© Marmoraria Santa Rosa</p>
      </section>
    </footer>
  )
}
