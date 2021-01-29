const franc = require("franc");
const langs = require("langs");
const input = process.argv[2];
const colors = require("colors");

//const langCode = franc('Alle menneske er fødde til fridom');
const langCode = franc(input);
if(langCode === 'und'){
    console.log("SORRY , COULDNT GUESS THAT , PLEASE TRY AGAIN".red);
}else{
    const language = langs.where("3",langCode );
    console.log(`Our best guess is : ${language.name}`.green);
}

