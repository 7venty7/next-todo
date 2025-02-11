'use client'
import React from 'react';
import ListItem from './item';
import { useItemContext } from '@/context/items-provider';

const ItemsList = () => {
    const { items } = useItemContext()
    return (
            <div className="">
                {
                    items.map((item, index) => {
                        return (
                            <ListItem item={item} index={index} key={index} />
                        )
                    })
                }
            </div>
    )
};

export default ItemsList;
