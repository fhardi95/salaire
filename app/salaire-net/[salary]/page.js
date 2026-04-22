import { salaryContent } from "@/lib/aiContent";
import { titleSalary } from "@/lib/ctr";
import { links } from "@/lib/graph";

export default function Page({params}){
  const salary = Number(params.salary);
  const net = Math.round(salary*0.78);

  const content = salaryContent(salary);
  const lks = links("salary");

  return (
    <main>
      <h1>{titleSalary(salary)}</h1>
      <h2>{net}€ net</h2>

      <div dangerouslySetInnerHTML={{__html:content}} />

      <h3>Pages liées</h3>
      <ul>
        {lks.map(l=> <li key={l.url}><a href={l.url}>{l.label}</a></li>)}
      </ul>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"WebPage",
            name:titleSalary(salary)
          })
        }}
      />
    </main>
  );
}