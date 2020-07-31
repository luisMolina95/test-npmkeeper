import { getMatchEmployees } from "npmkeeper";

const roleA = {
  id: 1,
  name: "a",
  description: "a",
  default: true,
  weight: 1,
};

const roleB = {
  id: 2,
  name: "b",
  description: "b",
  default: false,
  weight: 2,
};

const employeeA = {
  id: 1,
  zohoUniqueId: "1",
  name: "a",
  username: "a",
  email: "a@mail.com",
  image: "",
  job: "job a",
  enabled: true,
  roles: [roleA],
};

const savedEmployees = [employeeA];
const incomingEmployees = [{ ...employeeA, name: "new name", roles: [roleB] }];

console.log(getMatchEmployees(savedEmployees, incomingEmployees)[0]);
