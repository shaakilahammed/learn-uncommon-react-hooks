import { useEffect, useInsertionEffect, useState } from 'react';

const Boomer = () => {
    const [color, setColor] = useState('blue');
    const dynamicStyle = `
        .dynamic-style {
            color: ${color}
        }
    `;

    useEffect(() => {
        console.log('useEffect');
    }, []);

    useInsertionEffect(() => {
        console.log('useInsertionEffect');
        const styleEle = document.createElement('style');
        styleEle.innerHTML = dynamicStyle;
        document.head.appendChild(styleEle);
        return () => {
            document.head.removeChild(styleEle);
        };
    }, [color]);

    const changeColor = () => {
        setColor((prev) => (prev === 'red' ? 'blue' : 'red'));
    };
    return (
        <div className="flex flex-col items-center">
            <p className="text-md bg-red-200 border p-4 rounded-md">
                useInsertionEffect allows inserting elements into the DOM before
                any effects fire. To learn more{' '}
                <a
                    className="underline"
                    href="https://react.dev/reference/react/useInsertionEffect"
                    target="_blank"
                >
                    useInsertionEffect
                </a>{' '}
                docs
            </p>
            <h1 className="dynamic-style">
                Click change to change color on style element inside head!
            </h1>
            <button
                onClick={changeColor}
                className="bg-black text-white p-1 rounded m-2"
            >
                Change
            </button>
        </div>
    );
};

export default Boomer;
