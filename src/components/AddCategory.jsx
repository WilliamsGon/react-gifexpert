import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 2) return;

        // onAddCats( cats => [...cats, inputValue]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={ onSubmit }>

            <input
                type="text"
                placeholder="Buscar gifs..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
