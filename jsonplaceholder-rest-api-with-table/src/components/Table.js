import React from 'react'
import Row from './Row'

function Table({ items }) {
    return (
        <div className='table-container'>
            <table>
                <tbody>
                    {items.map(i => (
                        <Row item={i} key={i.id} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table