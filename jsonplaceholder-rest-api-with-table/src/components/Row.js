import React from 'react'
import Cell from './Cell'

function Row({ item }) {
    return (
        <tr>
            {Object.entries(item).map(([key, value]) => (
                <Cell key={key} cellKey={key} cellData={JSON.stringify(value)} />
            )
            )}
        </tr>
    )
}

export default Row