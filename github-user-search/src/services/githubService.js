import React, { useState } from 'react';
import { fetchUserData, fetchUsersAdvanced } from '../services/githubService';

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [user, setUser] = useState(null);        // for single user (task 1)
    const [users, setUsers] = useState([]);        // for multiple users (task 2)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username) return;

        setLoading(true);
        setError(null);
        setUser(null);
        setUsers([]);

        try {
            // If location or minRepos is provided, do advanced search
            if (location || minRepos) {
                const data = await fetchUsersAdvanced({ username, location, minRepos });
                if (data.items.length === 0) {
                    setError('Looks like we cant find the user');
                } else {
                    setUsers(data.items);
                }
            } else {
                // Basic single user search
                const data = await fetchUserData(username);
                setUser(data);
            }
        } catch (err) {
            setError('Looks like we cant find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Location (optional)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    placeholder="Minimum repositories (optional)"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    min="0"
                    className="border p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Search
                </button>
            </form>

            {loading && <p className="mt-4">Loading...</p>}

            {error && <p className="mt-4 text-red-600">{error}</p>}

            {/* Display single user result */}
            {user && (
                <div className="mt-6 flex items-center space-x-4 border p-4 rounded">
                    <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                    <div>
                        <h2 className="text-lg font-semibold">{user.name || user.login}</h2>
                        <a
                            href={user.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                        >
                            View Profile
                        </a>
                    </div>
                </div>
            )}

            {/* Display multiple users (advanced search) */}
            {users.length > 0 && (
                <div className="mt-6 space-y-4">
                    {users.map((userItem) => (
                        <div key={userItem.id} className="flex items-center space-x-4 border p-4 rounded">
                            <img
                                src={userItem.avatar_url}
                                alt={userItem.login}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h2 className="text-lg font-semibold">{userItem.login}</h2>
                                <a
                                    href={userItem.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 underline"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
