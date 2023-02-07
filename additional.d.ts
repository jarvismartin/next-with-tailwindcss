interface Member {
  uuid: string;
  covered: boolean;
  name: {
    first: string;
    last: string;
    preferred: string;
  };
  subscriber: boolean;
  insurance: string;
  id: string;
}
