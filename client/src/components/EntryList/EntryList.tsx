import { Post } from '../../types/Post';
import './EntryList.css';

const EntryList: React.FC<{ entries: Post[] }> = (props) => {

    const maxVisibleContentLength = 48;

    const cropText = (text: string) => {
        if (text.length <= maxVisibleContentLength) return text;
        return text.substring(0, maxVisibleContentLength) + '...';
    }

    return (
        <div className="entry-list">
            {props.entries.map((entry) => (
                <div key={entry.id} className="entry">
                    <h2>{entry.title}</h2>
                    <p>{cropText(entry.content)}</p>
                    <p>{entry.author}</p>
                </div>
            ))}
        </div>
    );
};

export default EntryList;