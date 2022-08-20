// Agreement attraction in Romanian (complex version-all conditions in one)

// Do show progress bar (fine! I give in)

var showProgressBar = true;

// Main shuffleSequence definition
var shuffleSequence = seq(
    'consent',
    'intro',
    'setcounter',
    'shared-intro',
    sepWith("timeoutSep",rshuffle(startsWith('ATTRAGREEADJROMANIAN'),startsWith('filler'))),
    'debrief'
     );

// Using modified controller coded by Ethan Poole (Umass, 2017)
// Disallows use of mouse for responses.
var DS = 'EPDashedAcceptabilityJudgment';

//  Set the Prolific Academic Completion URL
var sendingResultsMessage = "Vă rugăm să aşteptaţi. Răspunsurile dumneavoastră se trimit serverului."; 
var completionMessage = "Mulţumim pentru participare!"; 
var completionErrorMessage = "Eroare în trimiterea răspunsurilor dumneavoastră către server."; 

// Controller settings.
// Parameter settings taken from Staub 2009
var defaults = [
    "EPDashedSentence", {
        mode: 'speeded acceptability',
        display: 'in place',
        blankText: '+',
        wordTime: 1000,
        wordPauseTime: 150
        },
        DS, {randomOrder: false,
        presentHorizontally: true,
        mode: 'speeded acceptability',
        display: 'in place',
        blankText: '+',
        wordTime: 250,
        wordPauseTime: 150,
        timeout: 3000,
        hasCorrect: false,
        q: ''}
];

// Add breaks every 24 items
function modifyRunningOrder(ro)
{
    for (var i = 0; i < ro.length; ++i)
    {
        if (i % 24 == 1
            && i > 23
            && i < 250)
        {
            ro[i].push(new DynamicElement(
                "Message",
                {html: "<p> Vă rugăm să luaţi o mică pauză. Apăsaţi orice tastă când sunteţi gata să începeţi din nou.</p>", transfer: "keypress"},
            true));
            ro[i].push(new DynamicElement(
                "Separator",
                {transfer: 2500, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."},
            true));
        }
    }
    return ro;
}

// Items array.
var items = [
["setcounter", "__SetCounter__", { }],
["timeoutSep", Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

["consent", "Form", {consentRequired: true, html: {include: "consent.html"}}],
["intro", "Form", {consentRequired: true, html: {include: "intro.html"}}],
["debrief", "Form", {consentRequired: true, html: {include: "debrief.html"}}],

['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro1.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro2.html"}}],
['shared-intro', "Form", {consentRequired: false, html: {include: "shared_intro3.html"}}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Hai să exersăm un pic înainte de a începe efectiv."]
                         ]}],
['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Pisicuţele tigrate",as: [['s','sunt'],['k','este']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Cum vi s-a părut? Pur şi simplu alegeţi rapid varianta care vi se pare o continuare mai bună a propoziţiei."],
                           ["p", "Multor vorbitori nativi de limba română li se pare că 'sunt' este o continuare mai firească a fragmentului anterior. Hai să mai exersăm un pic."],
                         ]}],

['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Zambila roz",as: [['s','miros'],['k','miroase']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],
['shared-intro', "EPDashedSentence", {s:"+"}, DS, {s:"Maria şi Ion",as: [['s','sunt'],['k','este']]}, Separator, { transfer: 1500, normalMessage: "", errorMessage: "Timed out. Vă rugăm să răspundeți mai rapid."}],

['shared-intro', Message, {consentRequired: false,
                   html: ["div",
                           ["p", "Bun, gata cu exersatul! Apăsaţi orice tastă când sunteţi gata să începeţi."]
                        ]}],

['shared-intro',"Separator",{transfer: 2500, normalMessage: "Atenţie! Primul fragment de propoziţie din acest set va apărea pe ecran în curând."}],


//// Shared experimental items + fillers
//// 
[["ATTRAGREEADJROMANIAN-matchBN",1], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă copil adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",1], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă copii adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPInterv",1], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă copilul înalt adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",1], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele de lângă copiii înalţi adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",1], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele uriaş de lângă copilul înalt adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",1], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele uriaş de lângă copiii înalţi adesea",as: [['s','au'],['k','are']]}], 
    
[["ATTRAGREEADJROMANIAN-matchBN",2], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă pacient uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",2], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă pacienţi uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPInterv",2], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă pacientul depresiv uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",2], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul de lângă pacienţii depresivi uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",2], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul competent de lângă pacientul depresiv uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",2], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul competent de lângă pacienţii depresivi uneori",as: [['s','au'],['k','are']]}],
    
[["ATTRAGREEADJROMANIAN-matchBN",3], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă călugăr mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",3], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă călugări mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPInterv",3], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă călugărul creştin mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",3], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul de lângă călugării creştini mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",3], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul înţelept de lângă călugărul creştin mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",3], "EPDashedSentence", {s:"+"}, DS, {s:"Preotul înţelept de lângă călugării creştini mereu",as: [['s','au'],['k','are']]}], 
 
[["ATTRAGREEADJROMANIAN-matchBN",4], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă student uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",4], "EPDashedSentence", {s:"+"}, DS, {s:" Profesorul de lângă studenţi uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPInterv",4], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul de lângă studentul masterand uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",4], "EPDashedSentence", {s:"+"}, DS, {s:" Profesorul de lângă studenţii masteranzi uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",4], "EPDashedSentence", {s:"+"}, DS, {s:"Profesorul talentat de lângă studentul masterand uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",4], "EPDashedSentence", {s:"+"}, DS, {s:" Profesorul talentat de lângă studenţii masteranzi uneori",as: [['s','au'],['k','are']]}],

[["ATTRAGREEADJROMANIAN-matchBN",5], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă femeie mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-mismatchBN",5], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă femei mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPInterv",5], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă femeia blondă mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",5], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea de lângă femeile blonde mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",5], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea roşie de lângă femeia blondă mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",5], "EPDashedSentence", {s:"+"}, DS, {s:" Cartea roşie de lângă femeile blonde mereu ",as: [['s','au'],['k','are']]}], 

[["ATTRAGREEADJROMANIAN-matchBN",6], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă cântăreaţǎ mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",6], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă  cântăreţe mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPInterv",6], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă cântăreaţa profesionistǎ mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",6], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara de lângă cântăreţele profesioniste mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",6], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara maronie de lângă cântăreaţa profesionistǎ mereu ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",6], "EPDashedSentence", {s:"+"}, DS, {s:"Vioara maronie de lângă cântăreţele profesioniste mereu ",as: [['s','au'],['k','are']]}], 

[["ATTRAGREEADJROMANIAN-matchBN",7], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă croitoreasă uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",7], "EPDashedSentence", {s:"+"}, DS, {s:" Rochia de lângă croitorese uneori",as: [['s','au'],['k','are']]}],    
[["ATTRAGREEADJROMANIAN-matchDPInterv",7], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia de lângă croitoreasa pricepută uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",7], "EPDashedSentence", {s:"+"}, DS, {s:" Rochia de lângă croitoresele pricepute uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",7], "EPDashedSentence", {s:"+"}, DS, {s:"Rochia albă de lângă croitoreasa pricepută uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",7], "EPDashedSentence", {s:"+"}, DS, {s:" Rochia albă de lângă croitoresele pricepute uneori",as: [['s','au'],['k','are']]}], 

[["ATTRAGREEADJROMANIAN-matchBN",8], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă gospodinǎ uneori ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",8], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă  gospodine uneori ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPInterv",8], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă gospodina veselǎ uneori ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",8], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa de lângă gospodinele vesele uneori ",as: [['s','au'],['k','are']]}],    
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",8], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa trandafirie de lângă gospodina veselǎ uneori ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",8], "EPDashedSentence", {s:"+"}, DS, {s:"Dulceaţa trandafirie de lângă gospodinele vesele uneori ",as: [['s','au'],['k','are']]}],

[["ATTRAGREEADJROMANIAN-matchBN",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă organism uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă organisme uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPInterv",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă organismul viu uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul de lângă organismele vii uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul mic de lângă organismul viu uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",9], "EPDashedSentence", {s:"+"}, DS, {s:"Cuţitul mic de lângă organismele vii uneori",as: [['s','au'],['k','are']]}],

[["ATTRAGREEADJROMANIAN-matchBN",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă animal uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă animale uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPInterv",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă animalul dungat uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul de lângă animalele dungate uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul frumos de lângă animalul dungat uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",10], "EPDashedSentence", {s:"+"}, DS, {s:"Tabloul frumos de lângă animalele dungate uneori",as: [['s','au'],['k','are']]}],
    
[["ATTRAGREEADJROMANIAN-matchBN",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă crustaceu adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă crustacee adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPInterv",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă crustaceul leneş adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul de lângă crustaceele leneşe adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul fin de lângă crustaceul leneş adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",11], "EPDashedSentence", {s:"+"}, DS, {s:"Nisipul fin de lângă crustaceele leneşe adesea",as: [['s','au'],['k','are']]}], 
    
    
[["ATTRAGREEADJROMANIAN-matchBN",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă macrou mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă macrouri mereu",as: [['s','au'],['k','are']]}],
 [["ATTRAGREEADJROMANIAN-matchDPInterv",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă macroul picant mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul de lângă macrourile picante mereu",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul moale de lângă macroul picant mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",12], "EPDashedSentence", {s:"+"}, DS, {s:"Piureul moale de lângă macrourile picante mereu",as: [['s','au'],['k','are']]}],


[["ATTRAGREEADJROMANIAN-matchBN",13], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă hangii mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",13], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă hangiu mereu",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPInterv",13], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă hangiii locali mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",13], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii de lângă hangiul local mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",13], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii gustoşi de lângă hangiii locali mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",13], "EPDashedSentence", {s:"+"}, DS, {s:"Cârnaţii  gustoşi de lângă hangiul local mereu",as: [['s','au'],['k','are']]}], 

 
[["ATTRAGREEADJROMANIAN-matchBN",14], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă eroi mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",14], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă erou mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPInterv",14], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă eroii naţionali mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",14], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii de lângă eroul naţional mereu ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",14], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii solizi de lângă eroii naţionali mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",14], "EPDashedSentence", {s:"+"}, DS, {s:"Buştenii solizi de lângă eroul naţional mereu ",as: [['s','au'],['k','are']]}],
    
[["ATTRAGREEADJROMANIAN-matchBN",15], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă croitori adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",15], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă croitor adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPInterv",15], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă croitorii graşi adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",15], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii de lângă croitorul gras adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",15], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii negri de lângă croitorii graşi adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",15], "EPDashedSentence", {s:"+"}, DS, {s:"Nasturii negri de lângă croitorul gras adesea",as: [['s','au'],['k','are']]}], 
    
[["ATTRAGREEADJROMANIAN-matchBN",16], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă contabili adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",16], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă contabil adesea",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPInterv",16], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă contabilii armeni adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",16], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii de lângă contabilul armean adesea",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",16], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii imenşi de lângă contabilii armeni adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",16], "EPDashedSentence", {s:"+"}, DS, {s:"Sacii imenşi de lângă contabilul armean adesea",as: [['s','au'],['k','are']]}],


[["ATTRAGREEADJROMANIAN-matchBN",17], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă fete adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",17], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă fatǎ adesea",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPInterv",17], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă fetele brunete adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",17], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile de lângă fata brunetǎ adesea",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",17], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile negre de lângă fetele brunete adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",17], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile negre de lângă fata brunetǎ adesea",as: [['s','au'],['k','are']]}], 


[["ATTRAGREEADJROMANIAN-matchBN",18], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă eleve adesea ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",18], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă elevă adesea ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPInterv",18], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă elevele harnice adesea ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",18], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele de lângă eleva harnică adesea ",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",18], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele amabile de lângă elevele harnice adesea ",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",18], "EPDashedSentence", {s:"+"}, DS, {s:"Învăţătoarele amabile de lângă eleva harnică adesea ",as: [['s','au'],['k','are']]}], 
    
[["ATTRAGREEADJROMANIAN-matchBN",19], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele de lângă contabile mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",19], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele de lângă contabilǎ mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPInterv",19], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele de lângă contabilele bogate mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",19], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele de lângă contabila bogată mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",19], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele săracă de lângă contabilele bogate mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",19], "EPDashedSentence", {s:"+"}, DS, {s:"Vânzătoarele săracă de lângă contabila bogată mereu",as: [['s','au'],['k','are']]}], 

[["ATTRAGREEADJROMANIAN-matchBN",20], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ţărănci adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",20], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ţărancă adesea",as: [['s','au'],['k','are']]}],    
[["ATTRAGREEADJROMANIAN-matchDPInterv",20], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ţărăncile tinere adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",20], "EPDashedSentence", {s:"+"}, DS, {s:"Oile de lângă ţăranca tânără adesea",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",20], "EPDashedSentence", {s:"+"}, DS, {s:"Oile grase de lângă ţărăncile tinere adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",20], "EPDashedSentence", {s:"+"}, DS, {s:"Oile grase de lângă ţăranca tânără adesea",as: [['s','au'],['k','are']]}],

[["ATTRAGREEADJROMANIAN-matchBN",21], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele de lângă trupuri mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",21], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele de lângă trup mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPINterv",21], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele de lângă trupurile omeneşti mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",21], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele de lângă trupul omenesc mereu",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",21], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele angelice de lângă trupurile omeneşti mereu",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",21], "EPDashedSentence", {s:"+"}, DS, {s:"Sufletele angelice de lângă trupul omenesc mereu",as: [['s','au'],['k','are']]}],
    

[["ATTRAGREEADJROMANIAN-matchBN",22], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă nevertebrate uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",22], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă nevertebrat uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPInterv",22], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele de lângă nevertebratele albastre uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",22], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele  de lângă nevertebratul albastru uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",22], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele slabe de lângă nevertebratele albastre uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",22], "EPDashedSentence", {s:"+"}, DS, {s:"Mamiferele slabe de lângă nevertebratul albastru uneori",as: [['s','au'],['k','are']]}],

   
[["ATTRAGREEADJROMANIAN-matchBN",23], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă vertebrate adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",23], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă vertebrat adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPInterv",23], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă vertebratele acvatice adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",23], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile de lângă vertebratul acvatic adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",23], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile mari de lângă vertebratele acvatice adesea",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",23], "EPDashedSentence", {s:"+"}, DS, {s:"Macrourile mari de lângă vertebratul acvatic adesea",as: [['s','au'],['k','are']]}], 
    

[["ATTRAGREEADJROMANIAN-matchBN",24], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă mamifere uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchBN",24], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă mamifer uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPInterv",24], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă mamiferele marine uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPInterv",24], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele de lângă mamiferul marin uneori",as: [['s','au'],['k','are']]}],
[["ATTRAGREEADJROMANIAN-matchDPHeadInterv",24], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele blănoase de lângă mamiferele marine uneori",as: [['s','au'],['k','are']]}], 
[["ATTRAGREEADJROMANIAN-mismatchDPHeadInterv",24], "EPDashedSentence", {s:"+"}, DS, {s:"Animalele blănoase de lângă mamiferul marin uneori",as: [['s','au'],['k','are']]}],


//// Fillers
[["filler-twonounspluralcorrectchoice",25], "EPDashedSentence", {s:"+"}, DS, {s:"Fata pe care domnii o",as: [['s','iubesc'],['k','iubeşte']]}],
[["filler-twonounspluralcorrectchoice",26], "EPDashedSentence", {s:"+"}, DS, {s:"Cartea pe care fetele o",as: [['s','citesc'],['k','citeşte']]}],
[["filler-twonounspluralcorrectchoice",27], "EPDashedSentence", {s:"+"}, DS, {s:"Pinguinul pe care copiii îl",as: [['s','privesc'],['k','priveşte']]}],
[["filler-twonounspluralcorrectchoice",28], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica pe care băieţii o",as: [['s','lovesc'],['k','loveşte']]}],
[["filler-twonounspluralcorrectchoice",29], "EPDashedSentence", {s:"+"}, DS, {s:"Veveriţa pe care bărbaţii o",as: [['s','prind'],['k','prinde']]}],
[["filler-twonounspluralcorrectchoice",30], "EPDashedSentence", {s:"+"}, DS, {s:"Lumina pe care oamenii o",as: [['s','văd'],['k','vede']]}],
[["filler-twonounspluralcorrectchoice",31], "EPDashedSentence", {s:"+"}, DS, {s:"Casa pe care contabilii o",as: [['s','construiesc'],['k','construieşte']]}],
[["filler-twonounspluralcorrectchoice",32], "EPDashedSentence", {s:"+"}, DS, {s:"Mingea pe care sportivii o",as: [['s','aleg'],['k','alege']]}],
[["filler-twonounspluralcorrectchoice",33], "EPDashedSentence", {s:"+"}, DS, {s:"Vinul pe care bucătarii îl",as: [['s','beau'],['k','bea']]}],
[["filler-twonounspluralcorrectchoice",34], "EPDashedSentence", {s:"+"}, DS, {s:"Câinele pe care doctorii îl",as: [['s','hrănesc'],['k','hrăneşte']]}],
[["filler-twonounspluralcorrectchoice",35],  "EPDashedSentence", {s:"+"}, DS, {s:"Poemul pe care tinerii îl",as: [['s','spun'],['k','spune']]}],
[["filler-twonounspluralcorrectchoice",36], "EPDashedSentence", {s:"+"}, DS, {s:"Omul pe care animalele îl",as: [['s','îndrăgesc'],['k','îndrăgeşte']]}], 
[["filler-twonounssingularcorrectchoice",37], "EPDashedSentence", {s:"+"}, DS, {s:"Vinurile pe care domnul le",as: [['s','iubesc'],['k','iubeşte']]}], 
[["filler-twonounssingularcorrectchoice",38], "EPDashedSentence", {s:"+"}, DS, {s:"Scrisorile pe care fata le",as: [['s','citesc'],['k','citeşte']]}], 
[["filler-twonounssingularcorrectchoice",39], "EPDashedSentence", {s:"+"}, DS, {s:"Girafele pe care copilul le",as: [['s','privesc'],['k','priveşte']]}], 
[["filler-twonounssingularcorrectchoice",40], "EPDashedSentence", {s:"+"}, DS, {s:"Motanii pe care bunicul îi",as: [['s','adăpostesc'],['k','adăposteşte']]}], 
[["filler-twonounssingularcorrectchoice",41], "EPDashedSentence", {s:"+"}, DS, {s:"Şerpii pe care bărbatul îi",as: [['s','strivesc'],['k','striveşte']]}], 
[["filler-twonounssingularcorrectchoice",42], "EPDashedSentence", {s:"+"}, DS, {s:"Stelele pe care înţeleptul le",as: [['s','urmăresc'],['k','urmăreşte']]}], 
[["filler-twonounssingularcorrectchoice",43], "EPDashedSentence", {s:"+"}, DS, {s:"Barurile pe care pictorul le",as: [['s','construiesc'],['k','construieşte']]}], 
[["filler-twonounssingularcorrectchoice",44], "EPDashedSentence", {s:"+"}, DS, {s:"Păsările pe care colecţionarul le",as: [['s','văd'],['k','vede']]}], 
[["filler-twonounssingularcorrectchoice",45], "EPDashedSentence", {s:"+"}, DS, {s:"Sucurile pe care chelnerul le",as: [['s','beau'],['k','bea']]}], 
[["filler-twonounssingularcorrectchoice",46], "EPDashedSentence", {s:"+"}, DS, {s:"Pisicile pe care doamna le",as: [['s','îngrijesc'],['k','îngrijeşte']]}], 
[["filler-twonounssingularcorrectchoice",47], "EPDashedSentence", {s:"+"}, DS, {s:"Cuvintele pe care preotul le",as: [['s','rostesc'],['k','rosteşte']]}], 
[["filler-twonounssingularcorrectchoice",48], "EPDashedSentence", {s:"+"}, DS, {s:"Câinii pe care pisica îi",as: [['s','urăsc'],['k','urăşte']]}], 
[["filler-coordination",49], "EPDashedSentence", {s:"+"}, DS, {s:"Femeia şi copilul",as: [['s','beau'],['k','bea']]}], 
[["filler-coordination",50], "EPDashedSentence", {s:"+"}, DS, {s:"Doctorul şi bolnavul",as: [['s','plâng'],['k','plânge']]}],
[["filler-coordination",51], "EPDashedSentence", {s:"+"}, DS, {s:"Vulpoiul şi vulpea",as: [['s','sar'],['k','sare']]}],
[["filler-coordination",52], "EPDashedSentence", {s:"+"}, DS, {s:"Găina şi puiul",as: [['s','ciugulesc'],['k','ciuguleşte']]}],
[["filler-coordination",53], "EPDashedSentence", {s:"+"}, DS, {s:"Paharul şi sticla",as: [['s','cad'],['k','cade']]}],
[["filler-coordination",54], "EPDashedSentence", {s:"+"}, DS, {s:"Oboseala şi plictisul",as: [['s','ucid'],['k','ucide']]}],
[["filler-coordination",55], "EPDashedSentence", {s:"+"}, DS, {s:"Iubirea şi prietenia",as: [['s','susţin'],['k','susţine']]}],
[["filler-coordination",56], "EPDashedSentence", {s:"+"}, DS, {s:"Căţelul şi pisica",as: [['s','dorm'],['k','doarme']]}],
[["filler-coordination",57], "EPDashedSentence", {s:"+"}, DS, {s:"Cafeaua şi ceaiul",as: [['s','au'],['k','are']]}],
[["filler-coordination",58], "EPDashedSentence", {s:"+"}, DS, {s:"Trandafirul şi zambila",as: [['s','miros'],['k','miroase']]}],
[["filler-coordination",59], "EPDashedSentence", {s:"+"}, DS, {s:"Cartea şi caietul",as: [['s','sunt'],['k','este']]}],
[["filler-coordination",60], "EPDashedSentence", {s:"+"}, DS, {s:"Papagalul şi băiatul",as: [['s','vorbesc'],['k','vorbeşte']]}],
[["filler-semanticchoice",61], "EPDashedSentence", {s:"+"}, DS, {s:"Lampa de lângă cartea verde ",as: [['s','se aprinde'],['k','se citeşte']]}],
[["filler-semanticchoice",62], "EPDashedSentence", {s:"+"}, DS, {s:"Fetiţa de lângă camera albastră",as: [['s','dansează'],['k','luminează']]}],
[["filler-semanticchoice",63], "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşul de lângă scaunul roşu ",as: [['s','doarme'],['k','se rupe']]}],
[["filler-semanticchoice",64], "EPDashedSentence", {s:"+"}, DS, {s:"Pasărea de lângă masa neagră",as: [['s','cântă'],['k','se pliază']]}],
[["filler-semanticchoice",65], "EPDashedSentence", {s:"+"}, DS, {s:"Măgarul de lângă căţelul maro",as: [['s','rage'],['k','latră']]}],
[["filler-semanticchoice",66], "EPDashedSentence", {s:"+"}, DS, {s:"Papucii de lângă copiii bolnavi",as: [['s','alunecă'],['k','strănută']]}],
[["filler-semanticchoice",67], "EPDashedSentence", {s:"+"}, DS, {s:"Hainele de lângă femeile zâmbăreţe",as: [['s','cad'],['k','vorbesc']]}],
[["filler-semanticchoice",68], "EPDashedSentence", {s:"+"}, DS, {s:"Albinele de lângă portocalele stricate",as: [['s','bâzâie'],['k','miros']]}],
[["filler-semanticchoice",69], "EPDashedSentence", {s:"+"}, DS, {s:"Râul de lângă pădurea frumoasă",as: [['s','curge'],['k','arde']]}],
[["filler-semanticchoice",70], "EPDashedSentence", {s:"+"}, DS, {s:"Urşii de lângă prinţesele minunate ",as: [['s','hibernează'],['k','se căsătoresc']]}],
[["filler-semanticchoice",71], "EPDashedSentence", {s:"+"}, DS, {s:"Florile de lângă sticlele albastre",as: [['s','se ofilesc'],['k','se sparg']]}],
[["filler-semanticchoice",72], "EPDashedSentence", {s:"+"}, DS, {s:"Calculatoarele de lângă copiii năzdrăvani",as: [['s','se strică'],['k','se joacă']]}],
[["filler-onenounplagreement",73], "EPDashedSentence", {s:"+"}, DS, {s:"Iepuraşii fricoşi",as: [['s','se ascund'],['k','se ascunde']]}],
[["filler-onenounplagreement",74], "EPDashedSentence",{s:"+"}, DS, {s:"Cutremurele mari",as: [['s','distrug'],['k','distruge']]}],
[["filler-onenounplagreement",75], "EPDashedSentence",{s:"+"}, DS, {s:"Grădinile japoneze",as: [['s','au'],['k','are']]}],
[["filler-onenounplagreement",76], "EPDashedSentence",{s:"+"}, DS, {s:"Fetele seducătoare",as: [['s','atrag'],['k','atrage']]}],
[["filler-onenounplagreement",77], "EPDashedSentence", {s:"+"}, DS, {s:"Muzicienii creativi ",as: [['s','compun'],['k','compune']]}],
[["filler-onenounplagreement",78], "EPDashedSentence", {s:"+"}, DS, {s:"Rănile sufleteşti ",as: [['s','dor'],['k','doare']]}],
[["filler-onenounplagreement",79], "EPDashedSentence", {s:"+"}, DS, {s:"Paharele colorate",as: [['s','conţin'],['k','conţine']]}],
[["filler-onenounplagreement",80], "EPDashedSentence", {s:"+"}, DS, {s:"Hamsterii curioşi",as: [['s','apar'],['k','apare']]}],
[["filler-onenounplagreement",81], "EPDashedSentence", {s:"+"}, DS, {s:"Elevii cuminţi",as: [['s','doresc'],['k','doreşte']]}],
[["filler-onenounplagreement",82], "EPDashedSentence", {s:"+"}, DS, {s:"Parfumurile franţuzeşti",as: [['s','miros'],['k','miroase']]}],
[["filler-onenounplagreement",83], "EPDashedSentence", {s:"+"}, DS, {s:"Bunicii iubitori",as: [['s','dau'],['k','dă']]}],
 [["filler-onenounplagreement",84], "EPDashedSentence", {s:"+"}, DS, {s:"Cheile verzi",as: [['s','deschid'],['k','deschide']]}],
[["filler-onenounsgagreement",85], "EPDashedSentence", {s:"+"}, DS, {s:"Fata şatenă",as: [['s','se ascund'],['k','se ascunde']]}],
[["filler-onenounsgagreement",86], "EPDashedSentence", {s:"+"}, DS, {s:"Pisica năzdrăvană",as: [['s','sparg'],['k','sparge']]}],
[["filler-onenounsgagreement",87], "EPDashedSentence", {s:"+"}, DS, {s:"Caietul negru",as: [['s','au'],['k','are']]}],
[["filler-onenounsgagreement",88], "EPDashedSentence", {s:"+"}, DS, {s:"Magnetul maro",as: [['s','atrag'],['k','atrage']]}],
[["filler-onenounsgagreement",89], "EPDashedSentence", {s:"+"}, DS, {s:"Pixul albastru",as: [['s','scriu'],['k','scrie']]}],
[["filler-onenounsgagreement",90], "EPDashedSentence", {s:"+"}, DS, {s:"Iepurele alb",as: [['s','sar'],['k','sare']]}],
[["filler-onenounsgagreement",91], "EPDashedSentence", {s:"+"}, DS, {s:"Studentul harnic",as: [['s','muncesc'],['k','munceşte']]}],
[["filler-onenounsgagreement",92], "EPDashedSentence", {s:"+"}, DS, {s:"Femeia misterioasă",as: [['s','dispar'],['k','dispare']]}],
[["filler-onenounsgagreement",93], "EPDashedSentence", {s:"+"}, DS, {s:"Poetul talentat",as: [['s','vorbesc'],['k','vorbeşte']]}],
[["filler-onenounsgagreement",94], "EPDashedSentence", {s:"+"}, DS, {s:"Mâncarea gustoasă",as: [['s','miros'],['k','miroase']]}],
[["filler-onenounsgagreement",95], "EPDashedSentence", {s:"+"}, DS, {s:"Cursul masteral",as: [['s','cuprind'],['k','cuprinde']]}],
[["filler-onenounsgagreement",96], "EPDashedSentence", {s:"+"}, DS, {s:"Bagajul mare",as: [['s','conţin'],['k','conţine']]}]



];



