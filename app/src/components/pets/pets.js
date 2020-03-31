import React, { useState, useEffect } from 'react'

function Pets({ setSelectedPet }) {
    const [ pets, setPets ] = useState([])

    useEffect(() => {
        fetch("/pets/")
        .then(res => res.json())
        .then(setPets)
    }, [])


    return (
        <div className={'pets'}>
            <table>
                <thead>
                    <tr>
                        <th>Pet ID</th>
                        <th>Pet Name</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet) => {
                        return (
                            <tr key={pet.id}>
                                <td>{pet.id}</td>
                                <td>{pet.name}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
    
}

export default Pets
