// AUTO-GENERATED FILE - do not edit by hand.
// Source of truth: GLOSSARY.md (content) + glossary-tone.json (presentation hints).
// Regenerate with: node scripts/build-glossary-data.mjs
// This also happens automatically via .github/workflows/sync-glossary-data.yml
// whenever GLOSSARY.md or glossary-tone.json change on main.

window.GLOSSARY_DATA = [
  {
    "n": "1",
    "title": "Saving and sharing your work",
    "blurb": "This whole family of words comes from Git — the system almost every software project uses to track changes. Think of Git as a time machine plus a shared filing cabinet for your project. It remembers every version, and it lets more than one person (or agent) work without clobbering each other.",
    "terms": [
      {
        "t": "Repository",
        "m": "Your project's folder — plus its entire history, every version it's ever been.",
        "p": "the filing cabinet itself. One repo = one project.",
        "aka": "repo",
        "note": "\"the repo\" just means \"this project.\" Nothing to do."
      },
      {
        "t": "Commit",
        "m": "A saved snapshot of your work, with a short note saying what changed.",
        "p": "pressing \"save\" in a video game — but it also writes a diary entry: \"reached level 3, got the key.\"",
        "note": "\"I committed the change\" = it saved a checkpoint. Your work is now safely recorded. Good news.",
        "tone": "good"
      },
      {
        "t": "Push",
        "m": "Sending your saved snapshots up from your machine to the shared copy online (usually on GitHub).",
        "p": "uploading your saved game to the cloud so others can see it.",
        "note": "\"I pushed\" = your work is now on the shared server, not just the local machine. This is how it becomes visible to others and to the systems that put it live."
      },
      {
        "t": "Pull",
        "m": "The opposite of push — bringing the latest shared changes down onto your machine.",
        "p": "downloading everyone else's saved progress so you're caught up.",
        "note": "it is catching up to the shared copy before doing anything else. If a pull fails, two versions have drifted apart, and that has to be sorted out before anything built on top of it can be trusted."
      },
      {
        "t": "Branch",
        "m": "A separate copy of the project where you can try changes safely, without touching the real thing.",
        "p": "a \"sandbox\" universe. You experiment there; if it works, you bring it back; if it doesn't, you throw the whole universe away and nothing was harmed.",
        "note": "\"I made a branch\" = \"I'm working in a safe side-copy, not on the live project.\" This is the responsible thing to do. Relax.",
        "tone": "good"
      },
      {
        "t": "Main",
        "m": "The branch that is the real, official project. The one that counts.",
        "p": "the master copy of the manuscript. The branches are drafts; main is what gets published.",
        "aka": "master",
        "note": "changes on main are the ones that generally go live. That's why agents are careful about it."
      },
      {
        "t": "Merge",
        "m": "Taking the changes from a branch and folding them into another branch (usually into main).",
        "p": "your sandbox experiment worked, so you copy it back into the real project.",
        "note": "\"I'll merge this\" = \"I'm about to make these changes official.\" This is often the moment right before something goes live."
      },
      {
        "t": "Squash-merge",
        "m": "Folding all the little saves from one piece of work into the real project as a single tidy change.",
        "p": "twelve rough drafts of a letter going into the file as one clean final copy. The drafts are not kept; the result is.",
        "note": "\"I'll squash-merge this\" = \"I'm about to make this work official, recorded as one change rather than twenty.\" It is the normal, tidy way to finish a piece of work — and usually the moment right before something goes live."
      },
      {
        "t": "Merge conflict",
        "m": "Git got confused because two people changed the same line two different ways, and it doesn't know which one you want. It stops and asks.",
        "p": "two editors wrote different sentences in the same spot of a document. Someone has to pick.",
        "note": "not a disaster — it's a normal traffic jam. The agent (or you) just decides which version wins. Let the agent resolve it; ask it to explain the choice if the change matters to you.",
        "tone": "look"
      },
      {
        "t": "Pull request",
        "m": "A formal proposal that says: \"here are my changes; please review them before we make them official.\" It's the polite knock on the door before merging.",
        "p": "handing in an edited draft with a cover note, and asking someone to approve it before it goes to print.",
        "aka": "PR, merge request",
        "note": "\"I opened a PR\" = \"the change is ready and waiting for a yes.\" Often you are the one who says yes. It's a checkpoint, on purpose — nothing goes live until the PR is merged."
      },
      {
        "t": "Clone",
        "m": "Making your own full copy of a project onto your machine to work on it.",
        "p": "photocopying the entire filing cabinet to take home.",
        "note": "it is starting from a fresh copy. Anything you changed by hand somewhere else is not in it, so say so now if that matters."
      },
      {
        "t": "Fork",
        "m": "Your own personal copy of someone else's project, so you can change it without affecting theirs.",
        "p": "photocopying a book so you can scribble in the margins without touching the library's copy.",
        "note": "your changes live in your copy only. Getting them into the original means offering them back and waiting for the owner to accept."
      },
      {
        "t": "Revert",
        "m": "Undo a specific past change — cleanly, on the record.",
        "p": "\"undo,\" but it also writes a note saying \"we undid that, on purpose, here's why.\"",
        "note": "safe and reversible. This is the calm way to back out of a mistake.",
        "tone": "good"
      },
      {
        "t": "Rollback",
        "m": "Put the live product back to an earlier working version because the new one is causing problems.",
        "p": "the restaurant's new recipe is making people sick — go back to last week's recipe right now, figure out the new one later.",
        "note": "usually said under pressure. It means \"something's wrong live; get back to safety first.\"",
        "tone": "look"
      },
      {
        "t": "Diff",
        "m": "The exact list of what changed — what lines were added, what was removed.",
        "p": "\"track changes\" in a Word document. Red for deleted, green for added.",
        "note": "it's showing you precisely what it touched. If you want to know \"what did you actually change?\", this is the answer."
      },
      {
        "t": "Stash",
        "m": "Temporarily set your half-finished work aside so you can deal with something urgent, then bring it back.",
        "p": "sweeping your in-progress puzzle onto a tray so you can use the table, then sliding it back.",
        "note": "work has been parked — not finished, not thrown away. Ask when it is coming back, because stashed work is the easiest kind to forget about."
      }
    ]
  },
  {
    "n": "2",
    "title": "Checking the work is actually good",
    "blurb": "Before code goes live, it gets checked — automatically and repeatedly. This family of words is all about \"did we break anything?\" Agents run these checks constantly. When one comes back green, that's good. Red means something needs attention.",
    "terms": [
      {
        "t": "Test",
        "m": "A small piece of code whose only job is to check that another piece of code does what it's supposed to.",
        "p": "a taste-tester who takes one bite and says \"yes, this is soup\" or \"this is not soup.\"",
        "note": "\"the tests pass\" = \"the automatic checkers all say the work is behaving correctly.\" Reassuring.",
        "tone": "good"
      },
      {
        "t": "Test suite",
        "m": "The whole collection of tests, run together.",
        "p": "the full panel of taste-testers, not just one.",
        "note": "every automatic checker approved. This is one of the strongest \"it's fine\" signals there is. Worth asking how many actually ran, not just that it came back green — a suite with parts switched off is still green.",
        "tone": "good"
      },
      {
        "t": "Unit test",
        "m": "A test that checks one tiny piece in isolation.",
        "p": "testing the doorbell by itself, before you check whether the whole house works.",
        "note": "one small piece is proven to work on its own. That is not the same as the feature working end to end for a real person."
      },
      {
        "t": "Smoke test",
        "m": "A quick, shallow check that the basics work at all — before bothering with the detailed checks.",
        "p": "turning the car key to confirm the engine starts. You haven't tested the air-con or the radio — you've just confirmed it's not dead.",
        "note": "from plumbing and electronics — literally \"turn it on and see if smoke comes out.\" \"smoke test passed\" = \"the obvious this-is-alive checks are fine.\" Basic confidence, not a full guarantee."
      },
      {
        "t": "Regression",
        "m": "A thing that used to work but a new change accidentally broke. A step backward.",
        "p": "you fix the kitchen tap, and now the shower is cold. The shower \"regressed.\"",
        "note": "a regression test is a checker added specifically so that a bug, once fixed, can never quietly come back. Agents write these on purpose — it's a sign of care.",
        "tone": "good"
      },
      {
        "t": "CI",
        "m": "The robot that automatically runs all the checks every time code changes — so nobody has to remember to.",
        "p": "an automatic quality-control line in a factory. Every item that comes off the belt gets inspected, no exceptions.",
        "aka": "continuous integration",
        "note": "it's waiting for (or has received) the robot inspector's all-clear. Green = passed. Red = something failed, look before proceeding."
      },
      {
        "t": "Build",
        "m": "Turning the written code into the actual runnable product.",
        "p": "baking. The code is the recipe and ingredients; the build is the finished cake. \"The build failed\" means something went wrong in the oven — the cake didn't come out.",
        "note": "the product assembled successfully. A failed build means it can't even be put together yet, let alone go live."
      },
      {
        "t": "Lint / linter",
        "m": "An automatic proofreader for code — catches sloppy style and small mistakes.",
        "p": "spellcheck and grammar-check, but for code.",
        "note": "no style complaints. Minor, but tidy."
      },
      {
        "t": "Type check",
        "m": "An automatic check that the pieces of code fit together — that you're not accidentally handing a phone number where a name was expected.",
        "p": "checking that every plug matches its socket before you switch the power on.",
        "aka": "tsc, typecheck",
        "note": "the pieces are wired together correctly. If it fails, two parts don't fit and it would break."
      },
      {
        "t": "Verify / verification",
        "m": "Actually confirming something works — not just assuming it does.",
        "p": "the difference between \"I mailed the invitation\" and \"I called and they said they got it.\"",
        "note": "it checked with its own eyes/tools, rather than guessing. This is the good, careful kind of claim. If it says \"not verified,\" respect that — it's being honest that it didn't confirm. And ask what it ran and what came back — verified with nothing shown is a claim, not evidence.",
        "tone": "good"
      },
      {
        "t": "Flaky test",
        "m": "A checker that sometimes passes and sometimes fails for the same code — usually because of timing or luck, not a real problem.",
        "p": "a smoke alarm that occasionally beeps for no reason. Annoying; not a fire.",
        "note": "it's flagging that a red result might be noise, not a genuine break. Worth a second run to confirm."
      },
      {
        "t": "Green / red",
        "m": "Green = checks passed, all clear. Red = something failed.",
        "p": "traffic lights. Green means the checks let the work through; red means it is stopped until somebody deals with it.",
        "note": "good to go. \"It's red\": stop and look. Worth asking green on what — green on the checks that exist is not green on the checks that ought to exist."
      },
      {
        "t": "npm audit",
        "m": "A command that checks your project's dependencies for known security problems and tells you how many it found.",
        "p": "A quick health inspection of every ingredient in your pantry, flagging any that have been recalled.",
        "note": "It's just running a routine check, not fixing or changing anything in your code yet."
      },
      {
        "t": "Workflow",
        "m": "A saved list of steps that runs by itself when something happens, like every time work is saved to the project.",
        "p": "a dishwasher cycle. You load it and press start once; the sequence runs the same way every time.",
        "aka": "GitHub Actions, action, pipeline, job, runner",
        "note": "a workflow going green means the steps ran without complaining. Worth asking what the steps actually check, because a workflow can pass while checking almost nothing."
      },
      {
        "t": "In isolation",
        "m": "Running one test, or one file, by itself rather than alongside everything else.",
        "p": "retaking one exam in an empty room after failing it in a crowded hall.",
        "aka": "on its own, re-run individually, in a clean run",
        "note": "a pass in isolation is not a pass. It is a pass under different conditions than the failure, which rules some causes out and settles nothing. Ask for the original command, in the original conditions, to pass twice."
      },
      {
        "t": "Under load",
        "m": "While the computer is already doing plenty of other things. Steps that work fine on a quiet machine can fail when everything runs at once.",
        "p": "a staircase that is fine empty and dangerous in a crowd.",
        "aka": "on a busy machine, under contention",
        "note": "\"it only fails under load\" is sometimes true and sometimes a way of setting a failure aside. Under load is the condition your real users arrive in, so it is the interesting case, not the excusable one."
      },
      {
        "t": "Flake",
        "m": "A test that passes some runs and fails others with nothing changed in between. Some flakes really are the test's fault. Some are a genuine bug that only shows up occasionally.",
        "p": "a door that sticks about one time in ten. Easy to decide the door is fine.",
        "aka": "flaky, a flake, intermittent, non-deterministic",
        "note": "flake is a diagnosis, not an observation. Ask how many runs it is based on and what the failure actually said. Calling something a flake is the cheapest way to make a red result go away."
      },
      {
        "t": "Clean",
        "m": "The tool finished and printed no complaints.",
        "p": "an inspector who leaves without writing anything down.",
        "aka": "clean run, no output, all clear",
        "note": "clean means nothing was reported, which is not the same as nothing being wrong. Ask what that particular tool checks, and whether any of its rules are switched off."
      },
      {
        "t": "0 errors",
        "m": "The check found none of the things it was set up to look for.",
        "p": "a metal detector staying quiet. Reassuring, until you learn it only finds steel.",
        "aka": "no errors, passed with no errors",
        "note": "ask what the check covers. Zero type errors, zero lint errors and zero failing tests are three unrelated statements, and none of the three says the feature works."
      },
      {
        "t": "Validate step",
        "m": "A named step in your project's own checklist that runs some checks. Which checks, and how strict they are, was decided by whoever wrote it.",
        "p": "a checklist on the wall. Useful only if you read what is on it.",
        "aka": "build:validate, validation script, check step",
        "note": "\"validate passed\" is a statement about a script, not about your product. Ask what is on the list."
      },
      {
        "t": "Compiled output vs source text",
        "m": "The code that gets written is the source. What actually runs is usually a translated copy built from it. The two can disagree - if the build is stale, or a setting rewrites values on the way through.",
        "p": "the recipe and the cake. Reading the recipe will not tell you whether the oven was on.",
        "aka": "compiled value, build output, the built file, source text",
        "note": "measure the thing that runs, not the thing that describes it. If a value matters, ask to see it in the built output or at run time, not quoted back out of the source."
      }
    ]
  },
  {
    "n": "3",
    "title": "Putting it live",
    "blurb": "Getting your work in front of real people. This is where the stakes go up — mistakes here are visible to users. Agents slow down and get careful around these words, and so should you.",
    "terms": [
      {
        "t": "Deploy / deployment",
        "m": "Putting your code live where real people can use it.",
        "p": "opening the shop doors. Up to now you were rehearsing inside; deploy is unlocking the front door.",
        "note": "your change is going (or has gone) live. This is the real-consequences moment."
      },
      {
        "t": "Production",
        "m": "The real, live version that actual users touch. The real world.",
        "p": "opening night, full audience — not the dress rehearsal.",
        "aka": "prod",
        "note": "it's talking about the live thing, where mistakes are visible to users. Extra care warranted.",
        "tone": "look"
      },
      {
        "t": "Staging",
        "m": "A private practice copy that looks exactly like the live product, for final rehearsal before going live.",
        "p": "the dress rehearsal on the real stage, but with no audience yet.",
        "note": "it survived the rehearsal. Rehearsals miss the things that only real users and real data produce."
      },
      {
        "t": "Environment",
        "m": "Which copy of the world you're in: dev (your private workshop), staging (dress rehearsal), prod (live, real users).",
        "p": "three identical kitchens — one to make a mess in, one to rehearse the final plating, one that actually serves customers.",
        "aka": "dev / staging / prod",
        "note": "ask which one it means. A surprising number of confusing conversations turn out to be two people describing different copies of the same thing."
      },
      {
        "t": "Localhost",
        "m": "The version running privately on your own machine only. Nobody else can see it.",
        "p": "cooking in your own kitchen with the curtains drawn. \"It works on localhost\" means \"it works on my machine\" — which is not yet proof it works for everyone.",
        "note": "it worked on the machine it is sitting on. Nobody else can reach that, and works locally is the weakest form of works."
      },
      {
        "t": "Release",
        "m": "A packaged, named version of the product that you hand to the world.",
        "p": "a book edition. \"Version 2.0\" is a release.",
        "note": "a specific labeled version went out. Ask for the label, so you can point at it later when you need to say what changed and when."
      },
      {
        "t": "Hotfix",
        "m": "An urgent, small repair pushed live fast because something is broken right now.",
        "p": "a plumber coming out at midnight for a burst pipe. Not elegant — necessary and immediate.",
        "note": "something live is broken and it's fixing it quickly. Read the explanation; hotfixes skip some of the usual patience because time matters.",
        "tone": "look"
      },
      {
        "t": "Ship / ship it",
        "m": "Casual slang for \"release it / put it live.\"",
        "p": "the product literally leaving the warehouse on a truck.",
        "note": "the work is done and it's proposing to make it live. Often your cue to say go or wait."
      },
      {
        "t": "Server",
        "m": "A computer, always on, somewhere else, that runs your product for everyone.",
        "p": "the restaurant's kitchen — you don't see it, but it's where the food actually gets made for every table.",
        "note": "something is running somewhere other than your screen. Ask who pays for it and who can reach it."
      },
      {
        "t": "Endpoint / API",
        "m": "A specific \"door\" your product exposes so other programs can ask it for something.",
        "p": "a drive-through window. You pull up, ask for a specific thing (\"give me the user's orders\"), and get it handed back. An API is the whole set of windows; an endpoint is one particular window.",
        "note": "it is describing a specific door into your system. Ask who is allowed through it, because doors get built faster than locks do."
      },
      {
        "t": "Downtime / outage",
        "m": "A stretch when the live product isn't working for users.",
        "p": "the shop lights are off during opening hours. Bad. The thing agents are trying hard to avoid.",
        "note": "your users could not use the product. Ask how long, how many people, and what stops it happening the same way again.",
        "tone": "look"
      }
    ]
  },
  {
    "n": "4",
    "title": "When something breaks",
    "blurb": "Nothing here means the sky is falling. Software breaks constantly — the whole craft is built around finding and fixing breaks calmly. These words are the vocabulary of diagnosis.",
    "terms": [
      {
        "t": "Bug",
        "m": "A mistake in the code that makes it behave wrong.",
        "p": "a typo in a recipe that says \"salt\" where it meant \"sugar.\" The famous origin: a real moth stuck in a computer in 1947.",
        "note": "ask whether it has watched the bug happen or is inferring it from reading the code. Those two lead to very different fixes."
      },
      {
        "t": "Error / exception",
        "m": "The code hit a problem and stopped, usually with a message explaining what went wrong.",
        "p": "the \"does not compute\" moment — the program throws its hands up and says \"I can't do this.\"",
        "note": "the message is a clue, not a verdict. Agents read these to find the cause. You don't need to decode it yourself. ask for the actual message. The wording of an error usually names the problem better than any summary of it."
      },
      {
        "t": "Crash",
        "m": "The program didn't just stumble — it fell over completely and stopped.",
        "p": "the engine cutting out mid-drive, versus just a warning light.",
        "note": "it stopped rather than misbehaved. That is often the easier case — something that keeps running while quietly doing the wrong thing is worse."
      },
      {
        "t": "Stack trace",
        "m": "The detailed trail showing exactly where in the code things went wrong, step by step backward.",
        "p": "a \"black box\" flight recorder — it shows the sequence that led to the crash, so you can find the cause.",
        "aka": "traceback",
        "note": "it's the evidence, not a demand on you. Let the agent read it. If you're curious, ask \"what does that trace tell you?\" it has the exact spot the failure came from. If it is still guessing after reading one, ask it to read the trace again rather than try another fix."
      },
      {
        "t": "Log / logs",
        "m": "The running diary a program writes about what it's doing — invaluable when hunting a problem.",
        "p": "a ship's logbook. When something goes wrong, you read back through it to see what happened.",
        "note": "ask what the logs actually said, not what it concluded from them. Logs are the closest thing you have to a witness."
      },
      {
        "t": "Root cause",
        "m": "The actual underlying reason something broke — not just the symptom.",
        "p": "the puddle on the floor is the symptom; the leaking pipe behind the wall is the root cause. Mopping the puddle forever doesn't help.",
        "note": "it's refusing to slap on a surface patch and instead finding the real problem. This is exactly what you want — even though it takes a bit longer. When it says it has found one, ask how it knows: a root cause you can state in a sentence and a symptom you have covered over look identical from the outside.",
        "tone": "good"
      },
      {
        "t": "Reproduce",
        "m": "Make the bug happen again on purpose, so it can be studied and fixed.",
        "p": "a doctor trying to trigger the symptom in the office so they can actually see it, instead of taking your word for it.",
        "aka": "repro",
        "note": "good — it can now see the problem directly, which means it can fix it with confidence rather than guessing. The reverse matters just as much — if it cannot make the problem happen on demand, any fix that follows is a guess.",
        "tone": "good"
      },
      {
        "t": "Edge case",
        "m": "A rare, unusual situation the code didn't expect — where things go wrong.",
        "p": "the vending machine works fine, until someone pays entirely in coins from another country. That weird case is the edge.",
        "note": "find out whether the case is rare in the world or only rare in testing. Empty, enormous, duplicated and non-English inputs turn up constantly once real people arrive."
      },
      {
        "t": "Breaking change",
        "m": "A change that will break things that depend on it, unless they're updated too.",
        "p": "changing the locks on a building — necessary sometimes, but now everyone's old keys stop working and you have to hand out new ones.",
        "note": "it's warning you there's a knock-on cost. Worth pausing to understand what else is affected. something that worked yesterday stops working. Ask who is on the other end of it before you agree to it.",
        "tone": "look"
      },
      {
        "t": "Patch / fix",
        "m": "A repair for a bug.",
        "p": "a patch on a tyre. Small, targeted, gets you rolling again.",
        "note": "ask whether it fixed the cause or the symptom, and whether the fix has actually been run."
      }
    ]
  },
  {
    "n": "5",
    "title": "The building blocks (what things are)",
    "blurb": "The nouns. When your agent mentions one of these, it's naming a part of the machine.",
    "terms": [
      {
        "t": "Code / source code",
        "m": "The written instructions that tell the computer what to do.",
        "p": "the recipe. The computer follows it exactly, literally, with zero improvisation.",
        "note": "this is the text it writes and edits. You can always ask to see the specific piece being discussed — none of it is off limits to you."
      },
      {
        "t": "Function",
        "m": "A named, reusable chunk of instructions that does one job.",
        "p": "a single kitchen appliance — \"the blender.\" You give it inputs, it does its one job, hands back a result. Code is built from thousands of these.",
        "note": "it is naming one small labeled job inside the code. Asking what goes in and what comes out is usually enough to follow the rest of the answer."
      },
      {
        "t": "Variable",
        "m": "A named container that holds a piece of information, which can change.",
        "p": "a labelled box. The box says customerName on the outside; inside, today it holds \"Amir,\" tomorrow \"Dana.\"",
        "note": "it is talking about a named holder for a value. When a bug involves one, the value is usually missing or is something other than what was expected."
      },
      {
        "t": "Library / package / dependency",
        "m": "Pre-built code written by someone else that your project uses so it doesn't reinvent the wheel.",
        "p": "buying a pre-made pastry base instead of making it from scratch. A dependency is exactly that — your project depends on this outside piece to work.",
        "note": "it wants to pull in an outside building block. Reasonable — but each one is a thing your project now relies on, which is why careful agents ask before adding new ones."
      },
      {
        "t": "Framework",
        "m": "A big, opinionated starter kit that gives your whole project its shape and structure.",
        "p": "a pre-fab house frame — walls, plumbing routes, and wiring already laid out. You build your specific home inside it instead of pouring the foundation yourself.",
        "note": "it is naming the ground rules the project is built on. Swapping framework later is a rebuild, not an adjustment."
      },
      {
        "t": "Database",
        "m": "The organized store where your product keeps its information, permanently.",
        "p": "a giant, well-indexed set of spreadsheets that never forgets and can be searched instantly.",
        "note": "this is where your users' work actually lives. Anything described as temporary in here deserves pinning down, because data outlives the code around it."
      },
      {
        "t": "Schema",
        "m": "The agreed shape of your data — what fields exist and what type each one is.",
        "p": "the blank form's structure: \"Name (text), Age (number), Email (text).\" The schema is the form's design; the data is what people fill in.",
        "note": "it is describing the shape your data is required to take. Changing that shape after real data exists is the risky kind of change."
      },
      {
        "t": "Migration",
        "m": "A recorded, repeatable change to the shape of your database.",
        "p": "a renovation plan for the filing system — \"add a 'phone number' column to every customer record\" — written down so it can be applied cleanly and, if needed, reversed.",
        "note": "it's carefully changing how data is stored. Careful is the operative word — these are done deliberately because they touch real stored information. Ask what happens to the records already in there, and whether the step can be undone.",
        "tone": "look"
      },
      {
        "t": "Environment variable / secret / API key / token",
        "m": "A private setting or password your product needs to work — kept out of the code so it can't leak.",
        "p": "the keys to the building and the alarm codes. You don't write them on the front door — you keep them somewhere safe and separate.",
        "aka": "env var, envvar, dotenv, credentials",
        "note": "treat them like passwords, because they are. Never paste them into a public place. Good agents refuse to print them. these are keys to things that cost money or hold your users' data. Ask where they are kept, and never let one sit inside the code itself.",
        "tone": "look"
      },
      {
        "t": "Frontend / backend",
        "m": "Frontend = the part users see and touch (buttons, screens). Backend = the engine behind the scenes (the logic, the database).",
        "p": "a restaurant. Frontend is the dining room and menu; backend is the kitchen and the supply room.",
        "note": "it is saying which half it is working on — the part people see, or the part behind it. A lot of bugs live in the gap between the two."
      },
      {
        "t": "Config",
        "m": "The settings that control how your product behaves, without changing the code itself.",
        "p": "the dials and switches on a machine. Same machine, different behavior depending on how the dials are set.",
        "aka": "configuration",
        "note": "settings changed, not code. That is usually easier to reverse, so ask what the old value was before moving on."
      }
    ]
  },
  {
    "n": "6",
    "title": "Words agents use about how they work",
    "blurb": "These describe the manner of a change or the agent's own process. They come up constantly and mean less than they sound.",
    "terms": [
      {
        "t": "Blocked",
        "m": "The agent has stopped because it needs something from you — an answer, a decision, a key — and cannot go on until it gets it.",
        "p": "a builder standing in your hallway holding two tins of paint, waiting for you to point at one.",
        "note": "nothing is broken and nothing is lost. It is waiting on you. Find the question, answer it, and it carries on."
      },
      {
        "t": "Refactor",
        "m": "Tidying and reorganizing code so it's cleaner — without changing what it does.",
        "p": "reorganizing your closet. Same clothes, better arranged, easier to find. Nothing was thrown out; nothing new was bought.",
        "note": "it's saying \"I cleaned up the structure but the behavior is identical.\" Low-risk by definition — though a careful agent still checks it didn't accidentally change anything. Ask what it ran afterwards to show that nothing moved."
      },
      {
        "t": "Idempotent",
        "m": "Doing it twice has the same effect as doing it once — running it again does no extra harm.",
        "p": "pressing a lift call button. Pressing it five times doesn't call five lifts. Safe to repeat.",
        "note": "it's reassuring you that re-running something won't double up or cause damage.",
        "tone": "good"
      },
      {
        "t": "Deprecated",
        "m": "Officially on the way out — still works for now, but you're meant to stop using it.",
        "p": "a product being discontinued. Still on the shelf, but don't build new plans around it.",
        "note": "the thing still works but is on its way out. Ask when it stops working, and whether anything new is being built on top of it."
      },
      {
        "t": "Boilerplate",
        "m": "Standard, repetitive setup code that's basically the same in every project.",
        "p": "the \"Dear ___, thank you for your letter\" opening you paste into every reply. Necessary, unoriginal, copy-pasted.",
        "note": "it wrote the standard opening lines every project needs. Little thought went into it, and little needs to."
      },
      {
        "t": "Stub / mock",
        "m": "A fake stand-in used during testing, so you can test one thing without needing the real other thing.",
        "p": "a crash-test dummy. Not a real person — but good enough to test the airbag safely.",
        "note": "a stand-in is in place, so anything that looks like it works may only be the stand-in working. Ask what it takes to put the real thing in, and when."
      },
      {
        "t": "Stack",
        "m": "The whole set of technologies a project is built from, top to bottom.",
        "p": "the full list of ingredients and equipment behind the restaurant — not one dish, the entire operation.",
        "note": "it is listing the main tools the project is built from. Worth writing down once, because it decides who can help you later."
      },
      {
        "t": "Endpoint / route",
        "m": "A specific address inside your product that does a specific thing.",
        "p": "a specific counter at the post office — \"this window handles passport renewals.\"",
        "note": "it is naming one address in your product that does one thing. Ask what happens if somebody reaches it who should not."
      }
    ]
  },
  {
    "n": "7",
    "title": "How agents keep themselves honest and out of each other's way",
    "blurb": "As agents do more real work — fixing their own bugs, running things on a schedule, working alongside other agents — a second layer of jargon shows up: not about the code itself, but about the process the agent uses to stay careful. These four ideas come up constantly once an agent is doing real, ongoing work rather than a single one-off task.",
    "terms": [
      {
        "t": "Fix-on-fix review",
        "m": "After an agent fixes a bug, someone — often another agent, deliberately unbiased because it didn't write the fix — reviews the fix itself with fresh eyes, not just the original bug. A repair can introduce its own brand-new problems that the original bug never had.",
        "p": "a surgeon who, after finishing an operation, has a second surgeon check the stitches — not because they doubt the diagnosis, but because a repair is its own new thing that can go wrong in its own new ways.",
        "aka": "adversarial review",
        "note": "\"running a fix-on-fix review\" = it's double-checking its own repair, not the original problem. A sign of real care, not a delay."
      },
      {
        "t": "Suppression safety",
        "m": "The rule that decides when something — a notification, a dismissed task, an old alert — is allowed to disappear \"for good\" versus just \"for now.\" Getting this wrong in either direction causes a real problem: too eager and it hides work that still matters; too weak and something that's genuinely finished keeps coming back to bother you.",
        "p": "a spam filter. Too aggressive and it eats real mail; too weak and spam keeps landing. Suppression safety is getting that balance right, on purpose, in a rule you could actually explain out loud.",
        "note": "it checked both failure directions — \"did I hide something I shouldn't have?\" and \"will this keep coming back when it shouldn't?\" — not just one of them."
      },
      {
        "t": "Scheduler contract",
        "m": "The exact rule for when something that repeats on its own — a daily reminder, a nightly check — is and isn't allowed to fire, so it doesn't run twice by accident, skip a day, or fire at the wrong moment.",
        "p": "a train timetable. The \"contract\" is the precise departure rule — not \"sometime in the morning\" but \"8:02am, once, by the local clock, not some other clock.\" State the rule loosely and you get two trains at once, or none.",
        "aka": "time-boundary design",
        "note": "it's being precise about a repeating job's exact boundary — which clock it's using, what counts as \"already ran today,\" what happens if it fires a few minutes late."
      },
      {
        "t": "Verification-boundary honesty",
        "m": "Being precise about exactly what an agent actually confirmed versus what it's assuming. \"I watched this work in the real, live system\" is a stronger claim than \"the automated tests passed\" — a careful agent never blurs the two together.",
        "p": "the difference between a chef who tasted the soup themselves and one who only read the recipe and assumes it's right. Both might be telling the truth — but only one actually tasted it, and a good agent always tells you which one it is.",
        "note": "that is the honest, correct thing to say, not a failure. It means the automatic checks passed, but nobody has watched the real thing work yet. Read it as the agent refusing to guess — exactly what you want."
      },
      {
        "t": "Live-proof planning",
        "m": "Deciding, before a change ships, exactly how you're going to go watch the real thing actually work — rather than just trusting that passed checks mean it works.",
        "p": "planning the taste test before you cook, not hoping you'll remember to check afterward.",
        "note": "it's telling you there's a specific, concrete plan for confirming the fix in the real world — not just \"the tests are green, ship it and hope.\""
      },
      {
        "t": "Shared-checkout discipline",
        "m": "The habits that keep multiple agents (or people) working in the same project folder from stepping on each other — especially when the official shared version of the project changes so often that a change can go stale before the safety checks on it even finish.",
        "p": "two chefs sharing one cutting board. If one wipes it clean mid-chop, the other's ingredients go with it. The fix isn't \"work faster\" — it's \"get your own board\" (a separate, isolated copy) for anything that matters.",
        "aka": "high-velocity branch racing",
        "note": "it might be explaining why a merge kept getting rejected and needing a re-sync — \"the shared version moved again while the checks were still running.\" That's not a mistake; it's a busy shared project. The honest fix is either a faster path (turning on auto-merge, so the platform keeps re-syncing on its own) or working in a genuinely separate copy so a concurrent change can't destroy in-progress work."
      }
    ]
  },
  {
    "n": "8",
    "title": "Domains, keys, and the internet plumbing",
    "blurb": "The words that turn up once your thing is real and reachable by other people: giving it an address, keeping your keys safe, and the handful of errors everyone meets on the way. This family hits hardest if you are building somewhere like Lovable, Replit, or Bolt, where your project is on the internet from the first day.",
    "terms": [
      {
        "t": "Domain",
        "m": "The address people type to reach your thing — yourproject.com.",
        "p": "the street address. Your site is the house; the domain is the number on the door.",
        "aka": "domain name",
        "note": "\"pointing the domain\" means connecting the address you bought to the thing you built. Reversible, and nobody sees a broken version while you do it."
      },
      {
        "t": "DNS",
        "m": "The internet's phone book: it turns your domain into the actual location of the machine serving your site.",
        "p": "directory enquiries. You give a name, it gives back a number.",
        "note": "your change is spreading around the world and is not instant. Minutes usually, up to a day at worst. Waiting is the fix, not a sign something failed."
      },
      {
        "t": "HTTPS / SSL certificate",
        "m": "The padlock in the address bar: proof the site is really yours, and that what visitors send is scrambled on the way.",
        "p": "a tamper-proof seal on a bottle. You can see nobody opened it in transit.",
        "note": "almost always automatic now. If it mentions a certificate problem, visitors may see a scary browser warning, so it is worth fixing before you share the link."
      },
      {
        "t": "CORS",
        "m": "A browser rule that stops one website quietly helping itself to another's data. When it is set up wrong, your own two halves cannot talk to each other.",
        "p": "a bouncer with a guest list who simply has not been told your name yet.",
        "note": "routine, and not an attack or a break-in. It is a permissions setting that needs your own address added to a list. Let it fix it. Ask what it opened up to make it work, because the quick fix is opening it to everybody."
      },
      {
        "t": "404",
        "m": "Nothing is at the address that was asked for.",
        "p": "knocking on a door that was never built.",
        "note": "usually a wrong link or a page that moved. Cheap to fix, and it means the server is alive and answering — just not with what you wanted."
      },
      {
        "t": "500 / server error",
        "m": "The server tried and fell over. The problem is on your side, not the visitor's.",
        "p": "the kitchen catching fire rather than the customer ordering something off-menu.",
        "note": "more serious than a 404 because it is your code failing, not a missing page. The logs will say why; that is the agent's job, not yours."
      },
      {
        "t": "Cache",
        "m": "A saved copy kept close by so things load fast — which sometimes means you are shown an old version.",
        "p": "leftovers in the fridge. Quick, but not necessarily today's cooking.",
        "note": "you are looking at yesterday's copy of your own site. Nothing is broken; you are just not seeing the newest version yet. It is also how an agent fools itself: it re-checks, gets the copy from before the change, and reads that as proof the change worked."
      },
      {
        "t": "Webhook",
        "m": "A way for another service to tap your project on the shoulder the moment something happens, instead of your project constantly asking.",
        "p": "giving the delivery company your doorbell, rather than checking the porch every five minutes.",
        "note": "it is wiring up \"when X happens over there, do Y over here\" — a payment landing, a form being filled in."
      },
      {
        "t": "Rate limit",
        "m": "A cap on how many times you may ask another service for something in a given stretch of time.",
        "p": "the free-sample stand. Two each, then come back later.",
        "note": "nothing is broken and nothing is your fault. It is being told to slow down and will wait, or spread the requests out. Ask what a real user sees when they hit the cap: being asked to wait is fine, silently losing their work is not."
      },
      {
        "t": "OAuth",
        "m": "Letting people log in using an account they already have, so you never see or store their password.",
        "p": "showing a passport you already own instead of filling in a whole new form.",
        "aka": "\"sign in with Google\"",
        "note": "this is the safe, boring, correct choice. It means one fewer pile of passwords for you to be responsible for."
      },
      {
        "t": "CDN",
        "m": "A network of servers around the world that keeps copies of your site so it loads quickly wherever someone is.",
        "p": "local warehouses instead of shipping everything from one factory.",
        "aka": "content delivery network, edge, cached at the edge",
        "note": "CDNs hold on to old copies for a few minutes, which is the usual reason your change is live but you still cannot see it. Ask how long before it refreshes."
      }
    ]
  },
  {
    "n": "9",
    "title": "The shapes you'll see (paths, files, and names)",
    "blurb": "Not words exactly — shapes. Your agent will write something like scripts/process-term-suggestion.mjs and carry on as though that explained itself. It does not, and none of it is difficult once somebody tells you how to read it.",
    "terms": [
      {
        "t": "File path",
        "m": "Directions to one exact file, with slashes standing for \"inside\". scripts/process-term-suggestion.mjs means: the file named process-term-suggestion.mjs, which lives inside the folder named scripts.",
        "p": "an address written back to front and squashed together — country, then city, then street, then house.",
        "aka": "path, filepath, directory, folder, src/, slashes",
        "note": "it is telling you precisely which file it touched, which is a good habit, not a demand on you. If it matters, ask \"what did you change in that file?\""
      },
      {
        "t": "File extension",
        "m": "The bit after the last dot, which says what kind of file it is.",
        "p": "the label on a jar. Same shape of jar, completely different contents.",
        "aka": ".js, .mjs, .cjs, .ts, .tsx, .jsx, .json, .md, .yml, .yaml, .toml, .css, .scss, .html, .py, .rb, .go, .rs, .java, .sql, .sh, .lock, .svg, .png",
        "note": "the common ones are worth knowing. .md is notes for humans (this file is one). .json and .yml are settings. .js, .mjs and .ts are instructions the computer runs. .html is a page and .css is how it looks."
      },
      {
        "t": "Dotfile / dotfolder",
        "m": "A file or folder whose name starts with a dot. Almost always settings, and hidden by default.",
        "p": "the paperwork drawer rather than the display shelf. Deliberately out of sight, still important.",
        "aka": ".env, .github, .claude, .gitignore",
        "note": "your computer hides these, which is why you looked and could not find it. .env is the one to be careful with — it usually holds your keys and should never be shared or posted."
      },
      {
        "t": "Root",
        "m": "The top level of your project folder, where the big settings files sit.",
        "p": "the ground floor of a building. Everything else is upstairs, off it.",
        "aka": "of the project",
        "note": "it means the outermost folder, not tucked inside any of the others."
      },
      {
        "t": "package.json",
        "m": "A project's list of ingredients and its list of shortcut commands, in one file.",
        "p": "a recipe card that also notes which shop-bought items you are relying on.",
        "note": "it is usually either adding an outside building block or defining a command like \"start\" or \"test\". Worth a glance when it adds something new."
      },
      {
        "t": "Script",
        "m": "A saved command that does a job in one go, so nobody has to remember the long version.",
        "p": "a labelled button rather than a sequence of switches.",
        "note": "it is triggering a job that was already written down and named, not inventing something new. If it has just written a new one, ask what it does before letting it run against anything real."
      },
      {
        "t": "Backticks / monospace",
        "m": "When your agent puts something in this typeface, it means \"this is an exact literal name — copy it character for character.\"",
        "p": "a name printed in block capitals on a form, to signal it is not a description but the actual thing.",
        "note": "no action needed, but it is a useful signal. Prose you can paraphrase; monospace you should copy exactly."
      },
      {
        "t": "Line reference",
        "m": "A file name, a colon, and a number: index.html:367 means line 367 of that file.",
        "p": "a page-and-line reference in a book, so two people can look at the same sentence.",
        "note": "it is pointing at the exact spot, usually because something went wrong there. Evidence, not homework."
      },
      {
        "t": "A name that only exists in your project",
        "m": "Phrases like surface-state bridge or pre-send echo pass are not industry terms. Somebody working on your project invented them. No dictionary has them and searching online will hand you something unrelated.",
        "p": "a nickname used in one household.",
        "aka": "internal name, codename, our term for it",
        "note": "ask straight out whether this is a standard term or a name from this codebase, and if it is ours, where it is defined and what it does. Agents adopt an invented name confidently after seeing it once, which makes a made-up phrase sound as settled as a real one."
      }
    ]
  },
  {
    "n": "10",
    "title": "Phrases that mean a decision got made for you",
    "blurb": "Most jargon is only unfamiliar. This lot is different. Every phrase here sounds like a progress update and is really a decision your agent already made on your behalf — usually a sensible one, usually taken to keep moving. They matter because these are the choices that end up inside the thing you ship. A \"for now\" that nobody came back to is how a shortcut becomes permanent. You do not need to ban any of it. You need to be able to hear it go past.",
    "terms": [
      {
        "t": "\"Hardcoded for now\"",
        "m": "A specific value typed straight into the code, instead of being looked up or made changeable.",
        "p": "writing today's date on a sign in permanent marker instead of hanging a clock.",
        "aka": "hard-coded, baked in",
        "note": "it is true today and will quietly stop being true later. Worth asking: \"what breaks when that value needs to change, and who changes it?\""
      },
      {
        "t": "\"I mocked that out for now\"",
        "m": "It built a stand-in that behaves like the real thing, so the rest of the work could carry on before the real thing was connected. (Stub / mock in section 5 is the same idea as a noun.)",
        "p": "a film-set kitchen. The taps look perfect. No water.",
        "aka": "mocked out, stubbed it out, placeholder data, dummy data, fake data",
        "note": "what you are looking at is not connected to anything real, however finished it looks. Ask \"is this real data yet?\" before you show it to anyone who matters."
      },
      {
        "t": "\"I'll add tests later\"",
        "m": "It wrote the working code but not the automatic checks that prove the code keeps working.",
        "p": "fitting a smoke alarm and not putting a battery in.",
        "aka": "skipping tests for now, no coverage on that yet",
        "note": "nothing is wrong yet. The cost arrives later, when some future change breaks this and no alarm goes off. A perfectly good answer is \"fine for now — add them before this goes live.\""
      },
      {
        "t": "\"I left a TODO\"",
        "m": "A note it wrote to itself inside the code marking that part as unfinished.",
        "p": "a sticky note on the fridge that only the person who wrote it will ever read.",
        "aka": "FIXME, TODO comment, a note in the code",
        "note": "it has flagged its own loose end honestly, which is good — but nothing will ever remind either of you again. Ask for the list: \"what TODOs are open right now?\""
      },
      {
        "t": "\"I commented it out\"",
        "m": "It turned some code off by marking it as a note, so the computer skips it, rather than deleting it.",
        "p": "not throwing the ingredient away — just leaving it out of the recipe and keeping the jar in the cupboard.",
        "aka": "disabled it, left it in but switched off",
        "note": "something that used to happen no longer happens. One question covers it: \"what stopped working when you did that, and was that on purpose?\""
      },
      {
        "t": "\"It's a workaround\"",
        "m": "Something that works without fixing what actually caused the problem.",
        "p": "a bucket under the leak. The floor stays dry. The roof is still broken.",
        "aka": "a hack, a band-aid, a quick fix, a patch job",
        "note": "it is being straight with you, which is worth encouraging. Ask \"what's the real fix, and how long would it take?\" — then decide. Sometimes the bucket genuinely is the right call."
      },
      {
        "t": "\"I added a package for that\"",
        "m": "Rather than writing the code itself, it borrowed working code written by strangers. (See Library / package / dependency in section 5.)",
        "p": "buying a ready-made part instead of machining one. Faster, and now you depend on whoever makes it.",
        "aka": "pulled in a dependency, installed a library",
        "note": "usually the right call. Occasionally a very large tool has been brought in to do a very small job. Fair question: \"how big is it, and how many people rely on it?\""
      },
      {
        "t": "\"It handles the happy path\"",
        "m": "It works when everything goes as expected, and has not been taught what to do when things don't.",
        "p": "a recipe written on the assumption you will never drop an egg.",
        "aka": "happy path only, works in the normal case",
        "note": "real people find the unhappy paths within a day — empty fields, lost connections, the same button pressed twice. Ask \"what does someone see when it goes wrong?\""
      },
      {
        "t": "\"I'm swallowing the error\"",
        "m": "When something goes wrong at that spot, the code hides the complaint and carries on instead of reporting it.",
        "p": "a smoke alarm unplugged because the beeping was annoying.",
        "aka": "catching and ignoring it, failing silently",
        "note": "this is the shortcut most likely to cost you later, because breakage stops being visible — silence starts meaning nothing at all rather than nothing wrong. Reasonable push-back: \"I'd rather it told us. Can we at least write it down somewhere?\""
      },
      {
        "t": "\"I turned off the check\"",
        "m": "A warning kept appearing, so it switched the warning off rather than resolving what caused it.",
        "p": "the seatbelt chime stops. Nobody put a seatbelt on.",
        "aka": "disabled the linter, added an ignore, silenced the warning, used any",
        "note": "sometimes the tool was wrong and muting it is correct. Sometimes the tool was right. One question separates the two: \"was the warning correct?\" (See also Suppression safety, section 7.)"
      },
      {
        "t": "\"I refactored while I was in there\"",
        "m": "It rearranged code you did not ask it to touch, without changing what that code does.",
        "p": "asking someone to fix the door handle and finding they rearranged the room.",
        "aka": "tidied it up along the way, cleaned a few things up",
        "note": "the intent is good and the risk is real — more changed than you asked for, so more can break. Not a crime. Just say \"keep changes to what I asked for unless you check with me first.\""
      },
      {
        "t": "\"I force-pushed\"",
        "m": "It replaced the saved history of the work with its own version instead of adding to it.",
        "p": "not writing today's diary entry, but tearing out yesterday's page and rewriting it.",
        "aka": "overwrote the history, reset the branch",
        "note": "earlier saved versions may be gone, possibly ones you wanted. Ask immediately: \"did anything get lost, and can you get it back?\" Better still, this is one to catch beforehand — which is exactly what \"is this reversible?\" is for."
      },
      {
        "t": "\"I assumed you wanted\"",
        "m": "It reached a decision, made the decision, and mentioned it afterwards.",
        "p": "a builder who chose the tiles because you weren't answering your phone.",
        "aka": "I went ahead and, I took the liberty of, I figured you'd want",
        "note": "it is showing you a fork in the road you never saw. Nothing rude about walking back to it: \"tell me what you chose and what the other option was.\""
      },
      {
        "t": "\"It's stored in plain text\"",
        "m": "Information saved in a form that anyone who opens the file can simply read.",
        "p": "the alarm code written on the back of the front door.",
        "aka": "unencrypted, in the clear, plaintext",
        "note": "completely fine for a shopping list, not fine for passwords, keys, or anything belonging to someone else. The question that matters: \"would it be bad if a stranger read this?\""
      },
      {
        "t": "\"That should work\"",
        "m": "It has not checked. This is a prediction — often a good one — and it is not a result.",
        "p": "the difference between \"the cake is baked\" and \"the cake should be baked by now.\"",
        "aka": "it ought to be fine, I believe that's fixed",
        "note": "the only follow-up you need is \"did you run it and watch it work?\" A good agent answers honestly, and soon starts volunteering the difference unprompted. (See also Verification-boundary honesty, section 7.)"
      }
    ]
  },
  {
    "n": "11",
    "title": "Talking to and about the agent itself",
    "blurb": "You are managing something that has its own vocabulary for its own limits. Most of the frustrating moments — it forgot, it invented something, it stopped halfway — have dull mechanical explanations, and the words below are those explanations. Learning them turns \"the agent is being stupid\" into \"the agent ran out of room,\" which is a problem you can actually do something about.",
    "terms": [
      {
        "t": "Model",
        "m": "The engine doing the thinking, separate from the app you type into.",
        "p": "the engine in a car. Different cars, same engine available.",
        "aka": "LLM, the model, Sonnet, Opus, GPT",
        "note": "\"try a different model\" means put a different engine on the same job. Often the fix when answers feel shallow."
      },
      {
        "t": "Prompt",
        "m": "What you type, plus everything else the tool quietly sends along with it.",
        "p": "the whole envelope handed over, not just the note you wrote.",
        "note": "\"your prompt was ambiguous\" means your instruction had two readings and it picked one. Ask which two."
      },
      {
        "t": "System prompt",
        "m": "Standing orders the agent reads before it reads anything you type.",
        "p": "the staff handbook, read before the first customer of the day.",
        "aka": "custom instructions, rules file, standing instructions",
        "note": "this is the file you edit to change behavior permanently, instead of repeating yourself every session."
      },
      {
        "t": "Context window",
        "m": "The total amount of text the agent can hold in mind at once, including your conversation and every file it opened.",
        "p": "a desk of fixed size. New paper on means old paper off.",
        "aka": "context, context length, running out of context",
        "note": "\"low on context\" means it is about to forget the earlier part of this conversation. Have it write the decisions into a file before that happens."
      },
      {
        "t": "Token",
        "m": "The unit text gets chopped into before the model reads it, roughly a short word or part of one. Not the same thing as an API token, which is a password.",
        "p": "measuring a recipe in spoonfuls rather than ingredients.",
        "aka": "tokens, token count, token limit, context tokens, token usage",
        "note": "tokens are what you are billed by and what fills the desk. \"Too many tokens\" means too much text, not too complicated."
      },
      {
        "t": "Compaction",
        "m": "When the agent replaces the earlier part of your conversation with a short summary to free up room.",
        "p": "swapping a shelf of notebooks for one index card.",
        "aka": "auto-compact, summarizing the conversation",
        "note": "details you cared about may have just been dropped. Good moment to restate your constraints."
      },
      {
        "t": "Hallucination",
        "m": "The agent stating something confidently that is not true: an invented file, function, setting, or fact.",
        "p": "a confident tour guide describing a room that was never built.",
        "aka": "made it up, confabulation, invented",
        "note": "confidence is not evidence. Ask it to open the file or run the thing."
      },
      {
        "t": "Tool call",
        "m": "The agent doing something rather than saying something: reading a file, running a command, searching.",
        "p": "the difference between telling you what is in the cupboard and walking over to open it.",
        "aka": "function call, using a tool",
        "note": "work with real tool calls behind it can be checked. Work without them is a guess."
      },
      {
        "t": "MCP",
        "m": "A standard way to plug outside tools and data, like your database or your ticket tracker, into an agent.",
        "p": "a USB socket. One shape, many devices.",
        "aka": "Model Context Protocol, MCP server",
        "note": "an MCP server is something you installed and granted access to. Worth knowing exactly what it can reach."
      },
      {
        "t": "Subagent",
        "m": "A helper the main agent starts up to go and do one piece of work on its own.",
        "p": "sending someone on an errand so you can stay on the main job.",
        "aka": "worker, task agent, spawned agent",
        "note": "subagents do not automatically pass on what they learned. Ask what came back, not just whether it finished."
      },
      {
        "t": "Agent loop",
        "m": "The cycle of think, act, look at the result, think again, repeated until the job is done or it gives up.",
        "p": "cooking while tasting, rather than following a recipe blind.",
        "aka": "the loop, agentic, iterating",
        "note": "loops can spin. If it has tried the same fix three times, stop it and change the instruction instead."
      },
      {
        "t": "Harness",
        "m": "The program wrapped around the model that gives it tools, memory, and rules. Your coding tool is a harness.",
        "p": "the model is the engine. The harness is the rest of the car.",
        "aka": "scaffold, agent framework, the tool",
        "note": "the same model behaves very differently in different harnesses. If quality changed and you did not change models, the harness changed."
      },
      {
        "t": "Non-deterministic",
        "m": "Ask the identical question twice and you can get two different answers.",
        "p": "two competent cooks, one recipe, two slightly different dinners.",
        "aka": "same prompt different answer, variance",
        "note": "\"it worked when I ran it\" is not proof that it always works. Have it run the check twice."
      }
    ]
  },
  {
    "n": "12",
    "title": "The command line and the tools underneath",
    "blurb": "Sooner or later your agent will hand you something that looks like a spell and ask you to run it, or tell you a command failed. None of this is deep. It is a very literal clerk taking typed orders. These are the words that turn \"it failed\" into a sentence you can read.",
    "terms": [
      {
        "t": "Terminal",
        "m": "A window where you type instructions to the computer as text instead of clicking.",
        "p": "texting the computer rather than pointing at it.",
        "aka": "command line, shell, console, bash, zsh",
        "note": "\"run this in your terminal\" means paste one line and press enter. Read it first. You are the one authorizing it."
      },
      {
        "t": "Command",
        "m": "One typed instruction: usually a tool name, then what you want it to do.",
        "p": "\"taxi, airport.\" Who, then what.",
        "aka": "CLI, command-line tool, run this",
        "note": "the first word is the tool. If the error says that word was not found, the tool is not installed."
      },
      {
        "t": "Flag",
        "m": "An extra word on a command that changes how it behaves. Flags also decide how much a command really did: --noEmit tells the type checker to inspect the code and write no files at all.",
        "p": "ordering coffee, then \"decaf, no sugar.\"",
        "aka": "option, switch, argument, --force, --noEmit, command-line flag",
        "note": "flags containing force or hard usually mean \"do it even if it destroys something\" - ask what gets destroyed. The rest of the time the flags tell you what was actually tested, and tsc --noEmit builds nothing, so \"0 errors\" from it says nothing about whether the app builds or runs."
      },
      {
        "t": "Package manager",
        "m": "The thing that downloads and installs the outside code your project depends on.",
        "p": "a grocery delivery service for parts you did not build.",
        "aka": "npm, pip, yarn, pnpm, Homebrew, brew",
        "note": "installing is not free. Each new package is more code you now depend on and cannot see."
      },
      {
        "t": "Install",
        "m": "Fetching a tool or package onto the machine so it can be used.",
        "p": "stocking the pantry before cooking.",
        "aka": "npm install, pip install",
        "note": "\"just install X\" adds a permanent dependency. Usually fine, but you should know you added it."
      },
      {
        "t": "Lockfile",
        "m": "A file recording the exact versions of everything installed, so the next machine gets an identical set.",
        "p": "not just flour, but the brand, the size, and the batch.",
        "aka": "package-lock.json, yarn.lock, pnpm-lock.yaml",
        "note": "do not let it delete this to make an error go away. It is the reason the project works the same on someone else's computer."
      },
      {
        "t": "Runtime",
        "m": "The program that actually runs your code.",
        "p": "the record player. Your code is the record.",
        "aka": "Node, Node.js, Python, Deno, Bun, version",
        "note": "most \"works on my machine\" problems are two people holding different versions of the runtime."
      },
      {
        "t": "Process",
        "m": "One running copy of a program, right now.",
        "p": "one oven that happens to be switched on.",
        "aka": "running, PID, kill it, stop the server",
        "note": "\"kill the process\" means stop that running copy. It does not delete anything you wrote."
      },
      {
        "t": "Port",
        "m": "A numbered door on your computer where a running program listens.",
        "p": "one building, numbered doors. Two deliveries cannot use the same door at once.",
        "aka": "localhost:3000, port 8080, port already in use",
        "note": "\"port already in use\" almost always means an older copy is still running. Stop that, then start again."
      },
      {
        "t": "Exit code",
        "m": "The number a command leaves behind to say whether it worked. Zero means fine. Anything else means it did not.",
        "p": "a thumbs up, or a specific complaint.",
        "aka": "exit status, returned 1, non-zero",
        "note": "\"exited non-zero\" means the step failed, even if plenty of text scrolled past looking busy."
      },
      {
        "t": "Container",
        "m": "Your app packed up with everything it needs to run, so it behaves the same anywhere.",
        "p": "a shipping container. Same box on a truck, a ship, or a train.",
        "aka": "Docker, image, containerized",
        "note": "containers fix \"works on my machine.\" They also add one more layer to look inside when something breaks."
      },
      {
        "t": "Permission denied",
        "m": "The computer refusing because the account running the command is not allowed to do that.",
        "p": "right key, wrong door.",
        "aka": "EACCES, sudo, access denied",
        "note": "if the offered fix is sudo, that means \"do it as the owner of the whole machine.\" Ask why the normal way was not allowed first."
      },
      {
        "t": "grep",
        "m": "Searching every file at once for a word or a pattern. If your agent says it grepped for something, it means it looked for that text - not that it understood what it found.",
        "p": "Ctrl-F, but across the whole project instead of one page.",
        "aka": "ripgrep, rg, search the codebase",
        "note": "a search shows you where a word appears, not whether the code around it is right. \"I grepped and found nothing\" is only as good as the word searched for; ask which word, and what it concluded from the result."
      },
      {
        "t": "npm run",
        "m": "Your project keeps a list of named commands somebody wrote down in advance. npm run lint and npm run build:validate each run whichever one carries that name.",
        "p": "speed dial for commands.",
        "aka": "run the script, package script, npm run build",
        "note": "ask what the script actually does. The name was chosen by whoever wrote it, so validate can mean a thorough check or almost nothing, and the name alone will not tell you which."
      },
      {
        "t": "Test runner",
        "m": "The program that runs your tests and reports which ones passed. It is not the tests themselves, and it is not your code. It can fail for reasons of its own while the code is fine, and it can report all-clear while the tests check nothing worth checking.",
        "p": "the person invigilating the exam, not the exam.",
        "aka": "Vitest, Jest, the runner, pytest",
        "note": "keep \"the runner had a problem\" and \"the code has a problem\" apart. Both are real, but only one of them gets fixed by changing your product."
      },
      {
        "t": "Worker pool",
        "m": "Tests are usually split across several copies of the runner going at once so they finish sooner. The pool is that set of copies. Starting them all up takes memory, and on a busy machine some can fail to start at all.",
        "p": "opening six checkouts instead of one. Faster, until you cannot staff them all.",
        "aka": "workers, parallel workers, thread pool, worker-pool",
        "note": "a startup problem in the pool is a machine problem rather than a code problem - but that has to be shown, not asserted. The way to show it is the same tests passing on a quiet machine and in the shared build."
      }
    ]
  },
  {
    "n": "13",
    "title": "Who is allowed in (logins, permissions, personal data)",
    "blurb": "Mistakes in this area are expensive and quiet. Nothing here is complicated, but the gap between two similar-sounding words is often the gap between \"only you can see your data\" and \"anyone can see everyone's.\" If you read one section closely, read this one.",
    "terms": [
      {
        "t": "Authentication vs authorization",
        "m": "Authentication is proving who you are. Authorization is what you are then allowed to do.",
        "p": "the ID check at the door, then the wristband that says which rooms.",
        "aka": "authn, authz, auth",
        "note": "\"auth is done\" is ambiguous. Ask which one. Logging in working does not mean permissions work."
      },
      {
        "t": "Session",
        "m": "The record that keeps someone logged in between clicks, so they are not asked every time.",
        "p": "a hand stamp that lets you back in.",
        "aka": "logged in, signed in, session token",
        "note": "ask how long sessions last and what happens on logout. A session that never expires is a key left in the door."
      },
      {
        "t": "Cookie",
        "m": "A small note your app leaves in the browser and reads back later.",
        "p": "a coat-check ticket the browser keeps in its pocket.",
        "aka": "cookies, secure cookie, httpOnly",
        "note": "cookies carrying login information need locking down. Ask whether they are marked secure and http-only."
      },
      {
        "t": "Hashing",
        "m": "Turning a password into scrambled text that cannot be turned back, so you can check it without ever keeping the real one.",
        "p": "keeping a fingerprint instead of a finger.",
        "aka": "hashed, bcrypt, password hash",
        "note": "passwords should be hashed, never encrypted and never stored as typed. If it says it \"stored the password,\" ask directly whether it is hashed."
      },
      {
        "t": "Encryption",
        "m": "Scrambling data so only someone with the key can read it. Unlike hashing, this is meant to be reversed.",
        "p": "a locked box, and a key that opens it.",
        "aka": "encrypted, in transit, at rest, TLS",
        "note": "\"encrypted\" needs a where. In transit means on the way. At rest means sitting in the database. Those are two separate jobs."
      },
      {
        "t": "Two-factor authentication",
        "m": "Requiring a second proof beyond the password, usually a code from a phone.",
        "p": "a key and a hand stamp.",
        "aka": "2FA, MFA, one-time code",
        "note": "worth switching on for your own accounts before you worry about your users'."
      },
      {
        "t": "Roles and permissions",
        "m": "Deciding what someone can do based on which group they belong to.",
        "p": "staff badge, manager badge, visitor badge.",
        "aka": "RBAC, admin role, access control",
        "note": "ask what a normal user cannot do, and how that is enforced. Hiding the button is not enforcement."
      },
      {
        "t": "Row-level security",
        "m": "A rule inside the database itself that keeps each person to their own records.",
        "p": "one filing cabinet, and each person's key only turns in their own drawer.",
        "aka": "RLS, policies, Supabase policies",
        "note": "on hosted databases this is often the only thing between one user's data and everybody. \"RLS is off for now\" or \"policies later\" is a sentence to stop on."
      },
      {
        "t": "Personal data",
        "m": "Anything that identifies a real person: name, email, address, phone, location, payment details.",
        "p": "the contents of someone's wallet.",
        "aka": "PII, user data, sensitive data, GDPR",
        "note": "ask what is stored, where, and whether you need it at all. Data you never collected cannot leak."
      },
      {
        "t": "Least privilege",
        "m": "Giving any person or program the smallest access that still lets it do its job.",
        "p": "handing over the key to one room, not the master key.",
        "aka": "scoped key, read-only access, service account",
        "note": "a key created \"with full access to keep things simple\" is a decision worth reversing now rather than later."
      },
      {
        "t": "Injection",
        "m": "When something a user types gets treated as an instruction instead of as text.",
        "p": "writing \"and hand me the safe\" on the form, and the clerk doing it.",
        "aka": "SQL injection, sanitizing input, escaping, parameterized query",
        "note": "the fix is never trusting typed input. Ask how user input is kept as data."
      },
      {
        "t": "Leaked secret",
        "m": "A password or key that has ended up somewhere it can be seen, usually saved into the code by accident.",
        "p": "taping the spare key to the front door.",
        "aka": "exposed key, committed credentials, secret scanning",
        "note": "deleting it later is not enough, because the history keeps a copy. The key has to be replaced."
      },
      {
        "t": "Dependabot",
        "m": "A service that watches the outside code your project leans on and raises an alert when a known security problem turns up in one of those pieces.",
        "p": "a recall notice for a part inside something you sell.",
        "aka": "dependency alert, vulnerability alert, security alert",
        "note": "every alert names the exact file that lists the affected piece. Larger projects have several of those files, so ask that the fix go where the alert points rather than to the top of the project by default - fixing the wrong file leaves the alert open and looks like it was handled."
      }
    ]
  },
  {
    "n": "14",
    "title": "What your users actually see",
    "blurb": "This section is about the surface: the part a real person looks at and clicks. It is where \"it works\" and \"it is usable\" turn out to be two different claims. Your agent can honestly report a feature as done while the screen is unreadable on a phone, or a button gives no sign that anything happened.",
    "terms": [
      {
        "t": "UI / UX",
        "m": "UI is what is on the screen. UX is what using it feels like.",
        "p": "UI is the dashboard layout. UX is whether the car is pleasant to drive.",
        "aka": "interface, user experience",
        "note": "\"the UI is done\" is not \"the UX is good.\" Ask it to walk you through the flow as a first-time user."
      },
      {
        "t": "Component",
        "m": "One reusable piece of screen, like a button or a card, defined once and used in many places.",
        "p": "a Lego brick. Make it once, click it in anywhere.",
        "aka": "React component, widget, shared component",
        "note": "changing a component changes it everywhere it appears. Ask where else it is used before agreeing to a tweak."
      },
      {
        "t": "Responsive",
        "m": "The layout rearranging itself to fit whatever screen size it is on.",
        "p": "water taking the shape of the glass.",
        "aka": "mobile-friendly, breakpoint, media query",
        "note": "ask it to show you the phone width. Most layout problems only exist on small screens."
      },
      {
        "t": "State",
        "m": "What the screen currently remembers: what you typed, what is selected, whether it is still loading.",
        "p": "a whiteboard beside the form, wiped when you leave the room.",
        "aka": "local state, stale state, out of sync",
        "note": "\"a state issue\" usually means the screen and the truth disagree. Ask which of the two is stale."
      },
      {
        "t": "Loading state",
        "m": "What the user sees while they are waiting.",
        "p": "the kettle light that tells you it is on.",
        "aka": "spinner, skeleton, pending",
        "note": "a button with no loading state gets clicked three times. Worth asking about for anything slow."
      },
      {
        "t": "Empty state",
        "m": "What the screen shows before there is anything in it.",
        "p": "a noticeboard with instructions pinned to it, rather than just bare cork.",
        "aka": "zero state, no data yet",
        "note": "new users only ever see the empty state. It is the first impression and it is usually the last thing built."
      },
      {
        "t": "Error state",
        "m": "What the user sees when something goes wrong.",
        "p": "a sign telling you which door to use, not just a locked door.",
        "aka": "error message, error handling in the interface",
        "note": "ask what the user is told and what they can do next. \"Something went wrong\" is a dead end."
      },
      {
        "t": "Form validation",
        "m": "Checking what someone typed before accepting it.",
        "p": "the clerk pointing at the empty box before taking the form.",
        "aka": "validation, required field, input validation",
        "note": "ask whether it checks on the screen only, or on the server too. Screen-only checks can be skipped by anyone who wants to."
      },
      {
        "t": "Accessibility",
        "m": "Making the thing usable by people with different sight, hearing, or movement.",
        "p": "the ramp beside the steps, built in rather than added on.",
        "aka": "a11y, screen reader, keyboard navigation, contrast",
        "note": "ask two things. Can you do everything with just the keyboard, and does every image have a text description."
      },
      {
        "t": "Assets",
        "m": "The pictures, fonts, icons, and files your app serves alongside the code.",
        "p": "the furniture, as opposed to the building.",
        "aka": "static files, images, fonts, favicon",
        "note": "large unoptimized images are the most common reason a simple page feels slow."
      },
      {
        "t": "Copy",
        "m": "The actual words on the screen: buttons, labels, error messages.",
        "p": "the signage inside a building.",
        "aka": "microcopy, strings, labels, placeholder text",
        "note": "agents write filler copy and filler copy ships. Read every word a user will see before you call it done."
      },
      {
        "t": "Dark mode",
        "m": "A second color scheme for the same interface.",
        "p": "the same room with the lights turned down.",
        "aka": "theme, light mode, color scheme",
        "note": "if it added dark mode, ask it to check contrast in both. Text often becomes unreadable in one of them."
      }
    ]
  },
  {
    "n": "15",
    "title": "Speed, size, and what it costs you",
    "blurb": "Software gets slow and expensive gradually, through choices that each seemed fine at the time. These are the words your agent uses while making one of those choices. You do not need to optimize anything yourself. You need to notice when something has just been decided about your bill or your users' patience.",
    "terms": [
      {
        "t": "Latency",
        "m": "How long something takes to respond, measured from the user's side.",
        "p": "the wait between ordering and the plate arriving.",
        "aka": "response time, lag, slow",
        "note": "averages hide the worst cases. Ask what the slowest requests look like, not the typical one."
      },
      {
        "t": "N+1 query",
        "m": "Asking the database a hundred separate small questions when one question would have done.",
        "p": "walking to the archive a hundred times instead of carrying the whole box back once.",
        "aka": "n plus one, query in a loop, queries in a loop, too many queries, repeated queries",
        "note": "this is the most common reason a page that flew with ten records crawls with a thousand."
      },
      {
        "t": "Database index",
        "m": "An extra lookup table that lets the database find records without reading every row.",
        "p": "the index at the back of a book, versus reading every page.",
        "aka": "index, indexed, add an index",
        "note": "missing indexes are invisible until your data grows. Cheap to add now, painful to discover later."
      },
      {
        "t": "Pagination",
        "m": "Handing out results a page at a time instead of all at once.",
        "p": "serving courses rather than tipping the whole buffet onto the table.",
        "aka": "paging, infinite scroll, limit",
        "note": "a list with no limit works today and falls over once you have real users."
      },
      {
        "t": "Bundle size",
        "m": "How much code the browser must download before your page works.",
        "p": "the weight of the parcel someone has to carry up the stairs.",
        "aka": "bundle, payload, tree shaking",
        "note": "every library it installs adds weight. Ask what the page weighed before and after."
      },
      {
        "t": "Memory leak",
        "m": "The program holding on to things it no longer needs, until it runs out of room and stops.",
        "p": "never emptying the bin. Eventually there is nowhere left to stand.",
        "aka": "leaking memory, growing memory",
        "note": "the tell is something that runs fine for an hour and dies overnight."
      },
      {
        "t": "Timeout",
        "m": "Giving up on something that is taking too long.",
        "p": "hanging up after the phone has rung for two minutes.",
        "aka": "timed out, gave up waiting",
        "note": "raising a timeout hides slowness rather than fixing it. Ask which one it did."
      },
      {
        "t": "Retry",
        "m": "Trying a failed request again, ideally waiting a little longer each time.",
        "p": "knocking again, rather than hammering on the door.",
        "aka": "retries, backoff, exponential backoff",
        "note": "retries with no wait can turn one glitch into an outage. Ask whether there is a pause between attempts and a limit on them."
      },
      {
        "t": "Queue",
        "m": "Putting slow work in a line to be done later, so the user is not left waiting.",
        "p": "a dry cleaner's ticket. You leave, they work, you come back.",
        "aka": "background job, worker, async job",
        "note": "ask what the user sees while it is queued, and what happens if the job fails after they have gone."
      },
      {
        "t": "Cold start",
        "m": "The extra delay the first time something runs after sitting idle.",
        "p": "the first pull of the espresso machine in the morning.",
        "aka": "warm up, serverless cold start",
        "note": "your first visitor of the day gets the slow version. Worth knowing whether that visitor is a customer."
      },
      {
        "t": "Usage-based pricing",
        "m": "Being billed for how much you use rather than a flat fee.",
        "p": "a taxi meter instead of a bus fare.",
        "aka": "pay per request, metered, per-seat, per-token",
        "note": "ask what the bill looks like if usage goes up ten times. Loops and retries multiply cost quietly."
      },
      {
        "t": "Free tier",
        "m": "The amount a paid service lets you use for nothing before it starts charging.",
        "p": "the first few miles included, then the meter starts.",
        "aka": "free plan, quota, credits",
        "note": "ask what happens at the limit. Some services stop and some start charging, and those are very different surprises."
      },
      {
        "t": "Byte",
        "m": "The unit files and data get measured in. A thousand bytes is a kilobyte, a thousand of those a megabyte.",
        "p": "grams and kilograms, but for information.",
        "aka": "bytes, KB, MB, GB, kilobyte, megabyte",
        "note": "useful for one thing - noticing when something is far bigger than it should be. A page that weighs several megabytes will feel slow on a phone."
      }
    ]
  },
  {
    "n": "16",
    "title": "Deciding what gets built",
    "blurb": "These are the words for scope: what is in, what is out, and what counts as finished. With an agent, this is most of your actual job. An agent will build the wrong thing beautifully and it will not tell you that you asked for the wrong thing.",
    "terms": [
      {
        "t": "Scope",
        "m": "The agreed boundary of what a piece of work includes.",
        "p": "the fence around the building site.",
        "aka": "in scope, out of scope, scope creep",
        "note": "\"while I was in there I also...\" is scope creep. Sometimes helpful, always worth knowing about."
      },
      {
        "t": "Requirement",
        "m": "A written statement of what the thing must do, specific enough to check.",
        "p": "the shopping list, not the mood of the meal.",
        "aka": "spec, specification, acceptance criteria",
        "note": "if you cannot check a requirement by looking at something, it is not a requirement yet."
      },
      {
        "t": "MVP",
        "m": "The smallest version worth putting in front of real people.",
        "p": "a working bicycle rather than half a car.",
        "aka": "minimum viable product, v1, first version",
        "note": "the risk is that MVP becomes the reason to skip things that were never optional, like keeping logins safe."
      },
      {
        "t": "Trade-off",
        "m": "Getting one thing by giving up another, on purpose.",
        "p": "a lighter bag, achieved by packing fewer clothes.",
        "aka": "tradeoff, either way",
        "note": "good sign. Ask what the other option was and why it lost. That exchange is the review."
      },
      {
        "t": "Technical debt",
        "m": "Work left undone that costs more to fix the longer it is left.",
        "p": "a borrowed tool you keep meaning to return while the late fee grows.",
        "aka": "tech debt, cutting corners, clean it up later",
        "note": "ask for it in writing, in the project. Debt nobody wrote down is debt nobody pays."
      },
      {
        "t": "Spike",
        "m": "A quick rough build made to answer a question, not to keep.",
        "p": "a cardboard model of the kitchen.",
        "aka": "proof of concept, POC, prototype, throwaway",
        "note": "prototypes ship by accident constantly. Say out loud whether this one is meant to survive."
      },
      {
        "t": "Feature flag",
        "m": "A switch that turns a feature on or off without changing the code.",
        "p": "a light switch for a room you have already wired.",
        "aka": "flag, toggle, gated behind a flag",
        "note": "flags let you release quietly and switch things off fast. Old flags nobody removed become their own mess."
      },
      {
        "t": "Definition of done",
        "m": "The agreed list of what has to be true before work counts as finished.",
        "p": "the checklist taped to the door before you hand over the keys.",
        "aka": "done done, acceptance, checklist",
        "note": "write yours down once. \"Tests pass, works on a phone, no filler text, I have seen it with my own eyes\" beats arguing every time."
      },
      {
        "t": "Assumption",
        "m": "Something treated as true without anyone checking.",
        "p": "building a shelf for a book you never measured.",
        "aka": "assuming, I assumed",
        "note": "ask it to list its assumptions before it starts. This is the cheapest review you will ever get."
      },
      {
        "t": "Backlog",
        "m": "The list of things you have decided to do but have not done.",
        "p": "the in-tray, not the desk.",
        "aka": "todo, issue list, ticket",
        "note": "\"I added it to the backlog\" often means it will not happen. That is fine, as long as you both know it."
      },
      {
        "t": "Rewrite",
        "m": "Throwing the existing version away and building it again.",
        "p": "knocking the house down instead of fixing the roof.",
        "aka": "rewriting from scratch, start over, greenfield",
        "note": "rewrites take longer than the estimate and lose behavior nobody wrote down. Ask what the smallest fix would be first."
      },
      {
        "t": "Blast radius",
        "m": "How much else is affected if this change goes wrong.",
        "p": "how many rooms lose power when you flip one breaker.",
        "aka": "impact, what else this touches",
        "note": "ask this before any change touching logins, payments, or data. It is the question that prevents the worst afternoons."
      },
      {
        "t": "Scoping",
        "m": "Working out how big a job is and where its edges are, before any of it is built.",
        "p": "measuring the room before buying the carpet.",
        "aka": "scope the work, scoping out",
        "note": "scoping is planning. Nothing has run and nothing exists yet, however concrete the description sounds."
      },
      {
        "t": "Unbuilt",
        "m": "Named, described, or designed, but not actually made.",
        "p": "a door drawn on the floor plan and not yet cut into the wall.",
        "aka": "not built yet, unimplemented, planned",
        "note": "watch for summaries that list unbuilt things in the same tone as finished ones. Ask plainly which of these exist and run today."
      }
    ]
  },
  {
    "n": "17",
    "title": "Signs the work was not actually checked",
    "blurb": "The words in every section above are unfamiliar. This lot is worse, because they are familiar. Every line here reads like a finished piece of work, and every one of them can be produced without the work having happened. None of it means your agent is lying to you. It means it is predicting instead of reporting, and predicting is what it falls back on when it has not looked. You are not auditing anything. You are listening for one thing: did it see this, or does it expect this?",
    "terms": [
      {
        "t": "\"It should work now\"",
        "m": "A prediction wearing a result’s clothes. The word \"should\" is the tell — it means the thing never ran.",
        "p": "a cook telling you the dish is delicious without tasting it.",
        "aka": "that should fix it, this ought to, I believe that resolves it",
        "note": "ask \"did you run it, and what did it print?\" Often the answer is no. That is fine, but it changes what you do next."
      },
      {
        "t": "\"I verified it\" with nothing shown",
        "m": "A claim, not evidence. The checking is asserted and never shown, so there is nothing for you to look at.",
        "p": "a receipt with the word \"paid\" written on it by hand.",
        "aka": "confirmed, validated, tested it, double-checked",
        "note": "ask which command it ran and what came back. Verification you cannot see may not have happened."
      },
      {
        "t": "Checking that the code exists, not that it runs",
        "m": "Confirming the change got typed, rather than confirming the change does anything.",
        "p": "checking the light switch is screwed to the wall rather than flipping it.",
        "aka": "the function is there, the file has been updated",
        "note": "\"it is in the file\" is not \"it works.\" Ask for the result of running it."
      },
      {
        "t": "A stale result read as proof",
        "m": "Checking something, getting an answer from before the change, and treating that as confirmation.",
        "p": "reading yesterday's thermometer and announcing today's weather.",
        "aka": "cached, still showing the old value",
        "note": "if a check passes suspiciously fast right after a change, ask whether it could be looking at a cached copy."
      },
      {
        "t": "Confident specifics you cannot find",
        "m": "Precise names — a file, an option, a flag, a version number — produced from memory instead of from looking.",
        "p": "directions given with total confidence to a street that was renamed years ago.",
        "aka": "invented filename, made-up setting, a version that does not exist",
        "note": "the more specific and the more fluent it sounds, the more it is worth checking. Ask it to open the file and show you the line."
      },
      {
        "t": "\"As expected\"",
        "m": "Reporting the prediction rather than the observation. It shows up most when nothing was observed.",
        "p": "a weather forecast filed as a weather report.",
        "aka": "as anticipated, just as I thought",
        "note": "ask what actually happened, in the output's own words."
      },
      {
        "t": "A summary that just repeats the plan",
        "m": "A summary that repeats the plan word for word usually means the outcome was never read — intentions listed back to you in place of results.",
        "p": "a shopping list handed over as a receipt.",
        "aka": "here is what I did, followed by the to-do list",
        "note": "hold the summary against the original plan. If they match word for word, ask what changed along the way. Something always does."
      },
      {
        "t": "The same fix, three times",
        "m": "Repeating near-identical attempts is guessing, not diagnosing.",
        "p": "jiggling a key that was never the right key.",
        "aka": "let me try again, one more attempt, that did not work either",
        "note": "stop it. Make it say what it thinks the cause is, in one sentence, before it touches anything else."
      },
      {
        "t": "Tests that started passing after being edited",
        "m": "The check got moved to fit the code, instead of the code being fixed to satisfy the check.",
        "p": "moving the target after the arrow has landed.",
        "aka": "updated the test, adjusted the assertion, skipped that one",
        "note": "ask which tests changed and why. Sometimes it is right. Often it has just switched off your alarm."
      },
      {
        "t": "A warning that went quiet",
        "m": "The message telling you something was wrong got turned off rather than dealt with.",
        "p": "a piece of tape over the check-engine light.",
        "aka": "suppressed, silenced, added an exception, ignored for now",
        "note": "ask what the warning actually said before it was silenced."
      },
      {
        "t": "Answering an easier question",
        "m": "You ask whether something is safe and you are told what it does. The gap between those two is where the risk sits.",
        "p": "asking whether the bridge will hold and being told the year it was built.",
        "aka": "drifting off the question",
        "note": "repeat your question word for word, once. If the second answer drifts too, it does not know."
      },
      {
        "t": "Talk with no tool calls behind it",
        "m": "Paragraphs of confident description, with nothing in the transcript showing it opened a file or ran a command.",
        "p": "a guided tour of a house, given from the pavement.",
        "aka": "a long explanation with nothing run",
        "note": "work you can check has evidence attached to it. Ask what it actually opened."
      },
      {
        "t": "\"Everything looks good\"",
        "m": "A conclusion with no observation underneath it, and the easiest sentence in the world to produce.",
        "p": "a thumbs up through a closed door.",
        "aka": "all set, we are good, looks fine to me",
        "note": "ask what it checked and what it did not check. The second half of that answer is the useful half."
      },
      {
        "t": "A number with no source",
        "m": "A figure that sounds measured and was actually estimated.",
        "p": "a price quoted with great confidence and no price list in sight.",
        "aka": "about 40% faster, roughly 200ms, most users",
        "note": "ask where the number came from. If it is an estimate, that is fine. It just is not evidence."
      },
      {
        "t": "Scope that quietly shrank",
        "m": "What arrived is narrower than what you asked for, and the narrowing was never announced.",
        "p": "ordering a coat and being handed one sleeve, presented as progress.",
        "aka": "a simplified version, the basic case, just the happy path",
        "note": "ask which part of your original request is not in there yet."
      },
      {
        "t": "An apology followed by the same answer",
        "m": "Agreement without a different result. The correction was accepted socially rather than actually.",
        "p": "a nod, then the same wrong turn.",
        "aka": "you are right, let me correct that, and then nothing changes",
        "note": "ask what specifically it is doing differently this time. If it cannot name the difference, there is not one."
      },
      {
        "t": "Success reported faster than the work could take",
        "m": "A slow job announced as complete almost immediately.",
        "p": "laundry declared dry two minutes after going in.",
        "aka": "done, already finished",
        "note": "ask what it saw that told it the job had finished."
      },
      {
        "t": "\"This is a known issue\"",
        "m": "Handing the problem to the outside world. Sometimes true, and always a convenient place to stop looking.",
        "p": "blaming the weather without going outside.",
        "aka": "that is expected behavior, a limitation of the tool",
        "note": "ask for a link, or for what it would take to be certain. Vague authority is not a diagnosis."
      },
      {
        "t": "Numbers in the same breath that do not agree",
        "m": "A report says five files timed out, then says it re-ran those three files. Both cannot be right. The mismatch usually means the summary was written from memory rather than read off the output.",
        "p": "a receipt where the items do not add up to the total.",
        "note": "read the numbers against each other before you read the conclusion, and ask which figure came from the actual output. A summary that cannot keep its own count straight was not checked against anything."
      },
      {
        "t": "\"Not a code failure\"",
        "m": "A diagnosis handed to you as though it were an observation. The tool reported a failure; the agent decided the cause was somewhere else. The failure is evidence. The cause is a guess until it is shown.",
        "p": "a mechanic saying the warning light is faulty without opening the hood.",
        "note": "ask what would look different if it were a code failure, and whether that was checked. A reasonable conclusion is still a conclusion."
      },
      {
        "t": "The machine gets the blame",
        "m": "The failure is put down to the laptop, the operating system, the network, the build machine - anything outside the code. Sometimes that is true. It is also the only explanation that requires no fix.",
        "p": "\"it is just this old oven\" every time a cake sinks.",
        "note": "ask whether the same step passes anywhere else, on a clean machine or in the shared build. If it was never tried elsewhere, the environment is a theory."
      },
      {
        "t": "A green headline with the failure inside the brackets",
        "m": "The top line says everything passed. The detail in parentheses says part of it did not and was set aside. The headline is the part that gets remembered.",
        "p": "\"Open every day\" on the sign, \"except Tuesday\" underneath in small print.",
        "note": "read the brackets first. If a summary needs a parenthesis to stay true, the number outside it is not the result."
      },
      {
        "t": "A pass earned under different conditions",
        "m": "Something fails, gets re-run another way, passes, and the pass is what gets reported. Running it alone, with more time, or on a quieter machine all change the conditions, so none of them answers the original failure.",
        "p": "failing a test in a noisy hall, passing it alone at home, and reporting the second mark.",
        "note": "ask for the same command, in the same conditions, to pass twice. That is the only re-run that settles anything."
      }
    ]
  }
];
