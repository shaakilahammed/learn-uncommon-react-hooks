import useGitHub from './useGitHub';

const GitHubProfile = () => {
    const { user, loading, error } = useGitHub('shaakilahammed');

    if (loading) {
        return <h3 className="text-lg text-center p-3">Loading...</h3>;
    }

    if (error) {
        return (
            <h3 className="text-lg text-center p-3 text-red-600">
                {JSON.stringify(error)}
            </h3>
        );
    }

    if (user?.message) {
        return (
            <h3 className="text-lg text-center p-3 text-red-600">
                {user?.message}
            </h3>
        );
    }

    return (
        <>
            {user ? (
                <div className="flex flex-col justify-center items-center p-4">
                    <img
                        src={user['avatar_url']}
                        alt="photo"
                        className="border rounded-full w-32 h-32"
                    />
                    <p className="text-3xl my-3">
                        {user?.name} has <u>{user['public_repos']}</u> public
                        repositories that gained <u>{user.followers}</u>{' '}
                        followers.
                    </p>
                    <h2 className="text-xl">More About the contributor:</h2>
                    <p className="my-2 text-md bg-gray-300 border p-2 rounded-md">
                        {user?.bio}
                    </p>

                    <p className="mt-24 text-md bg-red-200 border p-2 rounded-md">
                        Open React Developer Tools &gt; GitHubProfile to see use
                        debug value. more on{' '}
                        <a
                            className="underline"
                            href="https://react.dev/reference/react/useDebugValue"
                            target="_blank"
                        >
                            useDebugValue docs
                        </a>
                    </p>
                </div>
            ) : (
                <p>No user data</p>
            )}
        </>
    );
};

export default GitHubProfile;
