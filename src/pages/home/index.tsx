import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

const Home = () => {
    return (
        <div className="container">
            <main>
                <section>
                    <div id="title">
                        <span>GABRIEL TSUNODA</span>
                        <span> {"= () => { Full Stack }"}</span>
                    </div>
                    <button type="button">
                        Ver meu trabalho
                        <FontAwesomeIcon icon={faArrowRight} className="icon"/>
                    </button>
                </section>
            </main>
        </div>
    )
}

export default Home;