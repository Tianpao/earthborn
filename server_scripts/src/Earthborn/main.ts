/* 配置区(JavaLoad+Import+CFB) */
global.unlockClassFilter(Java)
const earthbornapi = global.EarthbornAPI("EarthBorn")
global.ebinitxxx() //初始化
//玩家加入初始化
PlayerEvents.loggedIn(event =>{
    const playername = event.player.name.getString()
    const playerUUID = event.player.getStringUuid()
    const jsonpath = `${earthbornapi.getconfigpath()}/playerdata/${playername}.json`
    const meta = JSON.parse(JsonIO.readJson(`${earthbornapi.getconfigpath()}/meta.json`).toString())
    if(!FilesJS.exists(jsonpath)){
const data = JSON.parse(`{\n"name":"${playername}",\n"uuid":"${playerUUID}",\n"jointime":"${new Date()}",\n"parents":{"father":null,"mother":null},\n"gender":null,\n"deaths":0\n}`)
meta.join_people += 1
console.log(meta.join_people+"你妈死了")
if(meta.join_people<2){
    data.gender = 0
    JsonIO.write(jsonpath,data) //0为女，1为男
}
JsonIO.write(`${earthbornapi.getconfigpath()}/meta.json`,meta) //复写Meta
    }
})


function test(mes){
    console.log("\x1B[32m"+mes+"\x1B[0m")
}