
import React from 'react';

function NotesListItem({
    title,
    id,
    handleClick
}) {
    return (
        <li
            onClick={() => {
                console.log(`you clicked ${id}`);
                handleClick(id);
            }}
        >{title}</li>
    );
}

export default NotesListItem;