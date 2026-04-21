export default function sitemap(){
  const base="https://www.calculateursalaire.fr";

  const salaries = Array.from({length:66},(_,i)=>1500+i*100);

  return salaries.map(s=>({
    url:`${base}/salaire-net/${s}`,
    priority:0.9
  }));
}