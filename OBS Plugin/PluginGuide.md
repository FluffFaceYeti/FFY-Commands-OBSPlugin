# FFY Plugin for OBS Studio

A Twitch-powered OBS automation plugin that can show and hide sources based on chat commands, bot responses, usernames, and viewer walk-ons.

---

# Features

## Command-Based Source Triggers

Trigger OBS sources from Twitch chat commands.

Example:

```text
!waffles
```

Shows the selected OBS source for the configured duration.

---

## Username-Specific Commands

Restrict commands to a specific Twitch user.

Example:

| Command | Username    | Result                                  |
| ------- | ----------- | --------------------------------------- |
| pickle  | BlueGoo26   | Only BlueGoo26 can trigger the source   |
| cry     | epiickgiirl | Only epiickgiirl can trigger the source |

Example:

```text
!pickle
```

Only triggers if sent by the configured user.

---

## Trigger Value Commands

Trigger sources based on a bot response.

Useful for counters, loyalty points, death counters, PP commands, shot counters, etc.

Example Rule:

| Command | Trigger |
| ------- | ------- |
| pp      | 15      |

Workflow:

User types:

```text
!pp
```

Bot replies:

```text
Your PP is 15 inches today!
```

The plugin sees:

```text
15
```

inside the bot message and triggers the source.

---

## Any Bot Reply Triggers

Leave the Trigger field empty.

Example:

| Command | Trigger   |
| ------- | --------- |
| shots   | *(empty)* |

Workflow:

User types:

```text
!shots
```

Bot replies with anything:

```text
You have 10/10 shots today!
```

The plugin triggers immediately from the bot response.

---

## Multiple Source Support

A rule can control multiple OBS sources.

Select one or more sources from the Sources list when creating a rule.

When triggered, all selected sources are shown together.

---

# Walk-On System

The walk-on system allows viewers to trigger a source automatically when they chat.

Example:

| Username    | Source         |
| ----------- | -------------- |
| BlueGoo26   | Entrance Video |
| epiickgiirl | Sparkles       |

When that user sends a message in chat:

```text
Hello everyone!
```

their configured walk-on source is shown automatically.

---

# Creating a Rule

1. Open the FFY Plugin dock.
2. Enter a Command.
3. (Optional) Enter a Trigger value.
4. (Optional) Enter a Username.
5. Select one or more OBS sources.
6. Set the Duration.
7. Click **Add Rule**.

---

## Command Examples

### Simple Command

| Command | Trigger | Username |
| ------- | ------- | -------- |
| waffles |         |          |

Result:

```text
!waffles
```

Shows the source immediately.

---

### Username Command

| Command | Trigger | Username  |
| ------- | ------- | --------- |
| pickle  |         | BlueGoo26 |

Result:

```text
!pickle
```

Only works for BlueGoo26.

---

### Trigger Value Command

| Command | Trigger | Username |
| ------- | ------- | -------- |
| pp      | 15      |          |

Result:

```text
!pp
```

Bot must respond with:

```text
15
```

before the source appears.

---

# Connecting Twitch

1. Enter the Twitch channel name.
2. Click **Connect Twitch**.
3. The plugin will join chat anonymously.
4. Commands and walk-ons become active immediately.

No OAuth token is required.

---

# Source Requirements

The plugin currently supports:

* Image Sources
* Media Sources

These sources appear automatically in the Sources list.

Use **Refresh Sources** after creating new OBS sources.

---

# Rule Storage

Rules are automatically saved to:

```text
obs-studio\data\obs-plugins\ffy-plugin\ffy_rules.txt
```

Example:

```text
waffles|||5000|Another Train
pp|15||5000|Another Train
pickle||BlueGoo26|5000|Pickle Video
```

Format:

```text
Command|Trigger|Username|Duration|Source
```

---

# Walk-On Storage

Walk-ons are stored in:

```text
obs-studio\data\obs-plugins\ffy-plugin\walkons.txt
```

---

# Troubleshooting

## Command Doesn't Trigger

Check:

* Twitch is connected.
* The source exists in OBS.
* The rule command matches exactly.
* Username restrictions are correct.
* Trigger values match the bot response.

---

## Trigger Value Doesn't Work

Enable OBS logging and look for:

```text
[FFY Plugin] Comparing rule
```

Verify the bot message contains the trigger text exactly.

Example:

Trigger:

```text
15
```

Bot message:

```text
Your PP is 15 today
```

Works.

Bot message:

```text
Your PP is fifteen today
```

Does not work.

---

## Source Doesn't Appear

Check:

* Source exists in the current scene.
* Source name matches exactly.
* Source is visible in OBS.
* Duration is greater than 0.

## Source vanishes early

Check:

* Duration matches the source length with a +1s (1000ms).
