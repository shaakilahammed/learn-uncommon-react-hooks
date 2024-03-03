import { useDeferredValue, useMemo, useState } from 'react';
import { animals } from './fakeAnimal';

const AnimalList = () => {
    const [name, setName] = useState('');
    const deferredName = useDeferredValue(name);
    const animalPark = useMemo(() => {
        return animals.filter((animal) =>
            animal.name.toLowerCase().includes(deferredName.toLocaleLowerCase())
        );
    }, [deferredName]);

    function handleChange(e) {
        setName(e.target.value);
    }
    return (
        <div className="max-w-screen-xl mx-auto">
            <p className="text-md bg-red-200 border p-2 rounded-md">
                useDeferredValue used for deffering state value like debouncing,
                throttling. To learn more{' '}
                <a
                    className="underline"
                    href="https://react.dev/reference/react/useDeferredValue"
                    target="_blank"
                >
                    useDeferredValue
                </a>{' '}
                docs
            </p>
            <input
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Search here"
                className="border rounded border-slate-200 p-1 my-2 mx-2 w-1/2 "
            />
            {animalPark.map((animal) => (
                <div key={animal.id} className="border bg-gray-100 p-2 m-2">
                    {animal.name}
                </div>
            ))}
        </div>
    );
};

export default AnimalList;
