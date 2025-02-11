import React from 'react';

interface Props {
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
};

const TextInput = ({ onChange, value } : Props) => {
    return (
            <input 
                type="text" 
                autoComplete="off" 
                placeholder="New Item"
                onChange={onChange}
                value={value}
                className="bg-primary40 p-4 border border-primary60 text-white rounded-xl h-10 flex-1 font-mono focus:ring-secondary20 focus:border-secondary20"
            />
    )
};

export default TextInput;
