interface HouseHoldMember {
  uuid: string;
  covered: boolean;
  name: {
    first: string;
    last: string;
    preferred: string;
  };
  subscriber: boolean;
  insurance: "Primary" | "Secondary" | "";
  id: string;
}
