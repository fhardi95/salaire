export default function Page({params}){
  const salary = Number(params.salary);
  const are = Math.round(salary*0.6);

  return (
    <main>
      <h1>ARE {salary}€</h1>
      <h2>{are}€ / mois</h2>
    </main>
  );
}