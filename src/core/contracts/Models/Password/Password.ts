import {Model} from "../Model";

export class Password extends Model {
    login?: string;
    password?: string;
    description?: string;
    passwordType?: number;
}