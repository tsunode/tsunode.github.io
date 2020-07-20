import React from 'react';

import './styles.css';

interface Props {
    name: String
}

const Title: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>
                {props.name}
            </h2>
        </div>
    )
}

export default Title