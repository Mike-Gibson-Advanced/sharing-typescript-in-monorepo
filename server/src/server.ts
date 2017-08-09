//import * as shared1 from "../../shared/src/shared";
 //import * as shared2 from "./shared/mySharedThing";
 
// symlink
import * as shared3 from "./shared/mySharedThing";

export const result = {
    server: "server",
    //shared1: shared1.shared,
    //shared2: shared2.shared,
    shared3: shared3.shared,
};

console.log(result);