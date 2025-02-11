import React from 'react';
import ListItem from './item';

interface Props {
    data: ListItemData[];
}

const ItemsList = ({ data } : Props) => {
    return (
        <>
            <div className="flex-col flex justify-center w-full">
                {
                    data.map((item, index) => {
                        return (
                        <ListItem name={item.name} urgency={item.urgency} />
                        )
                    })
                }
            </div>
        </>
    )
};

export default ItemsList;
