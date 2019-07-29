/*The Reimbursement model is used to represent a single reimbursement 
that an employee would submit */
export default class Reimbursement {
    reimbursementId: string; // primary key
    author: string // not null, unique 
    amount: string // not null
    dateSubmitted: string // not null
    dateResolved: string // not null
    description: string // not null
    resolver: string // not null
    status: string // not null
    type: string // not null
    
    constructor(obj) {
        if (!obj) {
            return;
        }
        this.reimbursementId = obj.reimbursementid;//primary key
        this.author = obj.author; //not null unique
        this.amount = obj.amount; //not null 
        this.dateSubmitted = obj.datesubmitted; //not null 
        this.dateResolved = obj.dateresolved; //not null 
        this.description = obj.description; //not null 
        this.resolver = obj.resolver; //not null 
        this.status = obj.status; //not null 
        this.type = obj.type; //not null 
    }
}
