import { Rubik } from "@next/font/google";
import InfoCircle from "./info_circle";
import UserCircle from "./user_circle";

const rubik = Rubik({ subsets: ["latin"] });

const style = {
  fontFamily: rubik.style.fontFamily,
};

interface User {
  covered: boolean;
  name: {
    first: string;
    last: string;
    preferred: string;
  };
  subscriber: boolean;
  insurance: "Primary" | "Secondary";
  id: string;
}

export async function getServerSideProps() {
  // Fake Fetch
  const household = [
    {
      covered: true,
      name: { first: "Jerome", last: "Bell", preferred: "Rome" },
      subscriber: true,
      Insurance: "Primary",
      id: "",
    },
  ];
  return {
    props: { household },
  };
}

interface Props {
  // any props that come into the component
  household: Array<User>;
}

export default function Neem(props: Props) {
  // Input Handler
  const inputHandler = (event: React.ChangeEventHandler) => {
    console.log("event:", event);
    return;
  };

  const listItems = props.household.map((member, i) => {
    return (
      <div key={i.toString()} className="flex flex-wrap w-full">
        <div className="flex items-center w-3/12">
          <input
            type="checkbox"
            checked={member.covered}
            className="bg-primary ml-8"
            onChange={inputHandler}
          />
        </div>
        <div className="flex items-center w-4/12">
          <span className="mr-2">
            <UserCircle />
          </span>
          <span className="mr-2">{member.name.first}</span>
          <span className="mr-2">{member.name.last}</span>
          <span className="text-lightgray">({member.name.preferred})</span>
        </div>
        <div>
          <input
            type="radio"
            name="radio-1"
            className="radio bg-primary"
            checked={member.subscriber ? true : false}
          />
        </div>
        <div>{member.insurance}</div>
        <div>{member.id}</div>
      </div>
    );
  });

  return (
    <section
      className="flex flex-1 flex-col items-center p-4 overflow-auto"
      style={style}
    >
      <div className="flex flex-col w-full overflow-auto p-4">
        <h3 className="text-xl font-semibold mb-4">Household</h3>
        <div className="flex flex-col py-4">
          <div className="flex items-center">
            {/* Column headers */}
            <div className="flex items-center w-3/12">
              Covered
              {/* hero icons information-circle */}
              <InfoCircle />
            </div>
            <div className="w-4/12">Name</div>
            <div>Subscriber</div>
            <div>Insurance</div>
            <div>ID</div>
          </div>
        </div>
        {listItems}
      </div>
    </section>
  );
}
