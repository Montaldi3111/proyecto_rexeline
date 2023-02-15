import React, {useEffect,useState} from 'react'

function Table ({estado}){
    const [table,setTable] = useState([])
    const [max,setMax] = useState(0) 
    useEffect(() => {
        fetch('http://localhost:3000/api/tables')
        .then(response => response.json()).then((data) =>{
             setMax(data.count)
             setTable(data.list)
        },[])
    })
    return (
        <div className='table-container'>
        <div className='first-column'>
            {
                table.map(table => {
                    if(table.id<=8){
                        return (
                            <p key={table.id}>{table.name}</p>
                        )
                    }
                })
            }
            </div>
            <div className='second-column'>
                <p className='caja'>Caja</p>
            {
                table.map(table => {
                    if(table.id>8&&table.id<=12){
                        return (
                            <p key={table.id}>{table.name}</p>
                        )
                    }
                })
            }
            </div>
            <div className='third-column'>
            {
                table.map(table => {
                    if(table.id>12&&table.id<=20){
                        return (
                            <p key={table.id}>{table.name}</p>
                        )
                    }
                })
            }
            </div>
        </div>
    )

}

export default Table