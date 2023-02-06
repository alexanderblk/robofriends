import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return ( // Instead of repeating, I can create a for loop
        <div>
            {
                robots.map((user, i) => { // We can use "map" to loop through our object
                    return (
                        <Card
                            key={i} // When we do a loop, we have to give it an unique key. Without this, React won't know which card to remove for example
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;