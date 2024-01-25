
import * as readline from "readline";
import { stdin as input, stdout as output } from "process";
import { UserView } from "./userview/userView";

async function main() {
    const rl = readline.createInterface({ input, output });

    const view = new UserView(rl);

    view.show();
}

main();