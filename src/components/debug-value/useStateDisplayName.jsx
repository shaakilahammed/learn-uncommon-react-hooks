import { useDebugValue, useState } from 'react';

const useStateDisplayName = (initialValue, displayName) => {
    const [value, setValue] = useState(initialValue);
    useDebugValue(`${displayName} : ${initialValue}`);
    return [value, setValue];
};

export default useStateDisplayName;
