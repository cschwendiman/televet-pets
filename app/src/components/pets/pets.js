import React, { useState, useEffect } from 'react'

function Pets({ setOpenPet }) {
    const [ pets, setPets ] = useState([])

    useEffect(() => {
        fetch("/pets/")
        .then(res => res.json())
        .then(setPets)
    }, [])


    return (
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
                        <tr>
                            <td>{pet.id}</td>
                            <td>{pet.name}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
    
}

export default Pets
