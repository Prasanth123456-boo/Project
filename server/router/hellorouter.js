import { hello , hello2 } from "../controller/hello.js"
import  express  from "express";

const router  = express.Router();

router.get('/',hello)
router.get('/secondApi',hello2)

export default router;

