import React from 'react';
import perfil from './me.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={perfil} />
        <div className="banner-text">

          <h1>Moisés Abraão</h1>

          <hr/>

          <div className="social-links">
              <a href="http://www.twitter.com/moisesabraao" rel="noopener noreferrer" _target="blank">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="http://www.github.com/moisesabraao" _target="blank">
                  <i class="fa fa-github" aria-hidden="true"></i>
              </a>
              {/* <a href="http://www.instagram.com/moisesabraao" _target="blank">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
              </a> */}
              <a href="https://t.me/moisesabraao" _target="blank">
                  <i class="fa fa-telegram" aria-hidden="true"></i>
              </a>
              
          </div>

          {/* <p>Site provisório.</p> */}
        </div>
      </header>
      {/* <content className="App-content">
        <h1>About me</h1>
        <hr/>
        <p>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
        </p>

      </content> */}
    </div>
  );
}

export default App;
