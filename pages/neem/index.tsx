import { GetServerSideProps } from "next";
import { Rubik } from "@next/font/google";
import InfoCircle from "./info_circle";
import MemberRow from "./member_row";
import { useState } from "react";

const rubik = Rubik({ subsets: ["latin"] });

const style = {
  fontFamily: rubik.style.fontFamily,
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

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
};

interface Props {
  // any props that come into the component
  household: Array<HouseHoldMember>;
}

export default function Neem(props: Props) {
  const MemberRows = props.household.map((member) => {
    return <MemberRow member={member} key={member.uuid} />;
  });

  // Input Handler
  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Member Row inputHandler event:", event);
  };

  return (
    <section
      className="flex flex-1 flex-col items-center p-4 overflow-auto -tracking-2"
      style={style}
    >
      <div className="flex flex-col w-full overflow-auto">
        <h3 className="text-base font-medium mb-4">Household</h3>
        <div className="grid-container gap-4">
          {/* Column headers */}
          <div className="flex items-center text-xs font-normal">
            Covered
            <InfoCircle />
          </div>
          <div className="text-xs font-normal">Name</div>
          <div className="text-xs font-normal">Subscriber</div>
          <div className="text-xs font-normal">Insurance</div>
          <div className="text-xs font-normal">ID</div>
          {MemberRows}
        </div>
      </div>
    </section>
  );
}
