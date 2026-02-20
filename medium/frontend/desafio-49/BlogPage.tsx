import React, { useState, useEffect } from "react";

interface Post { id: number; title: string; body: string }

// Sem Error Boundary — erro em qualquer componente filho derruba toda a árvore
export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((r) => r.json())
      .then((data) => { setPosts(data); setLoading(false); });
    // Sem tratamento de erro de rede
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {posts.map((post) => (
        // Se PostCard lançar um erro, toda a BlogPage quebra
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  // Simula um erro ocasional em um card específico
  if (post.id === 3) throw new Error(`Failed to render post ${post.id}`);
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
}
