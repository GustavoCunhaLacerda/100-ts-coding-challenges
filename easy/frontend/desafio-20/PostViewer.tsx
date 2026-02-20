import React, { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostViewer() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState<Post | null>(null);

  // Bug: array de dependências vazio — nunca re-executa quando postId muda
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((r) => r.json())
      .then(setPost);
  }, []);

  // Bug: sem cleanup — se o componente desmontar durante o fetch, setState é chamado em componente morto
  useEffect(() => {
    document.title = post ? post.title : "Loading...";
  });

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((id) => (
          <button key={id} onClick={() => setPostId(id)}>
            Post {id}
          </button>
        ))}
      </div>
      {post ? (
        <article>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </article>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
