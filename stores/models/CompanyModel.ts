import { CompanyDto } from "../../api/companies";

interface CompanyModel extends CompanyDto {}

export class Company implements CompanyModel {
  constructor(public dto: CompanyDto) {}

  get id() {
    return this.dto.id;
  }

  get logo() {
    return this.dto.logo;
  }

  get trading() {
    return this.dto.trading;
  }

  get business() {
    return this.dto.business;
  }

  get domain() {
    return this.dto.domain;
  }

  get bic() {
    return this.dto.bic;
  }

  get nzbn() {
    return this.dto.nzbn;
  }

  get ird() {
    return this.dto.ird;
  }

  get acc() {
    return this.dto.acc;
  }

  get gst() {
    return this.dto.gst;
  }

  get account() {
    return this.dto.account;
  }
}
