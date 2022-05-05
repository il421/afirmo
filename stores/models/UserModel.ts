import { UserDto } from "../../api/users";

interface UserModel extends Pick<UserDto, "id" | "email" | "phoneNumbers"> {
  name: string;
  dateOfBirth: string;
  address: string;
}

export class User implements UserModel {
  constructor(public dto: UserDto) {}

  get id() {
    return this.dto.id;
  }

  get companyId() {
    return this.dto.companyId;
  }

  get name() {
    return `${this.dto.firstName} ${this.dto.lastName}`;
  }

  get dateOfBirth() {
    return new Date(this.dto.dob).toLocaleDateString();
  }

  get email() {
    return this.dto.email;
  }

  get phoneNumbers() {
    return this.dto.phoneNumbers;
  }

  get address() {
    return `${this.dto.address.suite} ${this.dto.address.street} ${this.dto.address.city} ${this.dto.address.zipcode}`;
  }
}
