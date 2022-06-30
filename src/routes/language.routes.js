import { Router } from "express";
import { methods as languagecontroller } from "../controllers/languages.controller";
const router = Router()

router.get('/', languagecontroller.getCitys)
router.get('/:id', languagecontroller.getCity)
router.get('/:name', languagecontroller.getCityForName)
router.post('/', languagecontroller.addCity)
router.put('/:id', languagecontroller.updateCity)
router.delete('/:id', languagecontroller.deleteCity)

export default router