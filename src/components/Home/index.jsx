import Lottie from 'lottie-react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiDocumentText, HiOutlineMail } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';

import homeAnimatedSvg from '../../assets/home-animation.json';
import { HomeContainer } from "./styled";

function Home() {

    return (
        <HomeContainer id="home">
            <div id="home-content">

                <div className="title-wrapper">
                    <h1 id="hello">
                        Hi,i’m <span>Enzo Morais </span>
                    </h1>

                    <TypeAnimation wrapper="h1" sequence={
                        [
                            'a Full Stack developer',
                            5000,
                            'a web developer',
                            5000
                        ]
                    }
                        repeat={Infinity}
                    />



                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempus pellentesque enim, a posuere nunc consectetur quis. Ut eu tortor efficitur dolor tempor viverra ut sit amet elit. Vestibulum accumsan orci non sollicitudin tristique.
                </p>


                <div id="social-media-wrapper">
                    <a href="https://github.com/enzomf" target="_blank" title='github'>
                        <AiFillGithub />
                    </a>
                    <a href="#" target="_blank" title='curriculum'>
                        <HiDocumentText />
                    </a>
                    <a href="https://www.linkedin.com/in/enzo-morais-936532165/" target="_blank" title='LinkedIn'>
                        <AiFillLinkedin />
                    </a>
                    <a href="#contact" target="_blank" title='email'>
                        <HiOutlineMail />
                    </a>
                </div>
            </div>

            <div id='home-image'

            
            >
                <Lottie animationData={homeAnimatedSvg}  />
            </div>

        </HomeContainer>
    )
}

export default Home;