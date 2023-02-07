import UserCircle from "./user_circle";

interface Props {}
export default function MemberRows(props: {
  household: Array<HouseHoldMember>;
  inputHandler: Function;
}) {
  console.log("MEMBER ROWS PROPS:", props);

  const memberRows = props.household.map((member: HouseHoldMember) => {
    return (
      <div key={member.uuid} className="row">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={member.covered}
            className="checked:bg-primary rounded-sm ml-8 border-2 border-lightgray"
            onChange={props.inputHandler}
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
        <div className="flex items-center">
          <input
            type="radio"
            name="radio-1"
            className="radio checked:outline-primary checked:bg-primary checked:text-primary border-2 border-lightgray"
            checked={member.subscriber ? true : false}
          />
        </div>
        <select className="h-11 w-28" value={member.insurance}>
          <option value=""></option>
          <option value="Primary">Primary</option>
          <option value="Secondary">Secondary</option>
        </select>
        <div className="relative bottom-0">
          <input type="text" placeholder="Ins. ID/SSN" className="h-11 w-24" />
          {member.id}
        </div>
      </div>
    );
  });

  return memberRows;
}
