export function salarySchema(salary, net){
  return {
    "@context":"https://schema.org",
    "@type":"FinancialProduct",
    name:`Salaire ${salary} brut net`,
    description:"Simulation salaire brut en net",
    result:`${net}€ net`
  };
}