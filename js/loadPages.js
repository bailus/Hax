import pages from "./pages"

const files = advancedSettings.pages.files.map( filename => System.import('../pages/'+filename).then( page => pages.add(page.default) ) )

const pagesLoaded = Promise.all(files)

export default pagesLoaded.then( () => pages )