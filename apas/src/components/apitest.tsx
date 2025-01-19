interface Post {
    id: number;
    title: string;
  }

export default async function ApiTest() {
const response = await fetch('https://api.vercel.app/blog');
const posts: Post[] = await response.json();

return (
    <ul>
    {posts.map((post: Post) => (
        <li key={post.id}>{post.title}</li>
    ))}
    </ul>
);
}