import Input from './Input';

const IdForm = () => {
    // const nameId = useId();
    // const passwordId = useId();
    return (
        <div className="flex flex-col p-4 items-center">
            <h1 className="text-3xl my-3">This is a simple form</h1>
            <form className="flex flex-col gap-2">
                <Input fieldName="Username" type="text" />
                <Input fieldName="Password" type="password" />

                {/* <div className="mx-2">
                    <div className="flex justify-between">
                        <label htmlFor={passwordId}>Password</label>

                        <input
                            aria-describedby={passwordId}
                            id={passwordId}
                            type="password"
                            className="border mx-2 rounded border-slate-300"
                        />
                    </div>
                    <p className="flex" id={passwordId}>
                        Password should be 8 characters long.
                    </p>
                </div> */}
            </form>
            <p className="mt-24 text-md bg-red-200 border p-2 rounded-md">
                useId used for dynamic unique id for DOM element. To learn more{' '}
                <a
                    className="underline"
                    href="https://react.dev/reference/react/useId"
                    target="_blank"
                >
                    useId
                </a>{' '}
                docs
            </p>
        </div>
    );
};

export default IdForm;
