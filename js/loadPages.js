import pages from "./pages"
import pageData from "../pages/loadAll.js"

pageData.forEach( page => pages.add(page) )

export default pages