# 📖 FFY Commands: The Complete Guide

Everything you need to set up, use and customise **FFY Commands** in Streamer.bot, step by step with examples.

> **New to this?** Don't worry. You don't need to know how to code. Every section says exactly where to click, and every example can be copied and pasted.

---

## Contents

**Part 1: Getting started**
- [1. What is FFY Commands?](#1-what-is-ffy-commands)
- [2. Installing](#2-installing)
- [3. Switching commands on](#3-switching-commands-on)
- [4. First-time setup](#4-first-time-setup)
- [5. A tour of what was installed](#5-a-tour-of-what-was-installed)

**Part 2: Editing**
- [6. How editing works](#6-how-editing-works)
- [7. The golden rules](#7-the-golden-rules)
- [8. Placeholders: the words in {curly brackets}](#8-placeholders-the-words-in-curly-brackets)

**Part 3: Adding your own commands**
- [9. Every new command needs this: connecting it to Streamer.bot](#9-every-new-command-needs-this-connecting-it-to-streamerbot)
- [10. Number commands](#10-number-commands)
- [11. List commands](#11-list-commands)
- [12. Interactions](#12-interactions)
- [13. "of the Day" titles](#13-of-the-day-titles)
- [14. Special replies for viewers](#14-special-replies-for-viewers)
- [15. Counters (FFY Counters)](#15-counters-ffy-counters)
- [16. Countdowns](#16-countdowns)
- [17. Dice](#17-dice)
- [18. Duels](#18-duels)
- [19. Reply commands](#19-reply-commands)
- [20. Santa](#20-santa)
- [21. Keeping your changes safe from updates](#21-keeping-your-changes-safe-from-updates)

**Part 4: Changing what's already there**
- [22. Common changes](#22-common-changes)

**Part 5: Reference**
- [23. Switches (FFY Switches)](#23-switches-ffy-switches)
- [24. Settings (FFY Config)](#24-settings-ffy-config)
- [25. Every data action explained](#25-every-data-action-explained)
- [26. All 200 commands](#26-all-200-commands)
- [27. Saved results and user variables](#27-saved-results-and-user-variables)
- [28. Troubleshooting](#28-troubleshooting)
- [29. FAQ](#29-faq)

---

# Part 1: Getting started

## 1. What is FFY Commands?

A pack of **200 fun chat commands** for Streamer.bot that work on **Twitch, Kick and YouTube**:

| Type | Examples | What happens |
|---|---|---|
| **Number commands** | `!pp`, `!beard`, `!rizz`, `!strength` | Each viewer gets a number for the day: `@Bob, your rizz is at 87% today!` |
| **List commands** | `!drink`, `!animal`, `!patronus` | Each viewer gets something from a list for the day: `@Bob, your drink of the day is Martini!` |
| **Interactions** | `!hug @Sam`, `!slap @Sam`, `!boop @Sam` | `@Bob Hugged @Sam with 73% power!` |
| **Games** | `!rps @Sam`, `!swordfight @Sam`, `!d20` | Rock-paper-scissors, duels, dice and more |
| **Titles** | `!dadofday`, `!momofday` | The first person to hit 100% wins the title for the day |
| **Extras** | `!santa`, `!sotfest`, `!leaderboard` | Santa's list, countdowns, leaderboards |
| **Counters** *(separate import)* | `!crash`, `!death` | Keep a running count, e.g. `FluffFaceYeti has crashed 4 times!` (see [section 15](#15-counters-ffy-counters)) |

**Results stay the same all day.** If Bob types `!pp` ten times, he gets the same answer ten times. At midnight everyone gets a new one.

---

## 2. Installing

You need **Streamer.bot version 1.0 or newer**.

1. Download the **`FFYCommands`** file from this page. (This is the **first install** file. Updates use a different file, see below.)
2. Open **Streamer.bot**.
3. Click **Import** in the bar at the top of the window.
4. Drag and drop the file into the box.
5. Click **Import**.

✅ That's it: everything is installed. **All the commands start switched off**, so you get to choose which ones you want. Go to the next section to switch them on.

### Updating to a newer version

Just import the **`FFYCommands-update`** file over the top. **No need to delete anything first.**

- The built-in commands and actions are replaced with the new versions.
- **New commands are added** (switched off, like at install).
- **Anything removed in the new version is switched off for you.** You can delete it afterwards if you like.
- **Your stuff is never touched:**
  - **FFY Config** and **FFY Switches** (your settings)
  - **FFY Special Users** and **FFY Special Interactions**
  - **FFY My Triggers**, **FFY My Number Commands**, **FFY My List Commands**, and any **FFY My ...** action you make
  - any other action you made yourself
  - your existing commands, including whether they're on or off, their cooldowns and permissions

> ⚠️ **Changes made inside the built-in actions** (like FFY Stats or FFY Drinks) **are replaced by updates.** Put your changes in the **FFY My ...** actions instead. [Section 21](#21-keeping-your-changes-safe-from-updates) shows how.

### Before you update: make a backup (recommended)

You only *need* this if you changed a built-in action, but it takes a minute and means nothing can be lost.

1. Click **Export** in the bar at the top of Streamer.bot.
2. Tick every action whose name starts with **FFY**.
3. Copy the export text it gives you.
4. Paste it into Notepad and save it, e.g. `ffy-backup-before-update.txt`.

After updating, if something of yours is missing:
- **To copy lines back:** open the backup in Notepad, find your lines, and paste them into the matching **FFY My** action, so the next update can't remove them.
- **To put an action back exactly as it was:** import the backup file. It replaces the actions it contains.

> 💡 **Moving your changes into FFY My actions once means you never need to back up again.** Updates never touch them.

---

## 3. Switching commands on

Every command starts switched **off**. Pick the ones you want.

### Switch on one command at a time

1. Click the **Commands** tab in Streamer.bot.
2. Open a folder, for example **FFY Stats**.
3. Click a command, for example **!beard**.
4. Tick **Enabled** ✅ and click **OK**.
5. Type `!beard` in your chat. 🎉

> You can also right-click a command and choose to enable or disable it there.

### Switch them all on at once

1. Click the **Actions** tab.
2. Open the **FFY Core** group.
3. Right-click **FFY Enable All Commands** and choose **Run Now**.

All 200 are now on. Then switch off any you don't want, one by one.

### Switch them all off again

Same as above, but run **FFY Disable All Commands**.

---

## 4. First-time setup

### Set your channel name

This makes your viewers' daily results unique to your channel.

1. Click the **Actions** tab.
2. Open the **FFY Helpers** group (click the little arrow next to it).
3. Click **FFY Config**.
4. On the right, under **Sub-Actions**, double-click **Execute C# Code**. A code window opens.
5. Find this line:
   ```csharp
   Set("channelName", "");
   ```
6. Put your channel name between the quote marks:
   ```csharp
   Set("channelName", "YourChannelName");
   ```
7. Click **Save and Compile** (bottom of the window), then close the window.

### Check your switches

Open **FFY Switches** (also in **FFY Helpers**) the same way. Each switch has a line above it explaining what it does. Set each one to `true` (on) or `false` (off), and click **Save and Compile**. See [section 23](#23-switches-ffy-switches) for the full list.

### Set your time zone (optional)

By default, "today" (and midnight) follows your PC's clock. That's fine for most people. To use a set time zone instead, change this line in **FFY Config**:

```csharp
Set("timeZone", "GMT Standard Time");
```

| Time zone name (copy this) | Offset | Places |
|---|---|---|
| `"GMT Standard Time"` | UTC+00:00 | Dublin, Edinburgh, Lisbon, London |
| `"Romance Standard Time"` | UTC+01:00 | Brussels, Copenhagen, Madrid, Paris |
| `"W. Europe Standard Time"` | UTC+01:00 | Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna |
| `"Central European Standard Time"` | UTC+01:00 | Sarajevo, Skopje, Warsaw, Zagreb |
| `"GTB Standard Time"` | UTC+02:00 | Athens, Bucharest |
| `"FLE Standard Time"` | UTC+02:00 | Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius |
| `"South Africa Standard Time"` | UTC+02:00 | Harare, Pretoria |
| `"India Standard Time"` | UTC+05:30 | Chennai, Kolkata, Mumbai, New Delhi |
| `"Singapore Standard Time"` | UTC+08:00 | Kuala Lumpur, Singapore |
| `"China Standard Time"` | UTC+08:00 | Beijing, Chongqing, Hong Kong SAR, Urumqi |
| `"W. Australia Standard Time"` | UTC+08:00 | Perth |
| `"Tokyo Standard Time"` | UTC+09:00 | Osaka, Sapporo, Tokyo |
| `"Cen. Australia Standard Time"` | UTC+09:30 | Adelaide |
| `"E. Australia Standard Time"` | UTC+10:00 | Brisbane |
| `"AUS Eastern Standard Time"` | UTC+10:00 | Canberra, Melbourne, Sydney |
| `"New Zealand Standard Time"` | UTC+12:00 | Auckland, Wellington |
| `"E. South America Standard Time"` | UTC-03:00 | Brasilia |
| `"Atlantic Standard Time"` | UTC-04:00 | Atlantic Time (Canada) |
| `"Eastern Standard Time"` | UTC-05:00 | Eastern Time (US & Canada) |
| `"Central Standard Time"` | UTC-06:00 | Central Time (US & Canada) |
| `"Mountain Standard Time"` | UTC-07:00 | Mountain Time (US & Canada) |
| `"US Mountain Standard Time"` | UTC-07:00 | Arizona |
| `"Pacific Standard Time"` | UTC-08:00 | Pacific Time (US & Canada) |
| `"Alaskan Standard Time"` | UTC-09:00 | Alaska |
| `"Hawaiian Standard Time"` | UTC-10:00 | Hawaii |
| `"UTC"` | UTC+00:00 | Universal time (no daylight saving) |

> ⚠️ **Use the names in this table, not names like `Europe/London` or `America/New_York`.** Streamer.bot runs on Windows, which only understands the Windows names. If the name isn't recognised, FFY uses your PC's clock instead and writes `[FFY] Unknown timeZone` in the **Logs** tab.
>
> Not listed? Search online for *"Windows time zone ID"* plus your city. Daylight saving (summer time) is handled automatically.

---

## 5. A tour of what was installed

### In the Commands tab

200 chat commands, sorted into folders:

| Folder | What's in it |
|---|---|
| **FFY Stats** | `!pp`, `!bb`, `!beard`, `!daddy`, `!mommy`, `!ghost`, `!bald`... |
| **FFY Personality** | `!rizz`, `!sus`, `!chaos`, `!charisma`, `!luck`... |
| **FFY Emotions** | `!happiness`, `!anger`, `!hydration`... |
| **FFY Skills** | `!stealth`, `!cooking`, `!dj`... |
| **FFY Gym** | `!lift`, `!benchpress`, `!deadlift`... |
| **FFY Actions** | `!punch`, `!kickflip`, `!uppercut`... |
| **FFY Piracy**, **FFY Sea of Thieves** | Pirate and Sea of Thieves commands |
| **FFY Carry**, **FFY Hold** | `!weight`, `!items`, `!gold` |
| **FFY List Commands** | `!drink`, `!animal`, `!colors`, `!patronus`, `!fish`... |
| **FFY Interactions** | `!hug`, `!slap`, `!boop`... plus `!accept`, `!deny` and `!top` |
| **FFY Games** | Duels, dice, rock-paper-scissors and more |
| **FFY Of The Day** | `!dadofday`, `!momofday`, `!ppofday`... |
| **FFY Holiday** | `!present`, `!costume`, `!easteregg`, `!elfname`, `!pumpkin`, `!santa`, `!santastats` |
| **FFY Countdowns**, **FFY Leaderboards** | `!sotfest`, `!leaderboard` |

Each one is a normal Streamer.bot command, so you can give it a cooldown, limit it to subs or mods, or switch it off, the same as any other.

### In the Actions tab

| Group | Actions | Edit it? |
|---|---|---|
| **FFY Core** | **FFY Setup** (loads everything on import), **FFY Enable All Commands**, **FFY Disable All Commands** | Just run them when you need them |
| **FFY Commands** | **FFY Commands**: the "brain" that answers every command. **FFY My Triggers**: where *your* commands' triggers go | ⛔ **Never edit the code** of either. Add your triggers to **FFY My Triggers** |
| **FFY Helpers** | Settings, switches, special replies, interactions, titles, counters | ✅ Yes |
| **FFY Number Commands** | One action per folder: FFY Stats, FFY Gym, FFY Personality... plus **FFY My Number Commands** for yours | ✅ Yes (put your changes in **FFY My** actions, see [section 21](#21-keeping-your-changes-safe-from-updates)) |
| **FFY List Commands** | FFY Drinks, FFY Animals, FFY Colors... plus **FFY My List Commands** for yours | ✅ Yes |
| **FFY Games** | FFY Duels, FFY Dice | ✅ Yes |
| **FFY Holiday** | FFY Holiday (holiday list commands), FFY Santa | ✅ Yes |

The actions you can edit are called **data actions**. They hold all the commands' words, numbers and lists.

### How it fits together

```
Viewer types !beard in chat
        │
        ▼
Commands tab: the !beard command is switched on
        │
        ▼
Actions tab: FFY Commands runs (!beard is one of its triggers)
        │
        ▼
It looks up "beard" in the data actions (FFY Stats)
        │
        ▼
Chat: "@Bob, Your glorious beard measures 17cm today!"
```

---

# Part 2: Editing

## 6. How editing works

Every data action is edited the same way:

1. **Actions tab** → open the group → click the action (for example **FFY Drinks**).
2. On the right under **Sub-Actions**, double-click **Execute C# Code**.
3. Scroll to the section between these two lines:
   ```
   // ===== EDIT BELOW =====
   ...your lines are here...
   // ===== EDIT ABOVE =====
   ```
   👉 **Only change things between these two lines.**
4. Make your change.
5. Click **Save and Compile**.
6. Close the window. The change works in chat within **30 seconds**. No restart needed.

### What a command looks like

Here's `!drink` (in **FFY Drinks**):

```csharp
// drink
Set("drink", "list", List("Coffee", "Tea", "Martini", "Lemonade"));
Set("drink", "template", "{sender}, your drink of the day is {item}!");
Set("drink", "variable", "Drink of the day");
```

Each line reads like a sentence:
- *For **drink**, set the **list** to Coffee, Tea, Martini, Lemonade.*
- *For **drink**, set the **template** (the reply) to "{sender}, your drink of the day is {item}!".*
- *For **drink**, save the result as **Drink of the day**.*

---

## 7. The golden rules

| # | Rule | ✅ Right | ❌ Wrong |
|---|---|---|---|
| 1 | **The first word is the command's name**, without the `!` | `Set("snack", ...` | `Set("!snack", ...` |
| 2 | **Text goes in "quote marks"** | `"Coffee"` | `Coffee` |
| 3 | **Numbers and true/false don't** | `100`, `true` | `"100"`, `"true"` |
| 4 | **Every line ends with `;`** | `...("Tea"));` | `...("Tea"))` |
| 5 | **`List(...)` holds several things, separated by commas** | `List("A", "B", "C")` | `List("A" "B" "C")` |
| 6 | **A quote mark *inside* text is written `\"`** | `"She said \"hi\""` | `"She said "hi""` |
| 7 | **A line starting with `//` is switched off.** It's a note | `// Set(...)` is off | |
| 8 | **Copying a command? Change the first word on EVERY line** | All lines say `"snack"` | Some lines still say `"drink"` |

> ⚠️ **Rule 8 catches everyone.** If you copy `!drink`'s lines to make `!snack` and forget to change one, you'll quietly change `!drink` instead of making `!snack`.

### When "Save and Compile" shows an error

Nothing in chat breaks; your old version keeps working. The error points to a line number. Check that line for:

- a missing `"`
- a missing `)` (count them: every `(` needs a `)`)
- a missing `;` at the end
- a missing `,` between things in a `List(...)`
- a `"` inside your text that should be `\"`

Fix it and click **Save and Compile** again.

---

## 8. Placeholders: the words in {curly brackets}

When a reply is sent, these are swapped for real values:

| Placeholder | Becomes | Used in |
|---|---|---|
| `{sender}` | The person who typed the command, e.g. `@Bob` | Everything |
| `{target}` | The person they tagged, e.g. `@Sam` | Interactions, games, Santa, some lists |
| `{value}` | The number they got | Number commands, special interactions |
| `{item}` | The thing they got | List commands |
| `{cm}` | `!pp` only: the size in centimetres | `!pp` |
| `{winner}`, `{loser}`, `{winnerValue}`, `{loserValue}` | Who won or lost and their numbers | Duels |
| `{days}`, `{hours}`, `{minutes}` | Time left | Countdowns |
| `{result}`, `{nice}`, `{naughty}`, `{last}` | NICE or NAUGHTY, and the history counts | Santa |
| `{title}` | The title's name, e.g. Daddy | "Who won" replies for titles |

**Example:** the template `"{sender}, your drink of the day is {item}!"` becomes `@Bob, your drink of the day is Martini!`

---

# Part 3: Adding your own commands

## 9. Every new command needs this: connecting it to Streamer.bot

Every brand-new command needs **two things**:

1. **Its lines** in a data action. Sections 10 to 21 show you what to write.
2. **This section's steps**, so Streamer.bot listens for it in chat.

We'll use `!snack` as the example. Swap in your own command name.

### Step A: create the command (Commands tab)

1. Click the **Commands** tab.
2. **Right-click** in the list and choose **Add**.
3. Fill in:

   | Field | What to put |
   |---|---|
   | **Name** | `!snack` |
   | **Commands** | `!snack` |
   | **Location** | Start |
   | **Group** | An FFY folder, e.g. `FFY List Commands` |
   | **Sources** | Tick ✅ **Twitch**, **Kick** and/or **YouTube**, wherever you stream |
   | **Enabled** | Ticked ✅ |

4. Click **OK**.

### Step B: connect it to FFY My Triggers (Actions tab)

1. Click the **Actions** tab.
2. Open the **FFY Commands** group and click the **FFY My Triggers** action.
3. Find the **Triggers** box (top right).
4. **Right-click** inside it → **Add** → **Core** → **Commands** → **Command Triggered**.
5. In the **Command** drop-down, pick **!snack**.
6. Click **OK**.

✅ Done. Once its lines are in place (see the next sections), type `!snack` in chat.

> 💡 Use **FFY My Triggers**, not FFY Commands. Updates replace FFY Commands, but never touch FFY My Triggers, so your triggers stay put. FFY My Triggers passes your commands on to FFY Commands for you.

---

## 10. Number commands

**Gives each viewer a number for the day.** Examples: `!pp`, `!beard`, `!rizz`.

### Example: `!coolness`

**Chat will see:** `@Bob, you're 73% cool today! 😎`

**Step 1.** Open **FFY My Number Commands** (in **FFY Number Commands**). Updates never touch this action. Paste this above `// ===== EDIT ABOVE =====`:

```csharp
// coolness
Set("coolness", "min", 0);
Set("coolness", "max", 100);
Set("coolness", "template", "{sender}, you're {value}% cool today! 😎");
Set("coolness", "unit", "%");
Set("coolness", "variable", "Coolness today");
```

Click **Save and Compile**.

**Step 2.** Do [section 9](#9-every-new-command-needs-this-connecting-it-to-streamerbot) for `!coolness`.

### What each line does

| Line | Meaning | Example |
|---|---|---|
| `min` | The lowest number possible | `0` |
| `max` | The highest number possible | `100` |
| `template` | The reply. Put `{value}` where the number goes | `"{sender}, you're {value}% cool today!"` |
| `unit` | Added after the number when it's saved to the viewer's info. Use `""` for none | `"%"`, `"cm"`, `"kg"` |
| `variable` | The name it's saved under in the viewer's info. Leave the line out to not save | `"Coolness today"` |
| `step` *(optional)* | Allows decimals. `0.5` gives 1, 1.5, 2, 2.5... | `Set("coolness", "step", 0.5);` |

### More examples to copy

**A score out of 10:**
```csharp
// vibes
Set("vibes", "min", 1);
Set("vibes", "max", 10);
Set("vibes", "template", "{sender}, your vibes are a solid {value}/10 today!");
Set("vibes", "unit", "/10");
Set("vibes", "variable", "Vibes today");
```

**Height with decimals:**
```csharp
// height
Set("height", "min", 1.5);
Set("height", "max", 2.2);
Set("height", "step", 0.01);
Set("height", "template", "{sender}, you're standing {value}m tall today!");
Set("height", "unit", "m");
Set("height", "variable", "Height today");
```

**Coins, no saving:**
```csharp
// coins
Set("coins", "min", 0);
Set("coins", "max", 5000);
Set("coins", "template", "{sender} found {value} gold coins down the back of the sofa!");
```

> 👀 Viewers can check someone else too: `!coolness @Sam`.

---

## 11. List commands

**Gives each viewer one thing from a list for the day.** Examples: `!drink`, `!animal`, `!patronus`.

### Example: `!snack`

**Chat will see:** `@Bob, your snack today is Popcorn! 🍿`

**Step 1.** Open **FFY My List Commands** (in **FFY List Commands**). Updates never touch this action. Paste above `// ===== EDIT ABOVE =====`:

```csharp
// snack
Set("snack", "list", List("Cookies", "Crisps", "Popcorn", "Grapes", "Pizza"));
Set("snack", "template", "{sender}, your snack today is {item}! 🍿");
Set("snack", "variable", "Snack today");
```

Click **Save and Compile**.

**Step 2.** Do [section 9](#9-every-new-command-needs-this-connecting-it-to-streamerbot) for `!snack`.

### Tips

- **Add as many choices as you like.** Long lists are easier to read one per line:
  ```csharp
  Set("snack", "list", List(
      "Cookies",
      "Crisps",
      "Popcorn",
      "Grapes",
      "Pizza"
  ));
  ```
- **Want a fresh pick every time** instead of one per day? Add the command to **FFY Do Not Track** (see [section 25](#25-every-data-action-explained)).
- **Different reply when someone is tagged** (only for commands in Do Not Track): add a `targetTemplate`. This is how `!keg @Sam` works:
  ```csharp
  Set("snack", "targetTemplate", "{sender} threw {item} at {target}!");
  ```

### More examples to copy

**Spirit vehicle:**
```csharp
// vehicle
Set("vehicle", "list", List("Shopping Trolley", "Rocket", "Unicycle", "Golden Chariot", "Very Fast Snail"));
Set("vehicle", "template", "{sender}, your vehicle of the day is a {item}!");
Set("vehicle", "variable", "Vehicle today");
```

**Superhero name:**
```csharp
// heroname
Set("heroname", "list", List("Captain Crumbs", "The Midnight Snacker", "Doctor Dramatic", "Lady Lagspike"));
Set("heroname", "template", "{sender}, today you are known as... {item}!");
```

---

## 12. Interactions

**One viewer does something to another.** Examples: `!hug @Sam`, `!slap @Sam`.

### Example: `!tickle`

**Chat will see:** `@Bob Tickled @Sam with 73% power!`

1. Open **FFY Interactions** (in **FFY Helpers**) and add:
   ```csharp
   Add("tickle");
   ```
   **Save and Compile.**
2. Open **FFY Action Words** and add the word shown in chat:
   ```csharp
   Set("tickle", "Tickled");
   ```
   **Save and Compile.**
3. *(Optional)* Open **FFY Top Titles** and add the titles shown by `!top tickle`:
   ```csharp
   Set("tickle", "senders", "Top Ticklers");
   Set("tickle", "receivers", "Most Tickled");
   ```
4. Do [section 9](#9-every-new-command-needs-this-connecting-it-to-streamerbot) for `!tickle`.

### How viewers use interactions

| Typed | Result |
|---|---|
| `!tickle @Sam` | `@Bob Tickled @Sam with 73% power!` |
| `!tickle` | `@Bob Tickled themselves with 40% power!` |
| `!tickle everyone` | `@Bob Tickled everyone with 88% power!` |
| `!top tickle` | Today's top ticklers and most tickled |

### Consent (ask first)

Switch on `consentRequired` in **FFY Switches** and interactions ask the other person first:

```
Bob:  !tickle @Sam
Chat: @Bob wants to tickle @Sam! @Sam, type !accept or !deny within 60 seconds.
Sam:  !accept
Chat: @Bob Tickled @Sam with 73% power!
```

Once Sam accepts, Bob doesn't have to ask again for the rest of the day. Change the 60 seconds with `consentTimeoutSeconds` in **FFY Config**.

> ℹ️ Interactions listed in **FFY Do Not Track** (hug, slap, kiss, pat and more, by default) give a random power every time, and **aren't counted** for `!top`. To count one, remove it from Do Not Track.

---

## 13. "of the Day" titles

**The first viewer each day to hit a set result wins a title.** Anyone can then ask who won.

### Example: Coolness of the Day (for a number command)

**Chat will see:**
```
Bob:  !coolness
Chat: @Bob, you're 100% cool today! 😎 You are the Coolness of the Day!

Sam:  !coolnessofday
Chat: @Bob is the Coolness of the Day!
```

**Step 1.** Open **FFY Of The Day** (in **FFY Helpers**) and add:

```csharp
// coolness
Set("coolness", "title", "Coolness");
Set("coolness", "winValue", 100);
Set("coolness", "whoCommands", List("coolnessofday"));
Set("coolness", "noWinnerMessage", "Nobody is Coolness of the Day yet!");
```

**Step 2.** Do [section 9](#9-every-new-command-needs-this-connecting-it-to-streamerbot) for **`!coolnessofday`**.

### Example: Snack of the Day (for a list command)

Use `winItemContains` instead of `winValue`. Whoever gets an item **containing** that word wins (capitals don't matter):

```csharp
// snack
Set("snack", "title", "Snack");
Set("snack", "winItemContains", "popcorn");
Set("snack", "whoCommands", List("snackofday"));
Set("snack", "noWinnerMessage", "Nobody has won Snack of the Day yet!");
```

### All the options

| Line | What it does |
|---|---|
| `title` | The name shown: "You are the **Coolness** of the Day!" |
| `winValue` | *(number commands)* the exact number that wins |
| `winItemContains` | *(list commands)* text the winning item contains |
| `whoCommands` | The "who won?" commands. **Each must end in `ofday`.** You can have more than one: `List("coolnessofday", "coolofday")` |
| `noWinnerMessage` | The reply before anyone has won |
| `whoMessage` *(optional)* | The "who won?" reply. The default is `{winner} is the {title} of the Day!`. You can use `{winner}`, `{title}`, `{value}` and `{sender}` |

**Custom "who won" message:**
```csharp
Set("coolness", "whoMessage", "👑 {winner} is today's {title} champion with {value}%!");
```

### Good to know
- Only **one** winner per title per day. The winner sees "You are the ... of the Day!" whenever they use the command again that day.
- Checking someone else (`!coolness @Sam`) can't win the title for you.
- Titles reset at midnight.
- Switch all titles off with `ofTheDayEnabled` in **FFY Switches**.

---

## 14. Special replies for viewers

### Special users: a fixed reply for one person

**Chat will see when SomeViewer types `!beard`:** `@SomeViewer, your beard is legendary! 🧔`

Open **FFY Special Users** (in **FFY Helpers**) and add:

```csharp
Set("someviewer", "beard", "@SomeViewer, your beard is legendary! 🧔");
```

| Part | Meaning |
|---|---|
| `"someviewer"` | Their username, **all lowercase** |
| `"beard"` | The command, without `!` |
| `"@SomeViewer, ..."` | Exactly what chat shows |

Give the same person several:
```csharp
Set("someviewer", "beard", "@SomeViewer, your beard is legendary! 🧔");
Set("someviewer", "pp", "@SomeViewer, the measuring tape broke. 📏💥");
Set("someviewer", "drink", "@SomeViewer, your drink of the day is the tears of your enemies.");
```

No need to touch the Commands tab, because the commands already exist.

### Special interactions: a fixed result between two people

Open **FFY Special Interactions** and add:

```csharp
Set("someviewer", "theirfriend", "hug", "value", 1000);
Set("someviewer", "theirfriend", "hug", "message", "@{sender} gave @{target} a {value}% bear hug! 🐻");
```

This reads as: when **someviewer** uses **hug** on **theirfriend**, the power is **1000** and the reply is the message.

| Part | Meaning |
|---|---|
| 1st | Who does it (lowercase), or `"anyone"` |
| 2nd | Who it's done to (lowercase), or `"anyone"` |
| 3rd | The interaction |
| `"value"` | The power number to use |
| `"message"` | The reply. `@{sender}`, `@{target}` and `{value}` are filled in. Leave this line out to use the normal reply with your value |

**Everyone who boops the streamer gets a special reply:**
```csharp
Set("anyone", "yourname", "boop", "message", "@{sender} booped the streamer's nose! How dare you. 👃");
```

Switch these off at any time with `specialUsersEnabled` / `specialInteractionsEnabled` in **FFY Switches**.

---

## 15. Counters (FFY Counters)

**Keep a running count of anything**, like how many times the streamer crashed or died:

```
Viewer: !crash
Chat:   FluffFaceYeti has crashed 5 times!
```

Counters are a **separate import** called **FFY Counters**, with its own guide. See the **FFY Counters README** for installing it, the commands (`!crash`, `!removecrash`, `!resetcrash`, `!setcrash 42`...) and adding your own counters.

---

## 16. Countdowns

**Counts down to a date that comes round every year.**

Open **FFY Countdowns** (in **FFY Helpers**) and add, for example a stream birthday on 14 March:

```csharp
// birthday
Set("birthday", "month", 3);
Set("birthday", "day", 14);
Set("birthday", "message", "{sender}, only {days} days, {hours} hours and {minutes} minutes until the stream birthday! 🎂");
```

Then do [section 9](#9-every-new-command-needs-this-connecting-it-to-streamerbot) for `!birthday`.

**Chat will see:** `@Bob, only 159 days, 4 hours and 12 minutes until the stream birthday! 🎂`

When the date has passed, it counts down to next year's.

**Christmas:**
```csharp
// christmas
Set("christmas", "month", 12);
Set("christmas", "day", 25);
Set("christmas", "message", "🎄 {days} sleeps until Christmas, {sender}!");
```

---

## 17. Dice

**A random roll, different every time.**

Open **FFY Dice** (in **FFY Games**) and add:

```csharp
// d6
Set("d6", "min", 1);
Set("d6", "max", 6);
Set("d6", "label", "D6");
Set("d6", "action", "rolled");
Set("d6", "crits", true);
```

Then do [section 9](#9-every-new-command-needs-this-connecting-it-to-streamerbot) for `!d6`.

**Chat will see:** `@Bob, you rolled a d6 and got **4**!`

| Line | Meaning |
|---|---|
| `min`, `max` | The lowest and highest roll |
| `label` | The name in the reply ("a **d6**") |
| `action` | The verb ("you **rolled**") |
| `crits` *(optional)* | `true` adds **CRITICAL SUCCESS!** on the highest roll and **CRITICAL FAIL!** on the lowest |
| `faces` *(optional)* | Words instead of numbers (see below) |

### Words instead of numbers

```csharp
// magic8
Set("magic8", "min", 0);
Set("magic8", "max", 4);
Set("magic8", "label", "magic 8 ball");
Set("magic8", "action", "shook");
Set("magic8", "faces", List("Yes", "No", "Maybe", "Ask again later", "Absolutely not"));
```

**Chat will see:** `@Bob, you shook a magic 8 ball and got **Ask again later**!`

> ⚠️ With `faces`, **`min` is always 0** and **`max` is one less than the number of words**. 5 words means `max` is 4.

---

## 18. Duels

**Two viewers compare their numbers from a number command.** Examples: `!swordfight @Sam`, `!ppduel @Sam`.

Open **FFY Duels** (in **FFY Games**) and add. This example uses `!coolness` from section 10:

```csharp
// coolduel
Set("coolduel", "stat", "coolness");
Set("coolduel", "seedKey", "coolness");
Set("coolduel", "matchSelf", true);
Set("coolduel", "selfMessage", "{sender} tried to duel themselves... awkward.");
Set("coolduel", "tieMessage", "{sender} and {target} are equally cool at {value}%!");
Set("coolduel", "outcomes", List(
    "{winner} is {winnerValue}% cool and leaves {loser} ({loserValue}%) in the cold! 🥶",
    "{loser} tried their best, but {winner}'s {winnerValue}% coolness was too much.",
    "It's no contest: {winner} ({winnerValue}%) out-cools {loser} ({loserValue}%)."
));
```

Then do [section 9](#9-every-new-command-needs-this-connecting-it-to-streamerbot) for `!coolduel`.

**Chat will see:** `@Bob is 91% cool and leaves @Sam (40%) in the cold! 🥶`

| Line | Meaning |
|---|---|
| `stat` | The number command to compare |
| `seedKey` + `matchSelf` | Put the same command name in `seedKey`, with `matchSelf` set to `true`, so each player's duel number matches what they got from that command today |
| `selfMessage` | When someone types it without tagging anyone |
| `tieMessage` | On a draw. `{value}` is the shared number |
| `outcomes` | One is picked at random |

---

## 19. Reply commands

**A command that's always about one particular person.** Example: `!hype` → `@someviewer is the best!`

Reply commands need their own data action, which you only make once:

1. **Actions tab:** right-click **FFY Special Users** → **Duplicate**.
2. Right-click the copy → **Rename** → call it **FFY Reply Commands**.
3. Open its **Execute C# Code**. Near the top, change:
   ```csharp
   private const string DataPath = "helpers/specialusers";
   ```
   to:
   ```csharp
   private const string DataPath = "helpers/replycommands";
   ```
4. Delete the example lines between EDIT BELOW and EDIT ABOVE, and add:
   ```csharp
   // hype
   Set("hype", "target", "someviewer");
   Set("hype", "niceChance", 0.7);
   Set("hype", "niceReplies", List("is the best!", "is an absolute legend!", "carries this whole community."));
   Set("hype", "otherReplies", List("is... fine, I guess.", "forgot to log in today."));
   ```
5. **Save and Compile**, then do [section 9](#9-every-new-command-needs-this-connecting-it-to-streamerbot) for `!hype`.

**Chat will see:** `@someviewer is an absolute legend!`

`niceChance` is how often a nice reply is picked: `0.7` means 7 times out of 10. Add more reply commands to the same action. Each one needs its own name.

---

## 20. Santa

`!santa` (or `!santa @someone`) puts them on the **NICE** or **NAUGHTY** list for the day. `!santastats` shows their history.

```
Bob:  !santa @Sam
Chat: Ho ho ho! Santa checked the list... @Sam is on the **NAUGHTY list** today!
Bob:  !santastats @Sam
Chat: Santa Stats for @Sam | Nice: 3 | Naughty: 5 | Last result: NAUGHTY
```

Change it in **FFY Santa** (in the **FFY Holiday** group):

| Line | What it does |
|---|---|
| `naughtyChance` | The chance of NAUGHTY, out of 100 |
| `alwaysNice` | People who are always NICE: `Set("alwaysNice", List("yourname", "yourmod"));` (lowercase) |
| `message` | The reply. Use `{target}` and `{result}` |
| `statsMessage` | The `!santastats` reply. Use `{target}`, `{nice}`, `{naughty}` and `{last}` |
| `noHistoryMessage` | When someone has no Santa history yet |

Santa history is kept **forever** (it doesn't reset at midnight).

---

## 21. Keeping your changes safe from updates

Updates replace the built-in actions, so **put your own changes in "FFY My" actions**. Updates never touch those.

### The ready-made ones

| Action | Use it for |
|---|---|
| **FFY My Number Commands** | Your own number commands, and changes to built-in ones |
| **FFY My List Commands** | Your own list commands, and changes to built-in ones |
| **FFY My Triggers** | The trigger for every command you add yourself ([section 9](#9-every-new-command-needs-this-connecting-it-to-streamerbot)) |

**Changing a built-in command:** you only need the lines you're changing. For example, in **FFY My Number Commands**:

```csharp
Set("beard", "max", 60);
Set("beard", "template", "{sender}, behold! A {value}cm beard of pure majesty!");
```

`!beard` now goes up to 60cm with your wording, and keeps everything else from the built-in version.

### Adding to any other built-in action

For example, adding your own titles to **FFY Of The Day**:

1. **Actions tab:** right-click **FFY Of The Day** → **Duplicate**.
2. Rename the copy so it **starts with "FFY My"**, e.g. **FFY My Of The Day**.
3. Open its code. **Leave the `DataPath` line as it is.**
4. Delete the lines between EDIT BELOW and EDIT ABOVE, and add only your own.
5. **Save and Compile.**

Your lines are **added on top** of the built-in ones, and updates never touch your copy. This works for any built-in action: **FFY Interactions**, **FFY Action Words**, **FFY Top Titles**, **FFY Dice**, **FFY Duels**, **FFY Countdowns**, **FFY Do Not Track** and so on.

> ✅ If both have the same setting, **yours wins**. Lists made with `Add(...)` (like FFY Interactions) are combined.
> ✅ Any action in a group starting with **`FFY `** is read automatically, except the FFY Core and FFY Commands groups.

### Your own separate action

You can also make a completely new action for your own commands, like an **SoT_UK** action. Duplicate **FFY My Number Commands** (or **FFY My List Commands**), rename it, and give it a **new** `DataPath`:

```csharp
private const string DataPath = "numeric-commands/sot_uk";
```

Use `"numeric-commands/..."` for number commands and `"list-commands/..."` for list commands. Updates never touch actions you made yourself.

---

# Part 4: Changing what's already there

## 22. Common changes

> 📌 Make these changes in **FFY My Number Commands** or **FFY My List Commands**, so updates don't undo them. You only need the lines you're changing ([section 21](#21-keeping-your-changes-safe-from-updates)).

### Change a reply's wording
Write the command's `template` line with your words. Keep the `{placeholders}`:
```csharp
Set("beard", "template", "{sender}, behold! A {value}cm beard of pure majesty!");
```

### Change the number range
```csharp
Set("beard", "min", 5);
Set("beard", "max", 60);
```

### Add choices to a list
Add them inside the `List(...)`, with commas between:
```csharp
Set("drink", "list", List("Coffee", "Tea", "Martini", "Bubble Tea", "Energy Drink"));
```

### Rename a command (e.g. `!beard` → `!whiskers`)
1. In its data action, change the first word on **every** line from `"beard"` to `"whiskers"`.
2. **Commands tab:** open **!beard** and change both **Name** and **Commands** to `!whiskers`.

### Switch a command off
**Commands tab** → click it → untick **Enabled**. *(Or add it to `disabledCommands` in FFY Config.)*

### Remove a command completely
1. Delete its lines from its data action.
2. **Commands tab:** right-click the command → **Delete**.

### Make only subs or mods able to use a command
**Commands tab** → open the command → use its **Permissions** settings. FFY Commands respects everything set there, including cooldowns.

### Stop a command being saved to the viewer's info
Delete its `variable` line, or switch off `saveToUserVariables` in **FFY Switches** for all of them.

---

# Part 5: Reference

## 23. Switches (FFY Switches)

Open **FFY Switches** (in **FFY Helpers**). Set each to `true` (on) or `false` (off), then **Save and Compile**.

```csharp
// CONSENT: true = !hug @someone asks them first; they reply !accept or !deny. false = no asking.
Set("consentRequired", false);
```

| Switch | Starts as | What it does |
|---|---|---|
| `consentRequired` | `false` | **Ask first.** Interactions ask the other person, who replies `!accept` or `!deny`. Once accepted, no more asking from that person for the rest of the day. |
| `saveToUserVariables` | `true` | **Save results.** Saves each viewer's results to their info in Streamer.bot (see [section 27](#27-saved-results-and-user-variables)). |
| `replyAsBot` | `true` | **Who replies.** `true` = your bot account, `false` = your own account. If you haven't connected a bot account, replies come from your own account anyway. |
| `ofTheDayEnabled` | `true` | **"of the Day" titles.** `false` = nobody wins titles, and the `!...ofday` commands stay quiet. |
| `specialUsersEnabled` | `true` | **Special replies** from FFY Special Users. |
| `specialInteractionsEnabled` | `true` | **Special interactions** from FFY Special Interactions. |

---

## 24. Settings (FFY Config)

| Setting | Starts as | What it does |
|---|---|---|
| `channelName` | `""` | Your channel name. Makes your viewers' results unique to your channel. Changing it later shuffles everyone's results. |
| `timeZone` | `""` | When "today" starts. `""` = your PC's clock. Or a **Windows** time zone name, e.g. `"GMT Standard Time"`, not `"Europe/London"` ([see the list](#set-your-time-zone-optional)). |
| `consentTimeoutSeconds` | `60` | Seconds people get to `!accept` or `!deny`. |
| `disabledCommands` | *(off)* | Commands that never reply, even if switched on in the Commands tab. Remove the `//` and list them: `Set("disabledCommands", List("spank", "keg"));` |

---

## 25. Every data action explained

### FFY Helpers group

| Action | What it holds | Example line |
|---|---|---|
| **FFY Switches** | On/off switches ([section 23](#23-switches-ffy-switches)) | `Set("consentRequired", true);` |
| **FFY Config** | Settings ([section 24](#24-settings-ffy-config)) | `Set("channelName", "YourName");` |
| **FFY Interactions** | Which commands are interactions | `Add("tickle");` |
| **FFY Action Words** | The word shown for each interaction | `Set("tickle", "Tickled");` |
| **FFY Top Titles** | Titles for `!top <interaction>` | `Set("tickle", "senders", "Top Ticklers");` |
| **FFY Special Users** | Fixed replies for particular viewers | `Set("someviewer", "beard", "...");` |
| **FFY Special Interactions** | Fixed interaction results between viewers | `Set("a", "b", "hug", "value", 1000);` |
| **FFY Of The Day** | "of the Day" titles ([section 13](#13-of-the-day-titles)) | `Set("daddy", "winValue", 100);` |
| **FFY Do Not Track** | Commands that give a fresh random result every time, and aren't counted for leaderboards | `Add("hug");` |
| **FFY Single Values** | Number commands where *everyone* gets the same result for the day | `Add("luck");` |
| **FFY Countdowns** | Countdowns ([section 16](#16-countdowns)) | `Set("birthday", "month", 3);` |

### FFY Number Commands group

**FFY Stats, FFY Personality, FFY Emotions, FFY Skills, FFY Gym, FFY Actions, FFY Piracy, FFY Sea of Thieves, FFY Carry, FFY Hold**: the number commands, one action per folder ([section 10](#10-number-commands)).

> `!bb` (in FFY Stats) works a little differently from the others. It picks from a list of `bands` and `cups` instead of `min`/`max`.

### FFY List Commands group

**FFY Drinks, FFY Animals, FFY Colors, FFY Fish, FFY Patronus, FFY Sails...**: the list commands ([section 11](#11-list-commands)).

### FFY Holiday group

**FFY Holiday**: the holiday list commands (`!present`, `!costume`, `!easteregg`, `!elfname`, `!pumpkin`). They work like any list command ([section 11](#11-list-commands)).
**FFY Santa**: Santa's settings ([section 20](#20-santa)).

### FFY Games group

**FFY Duels** ([section 18](#18-duels)) and **FFY Dice** ([section 17](#17-dice)).

---

## 26. All 200 commands

Every command, with an example reply. *(Example replies use a middle value. Real results vary per viewer and day.)* Click a folder to open it.

<details>
<summary><b>FFY Actions</b> (17 commands)</summary>

| Command | Range | Example reply |
|---|---|---|
| `!squeeze` | 0–100 % | @Bob, Your squeeze strength is 50% today! |
| `!push` | 0–100 kg | @Bob, Your push power is 50kg today! |
| `!jump` | 0–100 cm | @Bob, Your jump height is 50cm today! |
| `!press` | 0–100 kg | @Bob, Your press strength is 50kg today! |
| `!kick` | 0–100 % | @Bob, Your kick power is 50% today! |
| `!dodge` | 0–100 % | @Bob, Your dodge agility is 50% today! |
| `!roll` | 0–100 m | @Bob, You can roll 50m today! |
| `!slide` | 0–100 m/s | @Bob, Your slide speed is 50m/s today! |
| `!climb` | 0–100 m/s | @Bob, Your climbing speed is 50m/s today! |
| `!punch` | 0–100 kg | @Bob, Your punch power is 50kg today! |
| `!block` | 0–100 % | @Bob, Your blocking strength is 50% today! |
| `!tackle` | 0–100 kg | @Bob, Your tackle force is 50kg today! |
| `!throw` | 0–100 % | @Bob, Your throwing accuracy is 50% today! |
| `!kickflip` | 0–100 % | @Bob, Your kickflip ability is 50% today! |
| `!spin` | 0–100 rpm | @Bob, You're spinning at 50rpm today! |
| `!uppercut` | 0–100 kg | @Bob, Your uppercut power is 50kg today! |
| `!grapple` | 0–100 % | @Bob, Your grapple strength is 50% today! |

</details>

<details>
<summary><b>FFY Carry</b> (2 commands)</summary>

| Command | Range | Example reply |
|---|---|---|
| `!weight` | 0–200 kg | @Bob, Your carry weight is 100kg today! |
| `!items` | 0–100 items | @Bob, You're carrying 50 items today! |

</details>

<details>
<summary><b>FFY Emotions</b> (20 commands)</summary>

| Command | Range | Example reply |
|---|---|---|
| `!happiness` | 0–100 % | @Bob, Your happiness is 50% today! |
| `!anger` | 0–100 % | @Bob, Your anger level is 50% today! |
| `!calmness` | 0–100 % | @Bob, Your calmness is 50% today! |
| `!joy` | 0–100 % | @Bob, Your joy level is 50% today! |
| `!excitement` | 0–100 % | @Bob, Your excitement is 50% today! |
| `!energy` | 0–100 % | @Bob, Your energy level is 50% today! |
| `!sleep` | 0–100 % | @Bob, Your tiredness level is 50% today! |
| `!sadness` | 0–100 % | @Bob, Your sadness level is 50% today! |
| `!anxiety` | 0–100 % | @Bob, Your anxiety level is 50% today! |
| `!love` | 0–100 % | @Bob, Your love level is 50% today! |
| `!nostalgia` | 0–100 % | @Bob, You're feeling 50% nostalgic today! |
| `!gratitude` | 0–100 % | @Bob, Your gratitude level is 50% today! |
| `!guilt` | 0–100 % | @Bob, Your guilt level is 50% today! |
| `!pride` | 0–100 % | @Bob, Your pride level is 50% today! |
| `!frustration` | 0–100 % | @Bob, Your frustration level is 50% today! |
| `!hope` | 0–100 % | @Bob, Your hope level is 50% today! |
| `!love_hate_balance` | 0–100 % | @Bob, Your love vs hate balance is 50% today! |
| `!hydration` | 0–100 % | @Bob, you're 50% hydrated today! Have a sip of water! |
| `!hangry` | 0–100 % | @Bob, you're 50% hangry today! Someone get this person a snack! |
| `!cozy` | 0–100 % | @Bob, your cozy level is 50% today! |

</details>

<details>
<summary><b>FFY Gym</b> (8 commands)</summary>

| Command | Range | Example reply |
|---|---|---|
| `!lift` | 0–500 kg | @Bob, You're lifting 250kg today! |
| `!run` | 0–42 km | @Bob, You've got 21km in your legs today! |
| `!sprint` | 0–100 m/s | @Bob, Your sprint speed is 50m/s today! |
| `!deadlift` | 0–500 kg | @Bob, Your deadlifting 250kg today! |
| `!curl` | 0–200 kg | @Bob, You're curling 100kg today! |
| `!row` | 0–1000 m | @Bob, You rowed 500m today! |
| `!stretch` | 0–100 % | @Bob, Your flexibility is 50% today! |
| `!benchpress` | 20–200 kg | @Bob, you're bench pressing 110kg today! |

</details>

<details>
<summary><b>FFY Hold</b> (1 command)</summary>

| Command | Range | Example reply |
|---|---|---|
| `!gold` | 0–100 coins | @Bob, You're carrying 50 coins today! |

</details>

<details>
<summary><b>FFY Personality</b> (28 commands)</summary>

| Command | Range | Example reply |
|---|---|---|
| `!clowning` | 0–100 % | @Bob, you're 50% clown today! |
| `!herocomplex` | 0–100 % | @Bob, Your hero complex is 50% today! |
| `!darkhumor` | 0–100 % | @Bob, your humor is 50% darktoday! |
| `!whimsicality` | 0–100 % | @Bob, you're feeling 50% whimsical today! |
| `!ambition` | 0–100 % | @Bob, your ambition is 50% today! |
| `!mischief` | 0–100 % | @Bob, You're up to 50% mischief today! |
| `!bookishness` | 0–100 % | @Bob, You're 50% bookworm today! |
| `!zen` | 0–100 % | @Bob, Your inner zen is 50% today! |
| `!selfconfidence` | 0–100 % | @Bob, Your confidence level is 50% today! |
| `!thoughtfulness` | 0–100 % | @Bob, You're 50% thoughtful today! |
| `!creativity` | 0–100 % | @Bob, Your creativity is flowing at 50% today! |
| `!spontaneity` | 0–100 % | @Bob, You're feeling 50% spontaneous today! |
| `!cookingskills` | 0–100 % | @Bob, Your cooking skills are 50% today! |
| `!competitivespirit` | 0–100 % | @Bob, Your competitive spirit is 50% today! |
| `!eccentricity` | 0–100 % | @Bob, Your eccentricity is 50% today! |
| `!sassiness` | 0–100 % | @Bob, Your feeling 50% sassy today! |
| `!imagination` | 0–100 % | @Bob, Your imagination is running at 50% today! |
| `!nurturinginstinct` | 0–100 % | @Bob, Your nurturing instinct is 50% today! |
| `!patience` | 0–100 % | @Bob, Your patience is 50% Today! |
| `!charisma` | 0–100 % | @Bob, Your charisma is 50% today! |
| `!luck` | 1–10 /10 | @Bob, You rolled a luck score of 6/10 today! |
| `!southernbelle` | 0–100 % | @Bob, Your southern twang 50% today! |
| `!rizz` | 0–100 % | @Bob, your rizz is at 50% today! |
| `!sus` | 0–100 % | @Bob, you're looking 50% sus today! |
| `!chaos` | 0–100 % | @Bob, your chaos energy is at 50% today! |
| `!drama` | 0–100 % | @Bob, your drama level is 50% today! |
| `!salt` | 0–100 % | @Bob, you're 50% salty today! |
| `!clumsy` | 0–100 % | @Bob, you're 50% clumsy today! Watch your step! |

</details>

<details>
<summary><b>FFY Piracy</b> (12 commands)</summary>

| Command | Range | Example reply |
|---|---|---|
| `!pirate` | 0–100 % | @Bob, You're 50% pirate today! |
| `!captain` | 0–100 % | @Bob, Your captain energy is 50% today! |
| `!treasure_hunting` | 0–100 % | @Bob, Your treasure hunting instincts are 50% today! |
| `!sea_navigation` | 0–100 % | @Bob, Your navigation skills are 50% today! |
| `!ship_maintenance` | 0–100 % | @Bob, Your ship maintenance skills are 50% today! |
| `!swordsmanship` | 0–100 % | @Bob, Your swordsmanship is 50% today! |
| `!swashbuckling` | 0–100 % | @Bob, You're 50% swashbuckler today! |
| `!plunder` | 0–100 % | @Bob, Your plundering efficiency is 50% today! |
| `!cannon_use` | 0–100 % | @Bob, Your cannon skills are 50% today! |
| `!crew_morale` | 0–100 % | @Bob, Your crew morale is 50% today! |
| `!intimidation` | 0–100 % | @Bob, Your intimidation factor is 50% today! |
| `!parley` | 0–100 % | @Bob, Your parley skills are 50% today! |

</details>

<details>
<summary><b>FFY Sea of Thieves</b> (11 commands)</summary>

| Command | Range | Example reply |
|---|---|---|
| `!chainshot` | 0–100 % | @Bob, Your chainshot accuracy is 50% today! |
| `!sniper` | 0–100 % | @Bob, Your Eye of Reach accuracy is 50% today! |
| `!swordlord` | 0–100 % | @Bob, You're 50% sword lord today! |
| `!lunge` | 0–100 % | @Bob, Your sword lunge skills are 50% today! |
| `!tuck` | 0–100 % | @Bob, Your tucking skills are 50% today! |
| `!gh` | 1–75 Lvls | @Bob, Your Gold Hoarders reputation is level 38 today! |
| `!oos` | 1–75 Lvls | @Bob, Your Order of Souls reputation is level 38 today! |
| `!ma` | 1–75 Lvls | @Bob, Your Merchant Alliance reputation is level 38 today! |
| `!athena` | 1–75 Lvls | @Bob, Your Athena's Fortune reputation is level 38 today! |
| `!reaper` | 1–75 Lvls | @Bob, Your Reaper's Bones reputation is level 38 today! |
| `!hunter` | 1–75 Pts | @Bob, Your Hunter's Call reputation is 38 points today! |

</details>

<details>
<summary><b>FFY Skills</b> (15 commands)</summary>

| Command | Range | Example reply |
|---|---|---|
| `!precision` | 0–100 % | @Bob, Your precision is 50% today! |
| `!accuracy` | 0–100 % | @Bob, Your accuracy is 50% today! |
| `!focus` | 0–100 % | @Bob, Your focus level is 50% today! |
| `!flirting` | 0–100 % | @Bob, Your flirting skills are 50% today! |
| `!dj` | 1–10 /10 | @Bob, Your DJ skills are 6/10 today! |
| `!intelligence` | 0–100 % | @Bob, Your intelligence is 50% today! |
| `!stealth` | 0–100 % | @Bob, Your stealth is 50% today! |
| `!cooking` | 0–100 % | @Bob, Your cooking skills are 50% today! |
| `!leadership` | 0–100 % | @Bob, Your leadership ability is 50% today! |
| `!negotiation` | 0–100 % | @Bob, Your negotiation skills are 50% today! |
| `!martial_arts` | 0–100 % | @Bob, Your martial arts skills are 50% today! |
| `!strength` | 0–100 % | @Bob, Your strength is 50% today! |
| `!adaptability` | 0–100 % | @Bob, Your adaptability is 50% today! |
| `!aim` | 0–100 % | @Bob, your aim is 50% on point today! |
| `!gamer` | 0–100 % | @Bob, your gamer skills are at 50% today! |

</details>

<details>
<summary><b>FFY Stats</b> (19 commands)</summary>

| Command | Range | Example reply |
|---|---|---|
| `!beard` | 1–30 cm | @Bob, Your glorious beard measures 16cm today! |
| `!hair` | 10–100 cm | @Bob, Your hair has reached 55cm today! |
| `!pp` | 3–15 inches | @Bob, your PP is 9 inches (23 cm) today! |
| `!bb` | Bra sizes | @Bob, your boob size today is 36DD! |
| `!daddy` | 0–100 % | @Bob, You're 50% daddy today! |
| `!catmom` | 0–100 % | @Bob, You're 50% cat mom today! |
| `!stinker` | 0–100 % | @Bob, Your stink level is 50% today! |
| `!fox` | 0–100 % | @Bob, You're channeling 50% fox energy today! |
| `!nerd` | 0–100 % | @Bob, You're 50% nerd today! |
| `!princess` | 0–100 % | @Bob, Your princess energy is radiating at 50% today! |
| `!goodgirl` | 0–100 % | @Bob, You're 50% good girl today! |
| `!sloth` | 0–100 % | @Bob, You're operating at 50% sloth today! |
| `!butt` | 0–100 % | @Bob, Your butt is 50% juicy today! |
| `!mommy` | 0–100 % | @Bob, You're 50% mommy today! |
| `!ghost` | 0–100 % | @Bob, your ghost level is 50% today! Boo! |
| `!bald` | 0–100 % | @Bob, your head shines with 50% baldness today! |
| `!simp` | 0–100 % | @Bob, you're 50% simp today! |
| `!gremlin` | 0–100 % | @Bob, your gremlin energy is at 50% today! |
| `!cringe` | 0–100 % | @Bob, you're 50% cringe today! |

</details>

<details>
<summary><b>FFY List Commands</b> (17 commands)</summary>

| Command | Choices | Example reply |
|---|---|---|
| `!animal` | 15 | @Bob, your animal spirit is Lion! |
| `!auravibes` | 10 | @Bob, your aura vibe today is Radiant! |
| `!auraitems` | 6 | @Bob, your aura accessory today is Crystal Necklace! |
| `!colors` | 10 | @Bob, your color today is Green! |
| `!drink` | 15 | @Bob, your drink of the day is Coffee! |
| `!elementalitems` | 7 | @Bob, your elemental item today is Fire Amulet! |
| `!elements` | 7 | @Bob, your elemental affinity today is Fire! |
| `!fish` | 50 | @Bob, your fish today is Ruby Splashtail! |
| `!keg` | 4 | @Bob, you light a Gunpowder Barrel and board the enemy ship! |
| `!outfits` | 10 | @Bob, your outfit today is Casual Chic! |
| `!patronus` | 106 | @Bob, your Patronus takes the form of a Stag! |
| `!piratevibes` | 7 | @Bob, your pirate vibe today is Swashbuckler! |
| `!pirateoutfits` | 7 | @Bob, your pirate accessory today is Tricorn Hat! |
| `!powers` | 7 | @Bob, your power today is Super Strength! |
| `!sails` | 131 | @Bob, today your ship is repping the Affiliate Alliance Sails! |
| `!wizarditems` | 7 | @Bob, your wizard item today is Wand! |
| `!wizardvibes` | 7 | @Bob, your wizard vibe today is Apprentice! |

</details>

<details>
<summary><b>FFY Holiday</b> (7 commands)</summary>

| Command | Choices | Example reply |
|---|---|---|
| `!present` | 10 | 🎄 @Bob, your Christmas present today is: Socks (again)! |
| `!costume` | 10 | 🎃 @Bob, your Halloween costume today is: Vampire! |
| `!easteregg` | 10 | 🐣 @Bob, your Easter egg today is: Milk Chocolate! |
| `!elfname` | 10 | 🧝 @Bob, your elf name today is: Jingle Sparklesocks! |
| `!pumpkin` | 10 | 🎃 @Bob, you carved a Scary Face into your pumpkin today! |
| `!santa` / `!santa @Sam` | Nice or naughty | Ho ho ho! Santa checked the list... @Sam is on the **NICE list** today! |
| `!santastats` / `!santastats @Sam` | History | Santa Stats for @Sam | Nice: 3 | Naughty: 5 | Last result: NAUGHTY |

</details>

> ℹ️ `!love` appears in FFY Emotions, but it also exists as an interaction, and the interaction is the one that answers (`!love @Sam`).

<details>
<summary><b>FFY Interactions</b> (14 commands)</summary>

| Command | Example reply |
|---|---|
| `!hug @Sam` | @Bob Hugged @Sam with 73% power! |
| `!kiss @Sam` | @Bob Kissed @Sam with 73% power! |
| `!pat @Sam` | @Bob Patted @Sam with 73% power! |
| `!boop @Sam` | @Bob Booped @Sam with 73% power! |
| `!bonk @Sam` | @Bob Bonked @Sam with 73% power! |
| `!slap @Sam` | @Bob Slapped @Sam with 73% power! |
| `!spank @Sam` | @Bob Spanked @Sam with 73% power! |
| `!love @Sam` | @Bob Sent love to @Sam with 73% power! |
| `!highfive @Sam` | @Bob High-fived @Sam with 73% power! |
| `!throwshoe @Sam` | @Bob Threw a shoe at @Sam with 73% power! |
| `!fliptable @Sam` | @Bob Flipped a table at @Sam with 73% power! |
| `!top highfive` | Today's top senders and receivers of that interaction |
| `!accept` / `!deny` | Answer a consent request (when consent is switched on) |

All interactions also work as `!hug` (yourself) and `!hug everyone`.

</details>

<details>
<summary><b>FFY Games</b> (16 commands)</summary>

| Command | What it does | Example reply |
|---|---|---|
| `!rps @Sam` | Rock, paper, scissors | @Bob wins! rock beats scissors. |
| `!rpsls @Sam` | Rock, paper, scissors, lizard, Spock | @Sam wins! spock beats rock. |
| `!tugofwar @Sam` | Tug of war | @Sam wins! Pulled with 90 vs @Bob's 36. |
| `!diceroll @Sam` | Highest dice roll wins | @Sam wins! 4 vs @Bob's 2 |
| `!highorlow @Sam` | Guess higher or lower | @Bob guessed higher — correct! The number was 74. |
| `!compat @Sam` | Compatibility test | Sparks fly! @Bob & @Sam are 67% in sync. |
| `!coinflip` | Flip a coin | @Bob flips a coin... Tails! |
| `!d20` | Roll a D20 | @Bob, you rolled a d20 and got **17**! |
| `!d12` | Roll a D12 | @Bob, you rolled a d12 and got **5**! |
| `!randomcoinflip` | Heads or tails | @Bob, you flipped a coin and got **Heads**! |
| `!swordfight @Sam` | Duel on swordsmanship | @Sam wins the duel! @Bob shall be swabbing decks tonight (15% vs 13%). |
| `!pistolfight @Sam` | Duel on intimidation | @Sam shot true - @Bob drops their pistol in surrender! (99% vs 43%) |
| `!shipbattle @Sam` | Duel on cannon skills | @Sam broadside-shattered @Bob's hull! (45% vs 36%) - glorious victory! |
| `!plunderraid @Sam` | Duel on plundering | @Bob pillaged with unmatched fury, looting 28% of the treasure! @Sam was left with scraps (20%). |
| `!bootybattle @Sam` | Duel on booty | The crowd goes wild as @Bob's 100% booty steals the show! |
| `!ppduel @Sam` | Duel on PP size | @Bob and @Sam clashed in an epic PP duel. It's a draw at 7 inches each! |

</details>

<details>
<summary><b>FFY Of The Day</b> (12 commands)</summary>

| Title | How to win | Who won? |
|---|---|---|
| Daddy of the Day | 100% on `!daddy` | `!dadofday` |
| Mommy of the Day | 100% on `!mommy` | `!momofday` |
| PP of the Day | 15 inches on `!pp` | `!ppofday` |
| Boob of the Day | The biggest size on `!bb` | *(no who-command)* |
| Princess of the Day | 100% on `!princess` | `!princessofday` |
| Good Girl of the Day | 100% on `!goodgirl` | `!goodgirlofday` |
| Cat Mom of the Day | 100% on `!catmom` | `!catmomofday` |
| Stinker of the Day | 100% on `!stinker` | `!stinkerofday` |
| Pirate of the Day | 100% on `!pirate` | `!pirateofday` |
| Captain of the Day | 100% on `!captain` | `!captainofday` |
| Animal of the Day | Getting a Unicorn on `!animal` | `!animalofday` |
| Drink of the Day | Getting a Martini on `!drink` | `!drinkofday`, `!drinkoofday` |

</details>

<details>
<summary><b>FFY Countdowns, FFY Leaderboards</b> (2 commands)</summary>

| Command | What it does |
|---|---|
| `!sotfest` | Countdown to SoT Fest (10 July) |
| `!leaderboard` | Today's most-used commands. `!leaderboard users` shows the most active viewers |

</details>

---

## 27. Saved results and user variables

When a viewer uses a number or list command **on themselves**, their result is saved to their info in Streamer.bot:

1. Click the **Global Variables** tab in Streamer.bot.
2. Click **Persisted User Globals**.
3. Click the platform they're on: **Twitch**, **Kick** or **YouTube**.
4. Select their username.
5. Their saved results are listed there, e.g. **PP size today** = `6 inches`, **Drink of the day** = `Martini`.

You can use these in your own actions and overlays with Streamer.bot's user-variable sub-actions. The name is the command's `variable` line.

- It **updates each time they use the command** on themselves. After midnight, their next use saves the new day's result.
- It **doesn't change on its own**. If they don't use the command the next day, it still shows their last result.
- Checking someone else (`!pp @Sam`) is **not** saved.
- Switch it off for everything with `saveToUserVariables` in **FFY Switches**, or for one command by deleting its `variable` line.

### Other saved data (Global Variables tab)

| Variable | What it is |
|---|---|
| `ffy.state` | Today's titles, leaderboards and consents, plus Santa history. Delete it to reset everything. |
| `ffy.datacache` | A copy of all the data actions, so commands answer instantly after a restart. It looks after itself. |

### When does everything reset?

At **midnight**, in the time zone set in **FFY Config** (or your PC's clock). That's the same moment for every viewer, wherever they live.

| Resets at midnight | Kept |
|---|---|
| Daily results, titles, leaderboards, consents | Santa history, your settings, your data actions |

---

## 28. Troubleshooting

### ❓ A command doesn't reply

Work down this list:

1. **Is it switched on?** **Commands tab** → is **Enabled** ticked?
2. **Is the platform ticked?** **Commands tab** → open the command → **Sources**: Twitch, Kick, YouTube.
3. **Is it connected?** **Actions tab** → **FFY My Triggers** (your own commands) or **FFY Commands** (built-in ones) → **Triggers** box: is there a **Command Triggered** for it? ([section 9](#9-every-new-command-needs-this-connecting-it-to-streamerbot))
4. **Do its lines start with its own name?** For `!snack`, every line must start `Set("snack", ...`
5. **Did you Save and Compile?** And wait 30 seconds?
6. **Is a feature switched off** in **FFY Switches**, or is the command in `disabledCommands` in **FFY Config**?
7. **Cooldown or permissions?** Check the command's settings in the Commands tab.

### ❓ "Save and Compile" shows an error

See [section 7](#when-save-and-compile-shows-an-error). It's usually a missing `"`, `)`, `,` or `;`.

### ❓ I changed something but nothing happened

- Did you click **Save and Compile**?
- Wait 30 seconds and try again.
- Check you edited the right command name, and that no other line further down sets the same thing again. If it does, the last one wins.

### ❓ I made a new command and an *old* command changed instead

You copied the old command's lines and didn't change the first word on every line. See [rule 8](#7-the-golden-rules).

### ❓ Still stuck? Check the logs

Click the **Logs** tab in Streamer.bot and look for lines starting with **`[FFY]`**:

| Log message | What it means |
|---|---|
| `[FFY] !snack gave no reply. No data action has lines starting Set("snack", ...)` | No data for this command. Check the first word of its lines, or whether its feature is switched off |
| `[FFY] 'FFY Something' gave no data (does it compile?)` | That data action has an error. Open it and click Save and Compile to see it |
| `[FFY] Unknown timeZone '...'` | The time zone name in FFY Config isn't recognised (e.g. `Europe/London` instead of `GMT Standard Time`), so it's using your PC's clock. Pick a name from [the list](#set-your-time-zone-optional) |

---

## 29. FAQ

**Do I need to keep a program or website running?**
No. Everything runs inside Streamer.bot.

**Does it work on Kick and YouTube?**
Yes. Tick them under **Sources** on each command in the Commands tab. Replies go back to the platform the command came from.

**Why does Bob get the same `!pp` every time today?**
That's by design. Results are worked out from the date and the viewer's name, so they're fair and stay the same all day. New day, new result.

**Can I give commands cooldowns or make them sub-only?**
Yes. Each one is a normal Streamer.bot command, so use its settings in the Commands tab.

**How do I update to a new version without losing my changes?**
Import the **update** file over the top. No need to delete anything. Your settings, special users, FFY My actions and commands are kept ([section 2](#updating-to-a-newer-version)). Just make sure your own changes are in **FFY My** actions ([section 21](#21-keeping-your-changes-safe-from-updates)).

**Can I delete commands I'll never use?**
Yes. Delete the command in the Commands tab, and optionally its lines in its data action. Or just leave it switched off.

**Can I move commands to different folders?**
Yes. Change the command's **Group** in the Commands tab. Keep the folder name starting with `FFY ` so **FFY Enable All Commands** and **FFY Disable All Commands** still find it.

**Can I rename or move the data actions?**
Yes, but keep them in a group whose name starts with `FFY ` (not FFY Core or FFY Commands), so they're still read.

**Is it safe to edit FFY Commands?**
No. Add your own triggers to **FFY My Triggers** instead, and don't change the code of either.

---

*Made by FluffFaceYeti. Enjoy! 💜*
