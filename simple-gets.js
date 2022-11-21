const superagent = require('superagent').agent();

const dotenv = require('dotenv');dotenv.config();



const API_WOV = async(client, message, args) => {
  const obj = await superagent.get(`https://api.wolvesville.com/clans/${process.env.CLAN_ID}/ledger`)
  .set( 'Authorization', process.env.WOV_TOKEN)
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json')
  .catch((err) => {console.log(err)}); 
  console.log ('Commande message clan fait');
  const Clan = await obj.body
  const dons=obj.text 
  console.log(Clan)

  var ORb= /"gold":/g
  var ORf= /,"gems":/g
  const ORDB = dons.search(ORb); const ORDF = dons.search(ORf); var OR1 = dons.slice(ORDB+7, ORDF);

  var Gemmeb= /,"gems":/g
  var Gemmef= /,"playerId"/g
  const GemmeDB = dons.search(Gemmeb); const GemmeDF = dons.search(Gemmef); var Gemme1 = dons.slice(GemmeDB+8, GemmeDF); 

  var Pseudob= /"playerUsername":"/g
  var Pseudof= /","type":"/g
  const PseudoDB = dons.search(Pseudob); const PseudoDF = dons.search(Pseudof); var Pseudo1 = dons.slice(PseudoDB+18, PseudoDF);

  var Typeb= /","type":"/g
  var Typef= /","creationTime"/g
  const TypeDB = dons.search(Typeb); const TypeDF = dons.search(Typef); var Type1 = dons.slice(TypeDB+10, TypeDF);

  var Créeb= /","creationTime"/g
  var Créef= /"},{"id":"/g
  const CréeDB = dons.search(Créeb); const CréeDF = dons.search(Créef); var Crée1 = dons.slice(CréeDB+18, CréeDF-14); var Crée2= dons.slice(CréeDF-13, CréeDF-8);

  console.log(`Pseudo: ${Pseudo1}\nType d'action: ${Type1}\nOr: ${OR1} et gemme: ${Gemme1}\n fais le ${Crée1} à ${Crée2}`)
  


}
API_WOV()