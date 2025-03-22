/* 配置区(JavaLoad+Import+CFB) */
global.unlockClassFilter(Java)
const earthbornapi = global.EarthbornAPI("EarthBorn")

//玩家加入初始化
PlayerEvents.loggedIn(event =>{
    const playername = event.player.name.getString()
    const playerUUID = event.player.getStringUuid()
    const jsonpath = `${earthbornapi.getconfigpath()}/playerdata/${playername}.json`
    test(new Date())
    if(!FilesJS.exists(jsonpath)){
const data = `{\n"name":"${playername}",\n"uuid":"${playerUUID}",\n"jointime":"${new Date()}",\n"parents":{"father":null,"mother":null}\n}`
 FilesJS.writeFile(jsonpath,data)
    }
})


function test(mes){
    console.log("\x1B[32m"+mes+"\x1B[0m")
}