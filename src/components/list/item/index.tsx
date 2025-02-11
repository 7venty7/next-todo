import { useItemContext } from '@/context/items-provider';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props {
    item: ListItemData;
    index: number;
}

const urgencyColor = (urgency: number) => {
    console.log(urgency)
    switch (urgency) {
        case 1:
            return "text-green-300";
        case 2:
            return "text-yellow-300";
        case 3:
            return "text-red-300";
        default:
            return "text-white"
    }
}

const ListItem = ({ item, index } : Props) => {
    const { deleteItem } = useItemContext()
    return (
        <>
            <div className="bg-primary20 h-10 rounded-xl mt-3 flex flex-row items-center justify-between">
                <text className="text-white font-mono text-lg ml-4">{item.name}</text>
                <div className="flex flex-row mr-4 gap-4">
                {
                    item.urgency &&
                        <text className={`font-mono text-lg ml-4 ${urgencyColor(item.urgency)}`}>{item.urgency}</text>
                }
                <button className="" onClick={() => deleteItem(index)}>
                    <text className="font-bold text-primary60">x</text>
                </button>
                </div>
            </div>
        </>
    )
};

export default ListItem;
