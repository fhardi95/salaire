const posts = {
  "guide-salaire": {
    title:"Comprendre son salaire",
    content:"Guide complet salaire brut/net et optimisation"
  }
};

export default function Page({params}){
  const post = posts[params.slug];

  return (
    <main>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </main>
  );
}