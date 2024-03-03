import { useState, useTransition } from 'react';
import { users } from './fake-users';

const FindUser = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filtered, setFiltered] = useState(users);

    const [isPending, startTransition] = useTransition();
    const handleChange = ({ target: { value } }) => {
        // Set the search term on the textbox
        setSearchTerm(value);
        // Execution of non-urgent state update.
        startTransition(() => {
            // Filter the user list based on the search term
            setFiltered(
                users.filter((item) =>
                    item.name.toLowerCase().includes(value.toLowerCase())
                )
            );
        });
    };
    return (
        <div className="flex flex-col p-4">
            <h1 className="text-3xl my-2">User Finder</h1>
            <p className="text-md bg-red-200 border p-2 rounded-md">
                useTransition used for Executing non-urgent state update. To
                learn more{' '}
                <a
                    className="underline"
                    href="https://react.dev/reference/react/useTransition"
                    target="_blank"
                >
                    useTransition
                </a>{' '}
                docs
            </p>
            <div className="text-md my-2">
                {isPending ? (
                    <p className="text-center">Loading...</p>
                ) : (
                    <p>
                        {users.length !== filtered.length
                            ? `${filtered.length} matches`
                            : null}
                    </p>
                )}
            </div>
            <input
                onChange={handleChange}
                value={searchTerm}
                type="text"
                placeholder="Type a name"
                className="border border-slate-200 p-1 rounded-sm"
            />

            <div className="flex flex-wrap justify-center items-center">
                {isPending ? (
                    <h4 className="text-xl bg-gray-200 p-2 mt-5 border">
                        Loading...
                    </h4>
                ) : filtered.length > 0 ? (
                    filtered.map((user) => (
                        <div
                            key={user.id}
                            className="flex flex-col m-2 p-2 border rounded-md"
                        >
                            <div className="rounded my-2">
                                <img
                                    src={user.avatar}
                                    alt={`Avatar image of ${user.name}`}
                                    className="w-32 h-32 rounded-full"
                                />
                            </div>
                            <p className="text-xl text-center">
                                <strong>{user.name}</strong>
                            </p>
                        </div>
                    ))
                ) : (
                    <h4 className="text-xl bg-gray-200 p-2 mt-5 border">
                        No user found!
                    </h4>
                )}
            </div>
        </div>
    );
};

export default FindUser;
