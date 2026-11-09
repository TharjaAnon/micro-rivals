# Micro Rivals — Pair Kiss Dialog

Version 2.1. Full line banks (20 per slot) plus a unique stage-1 script for every ordered pairing. 2.1 adds stage 5 (intimate kiss).

## Speaker order

1. Together (arrival): A, B, A, B — unique script per ordered couple
2. Kiss begins: B, A, B, A — banks `2A` (B first move), `2B` (A response), `2C` (B push), `2D` (A give-in)
3. Deep kiss: B, A — bank `3` (smooch sounds)
4. Kiss breaks: A, B — banks `4A` (A quip), `4B` (B comeback)
5. Intimate kiss (new in 2.1): B, A — bank `5` (breathy, lingering smooch sounds and murmurs; same shape as slot 3 but more intimate, with no line duplicated from slot 3)

## CG mapping (4:3, 1024×768 art)

Each pair has three CGs. The mock keeps them as `CG[pairKey] = {normal, kiss, intimate}` (falls back to the sample set), and crossfades between them:

| Stage | Label | CG |
| --- | --- | --- |
| 1 | Together | none — heroine sprites talking (A, B, A, B) |
| 2 (2A–2D) | Kiss begins | normal |
| 3 | Deep kiss | kiss |
| 4 (4A, 4B) | Kiss breaks | normal again |
| 5 | Intimate kiss | intimate |

A/B roles are swappable, so each of the 15 pairings works both ways (30 ordered pairs). Dialog is HuniePop 2 Double Date style: in-character, conversational, and flirty. Lines never mention the location or time of day, so any bank line works in any scene. Bank lines also never name a partner.

## Counts

- 6 heroines × 8 slots × 20 lines = **960** bank lines (840 from 2.0 plus 120 stage-5 lines)
- 30 unique stage-1 scripts × 4 lines = **120** couple-script lines
- Generic stage-1 fallbacks (`G1-XX-n`) are included for unused cases

IDs `01`–`05` in every bank slot, plus five original couple scripts (`S1-BW-RG`, `S1-EF-BC`, `S1-IW-LS`, `S1-BC-LS`, `S1-RG-IW`) and all generic fallbacks, are unchanged from the 1.0 prototype.

## Files

- `pair-kiss-dialog.json` — everything in one file (banks + stage-1 scripts + generic fallbacks)
- `banks.json` — heroine banks only
- `stage1.json` — couple scripts and generic fallbacks
- `banks/*.md` — readable per-heroine banks
- `stage1-couple-scripts.md` — readable couple scripts

## Codes and IDs

- EF Emma Frost, RG Rogue, BW Black Widow, BC Black Cat, LS Luna Snow, IW Invisible Woman (Sue Storm)
- Bank line: `{code}-{slot}-{NN}`, e.g. `EF-2A-07` or `RG-5-07` (stage 5)
- Stage-1 line: `S1-{Acode}-{Bcode}-{1-4}`, e.g. `S1-EF-RG-1` (Emma as A, Rogue as B, first line)
