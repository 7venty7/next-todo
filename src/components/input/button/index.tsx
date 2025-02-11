import React from 'react';

interface Props {
    onPress: (e : React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ onPress } : Props) => {
    return (
            <button 
                type="button"
                onClick={onPress}
                className="h-10 w-10 bg-secondary40 rounded-lg flex-row items-center justify-center"
            >
                <text className="text-xl font-extrabold text-primary20">+</text>
            </button>
    )
};

export default Button;
