import { useEffect, useRef } from 'react';

const Layout = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        console.log('useLayoutEffect');
        const element = elementRef.current;
        element.style.backgroundColor = 'white';
        setTimeout(() => {
            element.style.backgroundColor = 'pink';
        }, 1000);
        return () => {
            element.style.backgroundColor = 'white';
        };
    }, []);

    useEffect(() => {
        console.log('useEffect');
    }, []);

    return (
        <div
            className="m-2 border p-2 max-w-screen-lg mx-auto "
            ref={elementRef}
        >
            <p>
                useLayoutEffect is used for firing effects before the browser
                repaints the screen. To learn more{' '}
                <a
                    className="underline"
                    href="https://react.dev/reference/react/useLayoutEffect"
                    target="_blank"
                >
                    useLayoutEffect
                </a>{' '}
                docs
            </p>
        </div>
    );
};

export default Layout;
