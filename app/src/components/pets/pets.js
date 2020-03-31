import React, { useState, useEffect } from 'react'

function Pets({ setSelectedPet }) {
    const [ pets, setPets ] = useState([])
    const [ sort, setSort ] = useState({
        column: 'id',
        ascending: true
    })

    useEffect(() => {
        fetch(`/pets?sort=${sort.column}&ascending=${sort.ascending}`)
        .then(res => res.json())
        .then(setPets)
    }, [sort])
    
    function updateSort(column) {
        if (sort.column === column) {
            setSort({ ...sort, ascending: !sort.ascending})
        } else {
            setSort({
                column,
                ascending: true
            })
        }
    }

    return (
        <div className={'pets'}>
            <table>
                <thead>
                    <tr>
                        <th><button onClick={updateSort.bind(this, 'id')}>Pet ID</button></th>
                        <th><button onClick={updateSort.bind(this, 'name')}>Pet Name</button></th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet) => {
                        return (
                            <tr key={pet.id}>
                                <td>{pet.id}</td>
                                <td><a href={`#${pet.id}`} onClick={setSelectedPet.bind(this, pet.id)}>{pet.name}</a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
    
}

export default Pets
