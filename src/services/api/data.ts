import { User } from '@/types/user';


export async function fetchUsers(): Promise<User[]> {
    try {
        console.log('Fetching users data...');
        await new Promise((resolve) => setTimeout(resolve, 5000));

        const res = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = await res.json();

        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch users');
    }
}
