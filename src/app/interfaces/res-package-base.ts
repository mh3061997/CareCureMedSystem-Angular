import { ResMembership } from "./res-membership"

export interface ResPackageBase {
    code:number;
    name:string;
    dateCreated:string;
    dateExpired:string;
    status:string;
    price:number;
    unitTotal:number;
    type:string;
    memberships:ResMembership[];

}
