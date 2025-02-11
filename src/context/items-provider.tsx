'use client';
import React from "react";

const ItemContext = React.createContext<{
    items: ListItemData[],
    deleteItem: (index : number) => void,
    newItem: (name : string, urgency : number) => void
}>({
    items: [],
    deleteItem: (index: number) => {},
    newItem: (name: string, urgency : number) => {}
})

export const ItemProvider = ({ children } : any) => {
    const [items, setItems] = React.useState<ListItemData[]>([]);

    const deleteItem = (index : number) => {
        const newState = items.filter((item, i) => i !== index);
        setItems(newState);
    };

    const newItem = (name : string, urgency : number) => {
        setItems([...items, { name, urgency }]);
    }

    React.useEffect(() => {
        console.log(items)
    }, [items]);

    const values = {
        items,
        deleteItem,
        newItem
    };

    return (
        <ItemContext.Provider value={values}>
            {children}
        </ItemContext.Provider>
    )
}

export const useItemContext = () => React.useContext(ItemContext)
