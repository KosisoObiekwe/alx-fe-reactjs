import axios from 'axios';

export async function fetchUserData(username) {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        throw new Error('User not found');
    }
}

// New function for advanced search
export async function fetchUsersAdvanced({ username, location, minRepos }) {
    try {
        let query = username;
        if (location) query += `+location:${location}`;
        if (minRepos) query += `+repos:>=${minRepos}`;

        const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
        return response.data; // contains items array
    } catch (error) {
        throw new Error('Users not found');
    }
}