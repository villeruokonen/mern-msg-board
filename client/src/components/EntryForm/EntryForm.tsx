import React from "react";
import './EntryForm.css';
import '../../styles/App.css';

const EntryForm : React.FC<{onSubmit: (e: React.FormEvent<HTMLFormElement>) => void}> = ({onSubmit}) => {
    const countCharacters = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const numChars = e.currentTarget.value.length;
        if(numChars > maxCharacters)
        {
            e.currentTarget.value = e.currentTarget.value.slice(0, maxCharacters);
        }
        
        setContentCharCount(e.currentTarget.value.length);
    }

    const countTitleCharacters = (e: React.ChangeEvent<HTMLInputElement>) => {

        const numChars = e.currentTarget.value.length;

        if(numChars > maxTitleLength)
        {
            e.currentTarget.value = e.currentTarget.value.slice(0, maxTitleLength);
        }
        setTitleCharCount(e.currentTarget.value.length);
    }

    const [titleCharCount, setTitleCharCount] = React.useState<number>(0);
    const [contentCharCount, setContentCharCount] = React.useState<number>(0);
    
    const maxTitleLength = 60;
    const maxCharacters = 1000;
    
    return (
        <form className="entry-form" onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={countTitleCharacters} />
            <small>{titleCharCount}/{maxTitleLength}</small>

            <br/>

            <label htmlFor="content">Content</label>
            <textarea id="content" onChange={countCharacters}></textarea>
            <small>{contentCharCount}/{maxCharacters}</small>

            <br/>

            <button type="submit">Submit</button>
        </form>
    );
}

export default EntryForm;