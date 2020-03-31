import React, { useState, useEffect } from 'react'

function Pet({ selectedPet }) {
    const [pet, setPet] = useState({});

    useEffect(() => {
        if (selectedPet > 0) {
            fetch("/pets/"+selectedPet)
            .then(res => res.json())
            .then(setPet)
        } else {
            setPet({})
        }
    }, [selectedPet])

    return (
        <div className={'pet'}>
            {pet &&
                (
                    <dl>
                        {Object.entries(pet).map(([key, value]) => {
                            return (
                                <React.Fragment key={key+pet.id}>
                                    <dt>{key}</dt>
                                    <dd>{value}</dd>
                                </React.Fragment>
                            )
                        })}
                    </dl>
                )
            }
        </div>
    )
}

export default Pet