import { Rubik } from "@next/font/google";
import InfoCircle from "./info_circle";
import MemberRows from "./member_rows";

const rubik = Rubik({ subsets: ["latin"] });

const style = {
  fontFamily: rubik.style.fontFamily,
};

export async function getServerSideProps() {
  // Fake Fetch
  const household = [
    {
      uuid: "a3bbc89c-a669-11ed-afa1-0242ac120002",
      covered: true,
      name: { first: "Jerome", last: "Bell", preferred: "Rome" },
      subscriber: true,
      insurance: "Primary",
      id: "",
    },
    {
      uuid: "bc39ff10-a669-11ed-afa1-0242ac120002",
      covered: true,
      name: { first: "Stacy", last: "Bell", preferred: "Stacy" },
      subscriber: true,
      insurance: "Primary",
      id: "",
    },
    {
      uuid: "c9b59794-a669-11ed-afa1-0242ac120002",
      covered: false,
      name: { first: "Rebecca", last: "Bell", preferred: "Becca" },
      subscriber: true,
      insurance: "",
      id: "",
    },
  ];
  return {
    props: { household },
  };
}

interface Props {
  // any props that come into the component
  household: Array<HouseHoldMember>;
}

export default function Neem(props: Props) {
  // Input Handler
  const inputHandler = (event: React.ChangeEventHandler) => {
    console.log("event:", event);
    return;
  };

  return (
    <section
      className="flex flex-1 flex-col items-center p-4 overflow-auto"
      style={style}
    >
      <div className="flex flex-col w-full overflow-auto p-4">
        <h3 className="text-xl font-semibold mb-4">Household</h3>
        <div className="grid-container">
          {/* Column headers */}
          <div className="flex ">
            Covered
            {/* hero icons information-circle */}
            <InfoCircle />
          </div>
          <div className="">Name</div>
          <div>Subscriber</div>
          <div>Insurance</div>
          <div>ID</div>
          <MemberRows
            household={[...props.household]}
            inputHandler={inputHandler}
          />
        </div>
      </div>
    </section>
  );
}
