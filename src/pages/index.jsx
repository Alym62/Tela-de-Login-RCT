import { useState, useEffect, useMemo, useCallback } from 'react';

const Teste = () => {
    const [name, setName] = useState('Aly');
    const handleChangeName = () => {
        setName('gostoso')
    }

    

    useEffect(() => {
        handleChangeName();
    }, []);

    return (
        <div>
            <p>
                {name}
            </p>
            <button onClick={handleChangeName}>Alterar name 🤗</button>
        </div>
    )
}

export { Teste }