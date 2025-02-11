'use client';
import React, { useState } from 'react';
import TextInput from './text-input';
import Button from './button';

interface Props {
    onSubmit: (item: string) => void;
};

const Form = ({ onSubmit } : Props) => {

    const [item, setItem] = useState("");

    return (
        <div className="flex-row flex space-x-2 items-center w-[30vw]">
            <TextInput value={item} onChange={(e) => setItem(e.target.value)} />
            <Button onPress={(e) => onSubmit(item)}/>
        </div>
    )
};

export default Form;
