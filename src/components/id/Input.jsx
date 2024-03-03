import { useId } from 'react';

const Input = ({ fieldName, type }) => {
    const id = useId();
    return (
        <div className="mx-2 flex justify-between">
            <label htmlFor={id}>{fieldName}</label>
            <input
                type={type}
                className="border mx-2 rounded border-slate-300"
                id={id}
            />
        </div>
    );
};

export default Input;
