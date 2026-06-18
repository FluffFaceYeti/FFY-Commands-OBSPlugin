NEED HELP?
====================================================
For a small donation, I will help you tailor the script to suit your needs. This includes.

- adding in new commands 
- altering "of the day" to change from say "Daddy of the day" to "Penguin of the day" 
- adding or removing jokes 
- adding new interactions such as "poke" or "prod"
- and more

DEPLOYING YOUR CUSTOM APICORE USING RENDER
====================================================

Bring your API to life on the web in just a few minutes! 
Follow this simple step-by-step guide to get your bot commands or API running.

----------------------------------------------------
1. PUSH TO GITHUB
----------------------------------------------------

Let’s start by putting your project online.

Steps:
1. Create a new GitHub repository (example name: CustomAPICore)
2. Add or upload your files:
   - CustomAPICore.js
   - package.json
   - (optional) README.md
3. Commit and push your changes to GitHub.

🎉 Once your code is pushed, your project is now accessible to Render!

🎉 Bonus tip 
- You can simply click "New Repository," then click on "Import a Repository" and use the following link https://github.com/FluffFaceYeti/CustomAPICommands---Tested-for-StreamElements-Fossabot
- Simply give it a name and GitHub will pull all the files over for you!

----------------------------------------------------
2. DEPLOY ON RENDER
----------------------------------------------------

Now let’s connect your GitHub repo to Render.

Steps:
1. Go to https://render.com
2. Sign in with your GitHub account.
3. Click “New +” → “Web Service”
4. Select your CustomAPICore repository.

Then set up your service like this:

- Environment: Node
- Build Command: npm install
- Start Command: npm start

Once everything looks good, click “Create Web Service.”

----------------------------------------------------
WHAT HAPPENS NEXT
----------------------------------------------------

Render will automatically:
- Clone your GitHub repo
- Install your dependencies (like express)
- Run your app using node CustomAPICore.js
- Give you a live link — something like:
  https://customapicore.onrender.com

🎯 You can now use that link in StreamElements, Fossabot, or anywhere your commands call the API!

----------------------------------------------------
3. UPDATING YOUR CODE
----------------------------------------------------

for guides of most if not all aspects of the code please open the "Helpers" folder wich is located within the "data" folder

----------------------------------------------------
4. IMPORTANT NOTE ABOUT FREE HOSTING "OnRender shuts down after 15 minutes of no activity?"
----------------------------------------------------

- The free version does that, but there is a way to trick it!
- Create a StreamElements Timer 
- Have the timer run every 10 minutes when you are live 
- have the response be ${customapi.https://yourusername.onrender.com/?sender=${sender}&type=ping}
- So if your OnRender service is called waffles, it would be ${customapi.https://waffles.onrender.com/?sender=${sender}&type=ping}
- Set the chat lines to zero
- StreamElements will now ping your service every 10 minutes. Stopping the service from shutting down while you are live. 
- For full 24/7 uptime and instant responses, consider upgrading to the $7/month plan.

----------------------------------------------------
QUICK RECAP
----------------------------------------------------

1️⃣ Push your files to GitHub
2️⃣ Deploy to Render as a Web Service
3️⃣ Set Environment = Node, Build = npm install, Start = npm start
4️⃣ Get your public API link and enjoy!
💡 Upgrade if you need constant uptime

----------------------------------------------------
4. Consider Donating? 
----------------------------------------------------

While this file is free to use:

- Some time has been spent on it, ensuring it is simple and easy to follow.
- It will allow you to have commands with stored replies, as well as optional things such as spaces and jokes.
- If you feel like sending a small thank-you tip, you can do so here.
- If you feel like sending a small thank-you tip, you can do so here.
- https://streamelements.com/FluffFaceYeti/tip

----------------------------------------------------
HELPERS
----------------------------------------------------

###a HUGE thank you to the people who have been testing and offering input along the way!

- https://www.twitch.tv/bluegoo26 - Main tester for this project, thank you for breaking everything and finding all the bugs I could not see! 

- https://www.twitch.tv/t1tcho - The "Ideas lady", thank you for always encouraging me to test my creative limits with these "nerdy projects" more coming soon, if you know you know!

- https://www.twitch.tv/epiickgiirl - "Can you add walk ons" well peach! we sure can and we did!

- https://www.twitch.tv/vexx1e - Another amazing helper that offered her "Raccoon Ideas" as well as snacks she did not steal from someones trash can.... right?!?!

- https://www.twitch.tv/thegalaxygirllive - MAMA, the helper that gave us the idea of making the UI boxes fully editible so users can simply change commands easily!

Seriously, Thank you dorks for helping us make this cool little idea into a fun project! 

----------------------------------------------------
TIME ZONE EXAMPLES
----------------------------------------------------
```yaml
Use the time zone that works best for you

America/New_York
America/Chicago
America/Denver
America/Los_Angeles
America/Anchorage
Pacific/Honolulu
America/Phoenix
America/St_Johns
America/Halifax
America/Toronto
America/Winnipeg
America/Edmonton
America/Vancouver
America/Detroit
America/Indiana/Indianapolis
America/Kentucky/Louisville
America/Regina
America/Moncton
America/Whitehorse
America/Yellowknife
America/Iqaluit
```
----------------------------------------------------
BASE TYPES
----------------------------------------------------

How to use? 

For each command your link will look like this
```yaml
${customapi.https://yourusername.onrender.com?sender=${sender}&type=beard}
```
The key part being the end, That &type=beard tells the code and your bot wich part to look at and wich data to use in order to run the command. 
below is a list of the Types that come with the file as a default, you can add as many as you like by following the guides provided. 
For each command your link will look like this
```yaml
# 📊 Stats
&type=beard
&type=hair
&type=pp
&type=bb
&type=daddy
&type=catmom
&type=stinker
&type=fox
&type=nerd
&type=tinkabell
&type=princess
&type=goodgirl
```
```yaml
# ❤️ Love
&type=flame
```
```yaml
# 💔 Hate
&type=flamehate
```
```yaml
# 🧠 Personality
&type=clowning
&type=heroComplex
&type=darkHumor
&type=whimsicality
&type=ambition
&type=mischief
&type=bookishness
&type=zen
&type=selfConfidence
&type=thoughtfulness
&type=creativity
&type=spontaneity
&type=cookingSkills
&type=competitiveSpirit
&type=eccentricity
&type=sassiness
&type=imagination
&type=nurturingInstinct
&type=patience
&type=charisma
&type=luck
```
```yaml
# 🏋️ Gym
&type=lift
&type=run
&type=sprint
&type=deadlift
&type=curl
&type=row
&type=stretch
```
```yaml
# 🏦 Hold
&type=gold
```
```yaml
# 🏦 Carry
&type=weight
&type=items
```
```yaml
# 💪 Actions
&type=squeeze
&type=push
&type=jump
&type=press
&type=kick
&type=dodge
&type=roll
&type=slide
&type=climb
&type=punch
&type=block
&type=tackle
&type=throw
&type=kickflip
&type=spin
&type=uppercut
&type=grapple
```
```yaml
# 😃 Emotions & Feelings
&type=happiness
&type=anger
&type=calmness
&type=joy
&type=excitement
&type=energy
&type=sleep
&type=sadness
&type=anxiety
&type=love
&type=nostalgia
&type=gratitude
&type=guilt
&type=pride
&type=frustration
&type=hope
&type=love_hate_balance
```
```yaml
# 🎯 Skills
&type=precision
&type=accuracy
&type=focus
&type=flirting
&type=dj
&type=intelligence
&type=stealth
&type=cooking
&type=leadership
&type=negotiation
&type=martial_arts
&type=strength
&type=adaptability
```
```yaml
# 🏴‍☠️ Pirate Skills
&type=pirate
&type=captain
&type=treasure_hunting
&type=sea_navigation
&type=ship_maintenance
&type=swordsmanship
&type=swashbuckling
&type=plunder
&type=cannon_use
&type=crew_morale
&type=intimidation
&type=parley
```
```yaml
# 🐾 Animal Vibes
&type=animal
```
```yaml
# 🍹 Drink Vibes
&type=drink
```
```yaml
# 🎨 Colors
&type=colors
```
```yaml
# 🧘 Aura Vibes
&type=auravibes
```
```yaml
# 🏴‍☠️ Pirate Vibes
&type=piratevibes
```
```yaml
# 🧙 Wizard Vibes
&type=wizardvibes
```
```yaml
# 👗 Outfits / Styles
&type=outfits
```
```yaml
# ⚡ Elements
&type=elements
```
```yaml
# 🌟 Powers / Abilities
&type=powers
```
```yaml
# 🏴‍☠️ Pirate Accessories
&type=pirateoutfits
```
```yaml
# 🧙 Wizard Accessories
&type=wizarditems
```
```yaml
# 🌿 Elemental Accessories
&type=elementalitems
```
```yaml
# ✨ Aura Accessories
&type=auraitems
```
```yaml
These require targeted links such as 

${customapi.https://yourusername.onrender.com?sender=${sender}&user=${user}&type=bonk}

# 🤝 Interactions
&type=bonk
&type=boop
&type=fliptable
&type=highfive
&type=hug
&type=kiss
&type=love
&type=pat
&type=slap
&type=spank
&type=throwshoe
```
