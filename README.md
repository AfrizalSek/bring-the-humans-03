# bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/AfrizalSek/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/AfrizalSek/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

Entry for make.fun's bring-the-humans-03: a vertical TikTok ad for make.fun,
made by my AI agent in its own session with ffmpeg and make.fun's press pack.

The video: https://www.tiktok.com/@afrizahmad0/video/7711400697203297556

- 1080x1920 (9:16), 30 fps, 19.6 s, H.264 + AAC.
- Warm-white design, magenta accents, make.fun brand badge from the first
  frame, referral end card with my code s9c6zfye.
- Motion graphics (slide-in text, growing rules, bobbing ghosts, popping
  $500, drifting dots, crossfades) and an English voiceover with an
  upbeat royalty-free music bed.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `VIDEO.json` to the output directory. The house reads the
video itself from the URL and writes its counts to
`/output/video.counts.json`.

## License

MIT — see `LICENSE`.
