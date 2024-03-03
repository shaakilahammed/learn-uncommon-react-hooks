import { forwardRef, useImperativeHandle, useRef } from 'react';

// Child Component
const ChildComponent = forwardRef((props, ref) => {
    const inputRef = useRef(null);
    useImperativeHandle(
        ref,
        () => {
            return {
                customFocus: () => {
                    inputRef.current.focus();
                },
            };
        },
        []
    );
    return (
        <div className="border border-red-600 p-2 m-2">
            <h2>I am a child</h2>
            <input
                ref={inputRef}
                type="text"
                className="border border-gray-400 text-gray-700 p-1 w-1/4 rounded-md"
            />
        </div>
    );
});

ChildComponent.displayName = 'ChildComponent';

// Parent Component
const ParentComponent = () => {
    const childRef = useRef(null);
    const handleGreet = () => {
        childRef.current.customFocus();
    };

    return (
        <div className="border border-blue-600 p-2 m-2">
            <h2>I am a Parent</h2>
            <button
                className=" py-1 px-2 bg-black text-white rounded"
                onClick={handleGreet}
            >
                Focus my child
            </button>
            <ChildComponent ref={childRef} />
        </div>
    );
};

const ParentChild = () => {
    return (
        <div className="border border-gray-600 p-2 m-2 max-w-screen-lg mx-auto">
            <p className="text-md bg-red-200 border p-4 rounded-md">
                useImperativeHandle allows exposing custom ref handle to the
                parent component. To learn more{' '}
                <a
                    className="underline"
                    href="https://react.dev/reference/react/useImperativeHandle"
                    target="_blank"
                >
                    useImperativeHandle
                </a>{' '}
                docs
            </p>
            <ParentComponent />
        </div>
    );
};

export default ParentChild;
