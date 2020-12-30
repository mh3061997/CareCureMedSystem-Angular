import { ResMembership } from "./res-membership"

export interface ResPackageBase {
    code:number;
    name:string;
    dateCreated:Date;
    dateExpired:Date;
    status:string;
    price:number;
    unitTotal:number;
    type:string;
    memberships:ResMembership[];

}
