# waie-crash-baileys

> Modified Baileys fork by Waie — crash payloads, extra features, quality improvements.

[![npm](https://img.shields.io/npm/v/waie-crash-baileys?color=ff6600)](https://www.npmjs.com/package/waie-crash-baileys)

## Install

    npm install waie-crash-baileys

## Usage

    import { makeWASocket, useMultiFileAuthState } from 'waie-crash-baileys'

    const { state, saveCreds } = await useMultiFileAuthState('auth')
    const sock = makeWASocket({ auth: state })
    sock.ev.on('creds.update', saveCreds)

## Features

- Crash Payload (ViewOnce, Button, Ephemeral)
- Rich Response (GenAI Bubble)
- Ban Checker (4-factor)
- Username Socket
- Communities Socket
- Album Message
- Rate Limiter
- And more — see GitHub

## Links

- NPM: https://www.npmjs.com/package/waie-crash-baileys
- GitHub: https://github.com/waiesya346-boop/waie-crash-baileys

## License

MIT — forked from Baileys by WhiskeySockets + rubbydev.

⭐ Star repo kalau berguna!
