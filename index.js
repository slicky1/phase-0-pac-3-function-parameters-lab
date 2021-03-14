function introduction (name) {
    return(`Hi, my name is ${name}.`)
    
}
 console.log ( introduction(`Hi, my name is (Josh).`));

 function introductionWithLanguage(name, language) {
     return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
     
 }

 console.log(introductionWithLanguage(`Hi, my name is(Josh) and I am learning to program in (Ember.js).`));

 function introductionWithLanguageOptional(name, language = "JavaScript") {
     return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
     
 }
 
    console.log (introductionWithLanguageOptional(`Hi, my name is (Gracie) and I am learning to program in (JavaScript).`));