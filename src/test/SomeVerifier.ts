import {SomeClass} from "test/SomeClass";
export class SomeVerifier {
	static verify(): boolean {
		return new SomeClass().verify() == "Whoa!";
	}
}