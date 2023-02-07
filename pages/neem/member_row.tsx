import { useState, useEffect } from "react";
// import UserCircle from "./user_circle";

interface Props {
  member: Member;
}
export default function MemberRows(props: Props) {
  console.log("MEMBER ROWS PROPS:", props);
  const [member, setMember] = useState<Member>(props.member);

  // const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("Member Row inputHandler event:", event);
  // };
  const inputHandler = (member: Member, property: string, value: boolean) => {
    console.log(member[property as keyof Member]);
    let updateMember: Member = member;
    updateMember[property as keyof Member] = value;

    setMember(updateMember);
  };

  return (
    <div className="row">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={member.covered}
          className="checked:bg-primary rounded-md ml-8 border-2 border-lightgray"
          onChange={() => inputHandler(member, "covered", !member["covered"])}
          tabIndex={0}
        />
      </div>
      <div className="flex items-center">
        <span className="bg-purple mr-2 rounded-full text-xs flex items-center justify-center p-1 text-white">
          {/* <UserCircle /> */}
          {member.name.first[0]}
          {member.name.last[0]}
        </span>
        <span className="mr-2">{member.name.first}</span>
        <span className="mr-2">{member.name.last}</span>
        <span className="text-lightgray">({member.name.preferred})</span>
      </div>
      <div className="flex items-center ml-6">
        <input
          type="radio"
          name="subscriber"
          className="radio checked:outline-primary checked:bg-primary checked:text-primary border-2 checked:ring-primary border-lightgray"
          checked={member.subscriber ? true : false}
          tabIndex={0}
          onChange={inputHandler}
        />
      </div>
      <select
        className="h-11 w-28 rounded-md"
        value={member.insurance}
        tabIndex={0}
        onChange={(e) => {
          member.insurance =
            e.target.value === "Primary"
              ? "Primary"
              : e.target.value === "Secondary"
              ? "Secondary"
              : "";
        }}
      >
        <option value="" className="p-2 hover:bg-primary"></option>
        <option value="Primary">Primary</option>
        <option value="Secondary">Secondary</option>
      </select>
      <div className="relative bottom-0">
        <input
          type="text"
          placeholder="Ins. ID/SSN"
          className="h-11 w-28 rounded-md text-sm"
          tabIndex={0}
        />
        {member.id}
      </div>
    </div>
  );
}
