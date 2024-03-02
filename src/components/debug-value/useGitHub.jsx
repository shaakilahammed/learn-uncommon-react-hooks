import { useDebugValue, useEffect } from 'react';
import useStateDisplayName from './useStateDisplayName';

const useGitHub = (username) => {
    const [user, setUser] = useStateDisplayName(null, 'user');
    const [error, setError] = useStateDisplayName(null, 'error');
    const [loading, setLoading] = useStateDisplayName(false, 'loading');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `https://api.github.com/users/${username}`
                );

                const responseData = await response.json();
                setUser(responseData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, [username, setLoading, setError, setUser]);
    useDebugValue(user, (test) => test?.name);
    useDebugValue(loading ? loading : 'not loading');

    return { user, loading, error };
};

export default useGitHub;
