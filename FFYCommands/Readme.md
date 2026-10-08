# FFY Counters for Streamer.bot

Keep a running count of anything in chat, like how many times you've crashed, died or raged.

```
Viewer: !crash
Chat:   FluffFaceYeti has crashed 5 times!
```

- Works on **Twitch, Kick and YouTube**.
- Runs inside **Streamer.bot** (version 1.0 or newer).
- Counts are **kept forever**. They don't reset at midnight, and they survive a restart.
- Works on its own, or alongside **FFY Commands**.

---

## Installing

1. Download the **`FFY-Counters`** file from this page.
2. Open **Streamer.bot** and click **Import** in the bar at the top.
3. Drag and drop the file into the box.
4. Click **Import**.

✅ Done. The commands are switched on for you. Type `!crash` in chat to test.

Then **set the remove, reset and set commands to mods only** (see [Permissions](#permissions)), so chat can't change your counts.

---

## The counters

| Word | Chat shows |
|---|---|
| `crash` | `FluffFaceYeti has crashed 5 times!` |
| `death` | `FluffFaceYeti has died 5 times!` |
| `rage` | `FluffFaceYeti has raged 5 times!` |
| `bananas` | `FluffFaceYeti has eaten 5 bananas!` |
| `coffee` | `FluffFaceYeti has had 5 coffees!` |
| `cookies` | `FluffFaceYeti has eaten 5 cookies!` |
| `hugs` | `FluffFaceYeti has given out 5 hugs!` |
| `waffles` | `FluffFaceYeti has eaten 5 waffles!` |

Your channel name is filled in automatically, and it says `1 time` but `2 times`.

---

## The commands

Every counter has the same commands. Here they are for `crash`:

| Command | What it does | Chat shows |
|---|---|---|
| `!crash` or `!addcrash` | Adds 1 | `FluffFaceYeti has crashed 5 times!` |
| `!crashcount` | Shows the count | `FluffFaceYeti has crashed 5 times!` |
| `!removecrash` or `!remove crash` | Takes 1 away (never below 0) | `FluffFaceYeti has crashed 4 times! (one taken back by Bob)` |
| `!resetcrash` or `!reset crash` | Back to 0 | `FluffFaceYeti has crashed 0 times! (reset by Bob)` |
| `!setcrash 42` or `!set crash 42` | Sets it to any number | `FluffFaceYeti has crashed 42 times! (set by Bob)` |

So `!death`, `!setdeath 3`, `!removebananas`, `!wafflescount` and so on all work the same way.

---

## Permissions

You'll probably want only mods to fix or reset counts:

1. Click the **Commands** tab and open the **FFY Counters** folder.
2. Open a command, e.g. **!resetcrash**.
3. In its **Permissions** settings, limit it to moderators.
4. Click **OK**.

Do this for each `!remove...`, `!reset...` and `!set...` command, plus `!remove`, `!reset` and `!set`. You can also give `!crash` and the others a cooldown here, so chat can't spam them.

---

## Adding your own counter

We'll add `oops`.

### Step 1: add the word

1. Click the **Actions** tab, open the **FFY Counters** group, and click the **FFY Counters** action.
2. On the right, under **Sub-Actions**, double-click **Execute C# Code**.
3. Between `===== EDIT BELOW =====` and `===== EDIT ABOVE =====`, add a line under the other `Word(...)` lines:
   ```csharp
   Word("oops", "{streamer} has said oops {count} time{s}!");
   ```
4. Click **Save and Compile**.

`!remove oops`, `!reset oops` and `!set oops 5` work straight away.

### Step 2: add its commands

For each of these: `!oops`, `!oopscount`, `!removeoops`, `!resetoops`, `!setoops`:

1. **Commands tab:** right-click → **Add**.
   - **Name** and **Commands:** e.g. `!oops`
   - **Location:** Start
   - **Group:** `FFY Counters`
   - **Sources:** tick **Twitch**, **Kick** and/or **YouTube**
   - **Enabled:** ticked ✅
   - Click **OK**.
2. **Actions tab:** click the **FFY Counters** action. In the **Triggers** box, right-click → **Add** → **Core** → **Commands** → **Command Triggered**, pick the command, and click **OK**.

> You only *need* `!oops`. The others are optional, because `!remove oops`, `!reset oops` and `!set oops 5` already work.

---

## Writing the sentence

Each counter has one line:

```csharp
Word("crash", "{streamer} has crashed {count} time{s}!");
```

- The **first part** (`"crash"`) is the command word, without the `!`.
- The **second part** is what chat shows. You can use:

| Placeholder | Becomes |
|---|---|
| `{streamer}` | Your channel name |
| `{count}` | The number |
| `{s}` | An "s" when the count isn't 1: `1 time`, `2 times` |
| `{user}` | Whoever typed the command |

More examples:

```csharp
Word("pizza", "{streamer} has eaten {count} slice{s} of pizza today!");
Word("gg",    "Chat has said GG {count} time{s}!");
Word("fall",  "{streamer} has fallen off the map {count} time{s}... 🙈");
```

**Rules:** text goes in `"quote marks"`, there's a comma between the two parts, and every line ends with `;`.

---

## Other settings

In the same code:

| Setting | What it does |
|---|---|
| `StreamerName = "";` | Leave it empty to use your channel name automatically. If your name shows wrong, type it between the quote marks. |
| `RemoveNote`, `SetNote`, `ResetNote` | The extra bit shown after remove, set and reset, e.g. ` (set by {user})`. Set it to `""` to show nothing. |
| `SetHelp` | The reply when someone types `!setcrash` without a proper number. |

---

## Seeing or changing counts by hand

Every count is saved in the **Global Variables** tab as `counter.crash`, `counter.death` and so on. You can edit or delete them there. Deleting one sets it back to 0.

---

## Troubleshooting

- **No reply:** is the command switched on in the **Commands** tab, and is it a trigger on the **FFY Counters** action?
- **The word isn't recognised:** check its `Word(...)` line, and that you clicked **Save and Compile**.
- **"Save and Compile" shows an error:** look for a missing `"`, `,` or `;` on the line it mentions.
- **Commands named "... (Copy)":** Streamer.bot adds "(Copy)" when you import a command whose name already exists. Delete the old commands, delete the copies, and import again.
- Anything else: check the **Logs** tab for lines with **FFY Counters**.

---
