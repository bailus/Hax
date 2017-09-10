import pages from "./pages.js"
import pageData from "../pages/loadAll.js"

pageData.forEach( page => pages.add(page) )

export default pages
