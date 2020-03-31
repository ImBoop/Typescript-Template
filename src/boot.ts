process.env.NODE_PATH = __dirname;
require('module').Module._initPaths();
// Above should be removed once packed, if applicable.
import {SomeVerifier} from "test/SomeVerifier";
interface Test {
	whoa: number;
}
let thing:Test = {whoa: 123};
console.log("Hey " + thing.whoa);
console.log("Module Test... ", SomeVerifier.verify() ? "Success!" : "Oh no.");