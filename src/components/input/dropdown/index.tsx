import React from 'react';

interface Props {
    onSelect: (e : React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
};

const Dropdown = ({ onSelect, value } : Props) => {
    const options = [1, 2, 3]
    return (
        <>
            <select value={value} className="h-10 px-2 rounded-xl bg-primary20" onChange={onSelect}>
                <option value="" hidden disabled className="text-mono text-white">Urgency</option>
                {
                    options.map((o) => {
                        return (
                        <option key={o} value={"" + o} className="text-mono text-white">{o}</option>
                        )
                    })
                }
            </select>
        </>
    )
};

export default Dropdown;
