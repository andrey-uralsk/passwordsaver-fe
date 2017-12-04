import {Model} from "../Model";
import {PasswordType} from "../PasswordType/PasswordType";

export class Password extends Model {
    login?: string;
    password?: string;
    description?: string;
    passwordType?: PasswordType;
}