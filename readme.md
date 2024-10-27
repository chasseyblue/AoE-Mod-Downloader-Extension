# AoE2 DE Mod downloader Chrome Extension Fork

Reinterpreted into a Chrome Extension for Microsoft Edge for ease of use and allowing on the fly changes by just pasting the mod ID into a text field and clicking the fetch mod button.

Only difference here is a UI based approach as a Chromium Extension.

Fork of alyti's console code: https://gist.github.com/alyti/24459f6e2d5eba2cab10aca27d29470b

# How to Install the Extension:

Developer Mode is required to be switched on in Manage Extensions as it's not a 'published' extension. Source code is supplied.

 1. Download the archive from the releases on the right side of this repositrory. 
 2. Within Windows Explorer:
	 - Right click the AoE2DEModDExt.zip.
	 - Use your favourite Archiving Program to 'Extract to...'
 3. Within Edge:
 4. **Pre-checks:**
	 - Verify that "Developer Mode" switch is enabled.
 5. **Loading the extension:**
	 - Click the 3 dots '...' on the right top corner > Extensions > Manage Extensions.
	 - Click on "Load Unpacked Extension".
	 - Use the OpenFile Dialog to navigate where you extracted the ZIP.
	 - Open the folder so that the directory "images" can be seen.
	 - Click the "Select Folder" button.

# How to use:

1. Pin the extension to appear in the top right of Edge.
2. Login to ageofempires.com. (Authentication is required for mods to be downloaded)
3. Browse the list of mods and add them into your subscriptions.
4. Go to "Mods Subscribed" page, and hover your mouse over the mod. You should see ".../mods/details/00000/" where "00000", is the ID of the mod.
5. Click on the ![image](https://github.com/user-attachments/assets/aeac7fee-8d22-4cae-a077-237fff36ed2f) icon to show the popup.
6. Enter in the ID of the mod you want to download.
7. Download of the mod's zip archive should now appear in your Downloads list.

# Installing mods:

1. Within Windows Explorer, copy the extracted mod folder to: "C:\Users\$user\Games\Age of Empires 2 DE\\$accountID\mods\local".
- Replace $user with your current Windows username.
- Replace $accountID with your current AoE account ID.
- *These will be prefilled when traversing the directories.*


# Screenshot:

![image](https://github.com/user-attachments/assets/8636c540-7826-4262-ae52-34ceaf86806c)


# Credits:
Backend code all credit to: https://gist.github.com/alyti
