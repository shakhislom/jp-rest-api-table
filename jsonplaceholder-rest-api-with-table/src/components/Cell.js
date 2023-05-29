import React from 'react'

function Cell({ cellData, cellKey }) {
    return (
        <td>{cellKey !== 'postId' && cellKey !== 'userId' && cellData}</td>
    )
}

export default Cell