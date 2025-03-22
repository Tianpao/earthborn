/* 这里只是初始化+拉屎的地方 */
global.ebinitxxx = function init(){
const ebconfigpath = "./earthborn";
global.ebconfigpathtemp=ebconfigpath; //配置文件夹
const defaultconfig = `{\n"reset_parents_after_death":"true"\n}`
if(!FilesJS.exists(ebconfigpath)){
    try{ //防止傻逼NullPoniter
    FilesJS.createDirectory(`${ebconfigpath}/playerdata`)
    }catch(e){
        console.log(e)
    }
    JsonIO.write(`${ebconfigpath}/config.json`,JSON.parse(defaultconfig))
    JsonIO.write(`${ebconfigpath}/meta.json`,JSON.parse(`{\n"join_people":0,\n"latest_people":null,\n"latest_people_jointime":null\n}`))
    /* 初始化配置信息 */

}
}