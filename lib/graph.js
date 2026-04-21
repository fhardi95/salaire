export const graph = {
  salary:["/are-chomage/3000","/indemnite-licenciement/5"],
  chomage:["/salaire-net/2500"],
  indemnity:["/salaire-net/3000"]
};

export function links(type){
  return (graph[type]||[]).map(u=>({url:u,label:"Page liée"}));
}