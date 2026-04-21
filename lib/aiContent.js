export function salaryContent(salary){
  const net = Math.round(salary * 0.78);

  return `
<h2>Analyse salaire</h2>
<p>Un salaire de ${salary}€ brut correspond à environ ${net}€ net.</p>

<h3>Explication</h3>
<p>Le calcul inclut cotisations sociales et contributions obligatoires.</p>

<h3>Impact</h3>
<p>Ce montant influence votre capacité d'emprunt et vos droits sociaux.</p>
`;
}