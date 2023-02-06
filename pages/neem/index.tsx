import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const style = {
  fontFamily: montserrat.style.fontFamily,
};

// Fetch
// const response = await fetch("https://randomuser.me/api/");
// const json = await response.json();
// const person = json.results[0];
// console.log("PERSON:", person);

export async function getServerSideProps() {
  // Fetch
  const response = await fetch("https://randomuser.me/api/");
  const json = await response.json();
  const person = json.results[0];
  console.log("PERSON:", person);
  return {
    props: { person },
  };
}

export default function Neem(props) {
  console.log(props);
  return (
    <section
      className="flex flex-1 flex-col items-center justify-center p-4 overflow-auto"
      style={style}
    >
      <h1 className="text-3xl font-semibold">Neem</h1>
      <div className="flex w-full overflow-auto p-4">
        <span className="mr-2">{props.person.name.first}</span>
        <span>{props.person.name.last}</span>
      </div>
    </section>
  );
}
