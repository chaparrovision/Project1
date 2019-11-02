/*The Reimbursement model is used to represent a single reimbursement
that an employee would submit */
export default class Reimbursement {
    public reimbursementId: string; // primary key
    public author: string; // not null, unique
    public amount: string; // not null
    public dateSubmitted: string; // not null
    public dateResolved: string; // not null
    public description: string; // not null
    public resolver: string; // not null
    public status: string; // not null
    public type: string; // not null

    constructor(obj) {
        if (!obj) {
            return;
        }
        this.reimbursementId = obj.reimbursementid; // primary key
        this.author = obj.author; // not null unique
        this.amount = obj.amount; // not null
        this.dateSubmitted = obj.datesubmitted; // not null
        this.dateResolved = obj.dateresolved; // not null
        this.description = obj.description; // not null
        this.resolver = obj.resolver; // not null
        this.status = obj.status; // not null
        this.type = obj.type; // not null
    }
}
