export class User {
  id: number;
  firstName: string;
  gender: string;
  ageGroup: string;
  userCode: string;
  reqs: {
      fruitReqs: number,
      vegReqs: number,
      proteinReqs: number,
      grainReqs: number
  };
  reqsStatus: {
      fruitMet: boolean,
      vegMet: boolean,
      proteinMet: boolean,
      grainMet: boolean
  };
  registered: boolean;
  email: string;

  constructor(id, name, gender, ageGroup, userCode, reqs, reqsStatus, registered, email) {
      this.id = id;
      this.firstName = name;
      this.gender = gender;
      this.ageGroup = ageGroup;
      this.userCode = userCode;
      this.reqs = reqs;
      this.reqsStatus = reqsStatus;
      this.registered = registered;
      this.email = email;
  }
}
