import React, { useEffect, useState } from 'react';
import EntryList from '../components/EntryList/EntryList';
import EntryForm from '../components/EntryForm/EntryForm';
import { createPost, fetchPosts } from '../api/posts';

const Dashboard : React.FC = () => {
    const [entries, setEntries] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchPosts();
            setEntries(result);
        };

        fetchData();
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = e.currentTarget.postTitle.value;
        const content = e.currentTarget.postContent.value;

        const result = await createPost(title, content);
        setEntries([...entries, result]);
    };

    return (
        <>
            <div>
                <EntryList entries={entries}/>
            </div>

            <EntryForm onSubmit={handleSubmit} />
        </>
    );
}

export default Dashboard;