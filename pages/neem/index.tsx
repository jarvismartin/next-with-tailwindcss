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

interface Props {
  // any props that come into the component
  person: {
    gender: string;
    name: { title: string; first: string; last: string };
    location: {
      street: { number: number; name: string };
      city: string;
      state: string;
      country: string;
      postcode: number;
      coordinates: { latitude: string; longitude: string };
      timezone: {
        offset: string;
        description: string;
      };
    };
    email: string;
    login: {
      uuid: string;
      username: string;
      password: string;
      salt: string;
      md5: string;
      sha1: string;
      sha256: string;
    };
    dob: { date: string; age: number };
    registered: { date: string; age: number };
    phone: string;
    cell: string;
    id: { name: string; value: null };
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
  };
}

export default function Neem(props: Props) {
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
