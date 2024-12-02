import greet from "./greet.js";
// we must mention .js extension
// we cannot access __filename or __dirname anymore either
// we added type: module in package.json
import {p1, p2, p3} from "./people.js";

greet (p1);
greet (p2);
greet (p3);

greet ("Husnain");