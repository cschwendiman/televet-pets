import React, { useState, useEffect } from 'react'

function Pets({ setSelectedPet }) {
    const [ pets, setPets ] = useState([])
    const [ sort, setSort ] = useState({
        column: 'id',
        ascending: true
    })
    const [ page, setPage ] = useState(0)

    useEffect(() => {
        fetch(`/pets?sort=${sort.column}&ascending=${sort.ascending}&page=${page}`)
        .then(res => res.json())
        .then(setPets)
    }, [sort, page])
    
    function updateSort(column) {
        if (sort.column === column) {
            setSort({ ...sort, ascending: !sort.ascending})
            setPage(0);
        } else {
            setSort({
                column,
                ascending: true
            })
            setPage(0);
        }
    }

    return (
        <div className={'pets'}>
            <h2>List of Pets</h2>
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
            <div className={'pagination'}>
                {page > 0 &&
                    <button className='prev' onClick={setPage.bind(this, page-1)}>&lt;&lt; Previous Page</button>
                }
                {
                    // TODO Figure out how to have max pages here
                }
                <button className='next' onClick={setPage.bind(this, page+1)}>Next Page &gt;&gt;</button>
            </div>
        </div>
    )
    
}

export default Pets
