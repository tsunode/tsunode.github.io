import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { faReact, faNode, faPhp, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

// import './styles.css';
import { Item, Description } from './styles';

// add icons in package
library.add(faReact, faNode, faPhp, faHtml5, faCss3Alt);

interface Props {
	id: string;
	name: String;
	description: String;
	icon: [IconPrefix, IconName];
}

const TechnologiesCard: React.FC<Props> = (props) => {
	return (
		<Item>
			<FontAwesomeIcon icon={props.icon} />
			<Description>
				<div>
					<FontAwesomeIcon icon={props.icon} />
					<span>{props.name}</span>
					<p>{props.description}</p>
				</div>
			</Description>
		</Item>
	)
}

export default TechnologiesCard;
