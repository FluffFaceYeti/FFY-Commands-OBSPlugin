# AutoVIP for Streamer.bot

Automatically gives VIP to your top supporters and removes it when they drop off. VIPs only change while you're live.

**Credit:** BehavingBeardly

---

## How it works

The top 30 viewers on each leaderboard get VIP, as long as they meet the minimum:

| Leaderboard   | Minimum to qualify          |
|---------------|-----------------------------|
| Watch streak  | 5 streams in a row          |
| Sub streak    | 5 months                    |
| Gifted subs   | 1 gifted sub                |
| Bits cheered  | 100 bits                    |

### Who is skipped

- Mods, lead mods, editors and artists (detected automatically)
- Bots and the broadcaster
- Manual VIPs: anyone on the **Manual VIPs** list, or anyone given VIP by hand

Skipped users never appear on the leaderboards, in `!myrank` or in the saved lists, and never take up a VIP spot. Only normal viewers can win or lose the badge.

> **Note:** AutoVIP never removes a VIP it didn't give.

---

## Commands

### Everyone

| Command   | Description                   |
|-----------|-------------------------------|
| `!myrank` | See your leaderboard ranks    |

### Mods only

| Command                       | Description                          |
|-------------------------------|--------------------------------------|
| `!refreshvip`                 | Update VIPs now                      |
| `!setgifted <user> <amount>`  | Fix someone's gifted sub total       |
| `!topwatchstreak`             | Show the watch streak leaderboard    |
| `!topsubstreak`               | Show the sub streak leaderboard      |
| `!topgifters`                 | Show the gifted subs leaderboard     |
| `!topbits`                    | Show the bits leaderboard            |
| `!topvips`                    | Show all leaderboards                |

---

## Settings

All settings are at the top of the code.

| Setting                  | Description |
|--------------------------|-------------|
| Minimums and top 30      | How viewers qualify for each leaderboard |
| Manual VIPs              | Names the script will leave alone |
| `RESET_PERIOD_MONTHS`    | `0` never resets, or set a period such as `6`, `12`, `24`… |
| `RESET_START_DATE`       | When reset periods start, e.g. `"2026-01-01"`. Use `""` to start from the first run |
| `RESET_KEEPS_DATA`       | `true` ranks on the current period only and keeps all-time data. `false` wipes everything on reset |
| `INCLUDE_LIFETIME_DATA`  | `true` uses Twitch's lifetime numbers. `false` counts only since the last reset |
| `ANNOUNCE_NEW_VIPS`      | `true` posts in chat when someone earns VIP |
| `GRACE_PERIOD_DAYS`      | Days someone keeps VIP after dropping off a leaderboard |
| `ENABLE_MYRANK`          | `true` turns on the `!myrank` command |

---

## Saved lists

Full rankings are saved as **Global Variables** in Streamer.bot and update on every refresh:

- `AutoVIP - WatchStreakList`
- `AutoVIP - SubStreakList`
- `AutoVIP - GiftedSubsList`
- `AutoVIP - BitsList`
- `AutoVIP - CurrentVIPsList`

---

## Installation

1. In Streamer.bot, go to **Import** and import the AutoVIP file, then **Enjoy**.
2. Open the **AUTOVIP** code, change it to meet your needs and click **Compile**.
3. Enable the **AutoVIP commands** and the **Auto VIP Refresh** timer.
