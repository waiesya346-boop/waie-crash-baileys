import makeWASocket from './Socket/index.js';
import chalk from "chalk";
console.log(chalk.hex("#00c2ff")(`
███████╗██████╗  ██████╗  █████╗ ██████╗ 
██╔════╝██╔══██╗██╔════╝ ██╔══██╗██╔══██╗
█████╗  ██║  ██║██║  ███╗███████║██████╔╝
██╔══╝  ██║  ██║██║   ██║██╔══██║██╔══██╗
███████╗██████╔╝╚██████╔╝██║  ██║██║  ██║
╚══════╝╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝
`));
console.log(chalk.hex("#00c2ff")("L Bail - Baileys Modified Bye Edgar\n"));
console.log(chalk.gray("Follow channel for update:"));
console.log(chalk.cyan("https://t.me/edgar_information\n"));
export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export * from './Socket/ban-checker.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
