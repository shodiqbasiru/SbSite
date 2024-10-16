export interface Education {
    id? : string;
    institution : string;
    degree : string;
    startDate : Date;
    endDate? : Date;
    location : string;
    description : string;
    program? : string;
}