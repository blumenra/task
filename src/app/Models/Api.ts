import { Question } from "./Question";

export interface Api{
    response_code:number,
    results:Question[]
}