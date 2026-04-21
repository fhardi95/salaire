export default function Page({params}){
  const years = Number(params.years);
  const value = Math.round(2500 * years * 0.25);

  return (
    <main>
      <h1>Indemnité {years} ans</h1>
      <h2>≈ {value}€</h2>
    </main>
  );
}