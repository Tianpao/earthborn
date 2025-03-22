/* 这里只是初始化+拉屎的地方 */
const ebconfigpath = "earthborn";global.ebconfigpathtemp=ebconfigpath //配置文件夹
const defaultconfig = `{\n"reset_parents_after_death":"true"\n}`
if(!FilesJS.exists(ebconfigpath)){
    FilesJS.createDirectory(ebconfigpath)
    FilesJS.createDirectory(`${ebconfigpath}/playerdata`)
    /* 初始化配置信息 */
    FilesJS.saveJson(`${ebconfigpath}/config.json`,defaultconfig)
}
