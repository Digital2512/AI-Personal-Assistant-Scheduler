interface Post {
    id: number;
    title: string;
  }

export default async function ApiTest() {
const response = await fetch('https://api.vercel.app/blog');
const posts: Post[] = await response.json();

return (

    <div>
        <h1 className='text-xl font-bold mb-4'>API Default Fetch Test</h1>
        <ul>
        {posts.map((post: Post) => (
            <li key={post.id}>{post.title}</li>
        ))}
        </ul>
    </div>
    
);
}