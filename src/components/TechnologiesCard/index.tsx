import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core';
import { faReact, faNode, faPhp, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

import './styles.css';

// add icons in package
library.add(faReact, faNode, faPhp, faHtml5, faCss3Alt);

interface Props {
    name: String,
    description: String,
    icon: [IconPrefix, IconName],
}

const TechnologiesCard: React.FC<Props> = (props) => {
    return (
        <div className="item">
            <FontAwesomeIcon icon={props.icon} />
            <div className="item-description">
                <span>{props.name}</span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default TechnologiesCard;