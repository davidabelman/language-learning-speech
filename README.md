Google speech recognition experiment - language learning app
===============================================================

Created in late 2013.

Toy project testing a language learning app using Google Speech recognition.

Very basic javascript coding (my first ever JS project) - please excuse any bugs.

A fully fledged version would allow multiple languages, scenarios, track words mispronounced, allow the user to hide words to increase difficulty level, etc...

The user must be using Google Chrome, and will need to grant permission for the app to use their microphone.	

Structure
------------
* google_speech.js contains Google javascript code.
* chat.js contains most of the logic for the app. At each stage in the conversation, new HTML is added to the page via this javascript code. Conversation data is pulled from a large javascript array. This was created using Google Sheets and a little Python code (not stored in the repo). This code also uses Google Sheets to translate the content into any language, to be used within the mouseover translations.
* dialogues.js contains the conversation structures (generated in Google Sheets as described above). These also include the automatic translations. 
* demo.html contains base HTML page loaded. Javascript used to build the content as the conversation progresses.