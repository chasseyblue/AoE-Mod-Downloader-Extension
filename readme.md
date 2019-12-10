# AoE2 DE Mod downloader bookmarklet

TL;DR:

  1. Make a new bookmark
     * Copy the contents of the snippet above into location field for a new bookmark.
     * Call bookmark whatever you want, I went with `AoE2 DE Mod DL`.
  2. Make sure you are signed into the website (https://ageofempires.com/mods), if you aren't, the API will just reject your request.
    * It's completely free and doesn't care if you own the game on that account.
  3. Navigate to mod of your choice and click the bookmark.
  4. Wait for a bit, the API tends to be slow...
  5. You should get a download popup for mod's archive.
  6. Extract archive into something like `C:\Users\YOUR USERNAME\Games\Age of Empires 2 DE\SOME NUMBERS\mods\local`
    * For example I want x256 techs mod (mod id: 832), I would extract contents of the newly downloaded `aoe_832.zip` into folder `C:\Users\alyti\Games\Age of Empires 2 DE\1212112121212121212\mods\local\aoe_832`.