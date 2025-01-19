import axios from 'axios';

interface Post {
  id: number;
  title: string;
}

export default async function ApiAxios() {
  const response = await axios.get<Post[]>('https://api.vercel.app/blog');
  const posts = response.data;

  return (
    <div>
        <h1 className='text-xl font-bold mb-4'>API Axios Test</h1>
        <ul>
        {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
        ))}
        </ul>
    </div>
    
  );
}
