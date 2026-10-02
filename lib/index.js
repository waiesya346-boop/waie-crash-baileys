import makeWASocket from './Socket/index.js';

function printBanner() {
    console.clear();
    const ESC = '\x1b';
    const RESET = `${ESC}[0m`;

    // Gradient hijau → cyan → biru → ungu → magenta
    const G1 = `${ESC}[38;5;46m`;   // hijau neon
    const G2 = `${ESC}[38;5;51m`;   // cyan
    const G3 = `${ESC}[38;5;21m`;   // biru
    const G4 = `${ESC}[38;5;129m`;  // ungu
    const G5 = `${ESC}[38;5;201m`;  // magenta

    console.log('');
    console.log(`${G1}██╗    ██╗ █████╗ ██╗███████╗${RESET}`);
    console.log(`${G1}██║    ██║██╔══██╗██║██╔════╝${RESET}`);
    console.log(`${G2}██║ █╗ ██║███████║██║█████╗${RESET}`);
    console.log(`${G3}██║███╗██║██╔══██║██║██╔══╝${RESET}`);
    console.log(`${G4}╚███╔███╔╝██║  ██║██║███████╗${RESET}`);
    console.log(`${G5} ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝╚══════╝${RESET}`);
    console.log('');
    console.log(`${G3}  ${G4}𝔴𝔞𝔦𝔢 𝔠𝔯𝔞𝔰𝔥 𝔟𝔞𝔦𝔩𝔢𝔶𝔰${G3} v1.0${RESET}`);
    console.log('');
    console.log(`${ESC}[2m${ESC}[38;5;240m────────────────────────────────────────────${RESET}`);
    console.log('');
}

printBanner();

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
