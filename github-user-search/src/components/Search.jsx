import React, { useState } from 'react';

function Search() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username) return;

        setLoading(true);
        setError(null);
        setUserData(null);

        try {
            // Call the fetchUserData function (we’ll create this)
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError('Looks like we can’t find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {userData && (
                <div>
                    <img src={userData.avatar_url} alt={userData.login} width={100} />
                    <h2>{userData.name || userData.login}</h2>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
}

export default Search;
