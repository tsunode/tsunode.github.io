import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, } from '@fortawesome/free-solid-svg-icons';

import { Container, HomeSection, Logo, Button } from './styles';

// componentes
import Title from '../../components/Title';
import TechnologiesCard from '../../components/TechnologiesCard';

import profile from '../../assets/img/profile.jpg';

interface Technologies {
	name: String;
	description: String;
	icon: [IconPrefix, IconName];
}

const Home = () => {



	const [technologies, setTechnologies] = useState<Technologies[]>();

	useEffect(() => {

		function getTechnologies() {
			const mockTechnologies = [
				{
					name: 'React/React-Native',
					description: 'Tecnologia utilizada para criação de sites, aplicativos mobile em Android e IOS',
					icon: ['fab', 'react'] as [IconPrefix, IconName]
				},
				{
					name: 'Node JS',
					description: 'Tecnologia utilizada para criação do back-end, utilizando estrutura de API REST',
					icon: ['fab', 'node'] as [IconPrefix, IconName]
				},
				{
					name: 'PHP',
					description: 'Utilizado para desenvolvimento do back-end, principalmente para sites web e pode ser embutido em HTML',
					icon: ['fab', 'php'] as [IconPrefix, IconName]
				},
				{
					name: 'HTML 5',
					description: 'Linguagem de marcação, para desenvolvimentos de sites web.',
					icon: ['fab', 'html5'] as [IconPrefix, IconName]
				},
				{
					name: 'CSS 3',
					description: 'Responsável pela estilização de sites web, com efeitos de transição, cores, background entre outros.',
					icon: ['fab', 'css3-alt'] as [IconPrefix, IconName]
				},
			]

			setTechnologies(mockTechnologies);
		}

		getTechnologies();

	}, []);


	return (
		<div>
			<main>
				<HomeSection>
					<div>
						<Logo>
							<h1>GABRIEL TSUNODA</h1>
							<span> {"= () => { Full Stack }"}</span>
						</Logo>
						<Button type="button" className="border">
							Ver meu trabalho
                            <FontAwesomeIcon icon={faArrowRight} className="icon" />
						</Button>
					</div>

				</HomeSection>
				
				<Container>
				
				</Container>
				{/* <Container>
					<section id="about">
						<Title name="Sobre mim"></Title>
						<div className="profile">
							<div className="profile-img">
								<img src={profile} alt="" />
								<ul>
									<li>
										Cursando Sistemas de Informação
                                    </li>
									<li>
										Leva o Japônes como uma segunda língua
                                    </li>
								</ul>
							</div>
							<div className="profile-description">
								<p>
									Desenvolvedor Full Stack, aplicações de sites responsivos,
									aplicativos mobile e APIs, utilizando as melhores práticas e
									tecnologias do mercado atual.
                                </p>
							</div>
						</div>
					</section>

					<section id="technologies">
						<Title name="Tecnologias utilizadas"></Title>
						<div id="technologies-wrap">
							{
								technologies?.map(technology =>
									<TechnologiesCard  {...technology} />
								)
							}
						</div>
					</section>
					<section id="projects">
						<Title name="Projetos Desenvolvidos"></Title>
						<div id="technologies-wrap">
						</div>
					</section>
				</Container> */}
			</main>
		</div>
	)
}

export default Home;
