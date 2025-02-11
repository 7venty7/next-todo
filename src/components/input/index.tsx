'use client';
import React, { useState } from 'react';
import TextInput from './text-input';
import Button from './button';
import Dropdown from './dropdown';
import { useItemContext } from '@/context/items-provider';

const Form = () => {
    const { newItem } = useItemContext()

    const [item, setItem] = useState("");
    const [urgency, setUrgency] = useState("")

    return (
        <div className="flex-row flex space-x-2 items-center w-full">
            <TextInput value={item} onChange={(e) => setItem(e.target.value)} />
            <Dropdown onSelect={(e) => setUrgency(e.target.value)} value={urgency} />
            <Button onPress={(e) => {
                newItem(item, parseInt(urgency))
                setItem("")
                setUrgency("")
            }}/>
        </div>
    )
};

export default Form;
