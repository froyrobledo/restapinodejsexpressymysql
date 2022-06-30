import  express  from "express";
import  morgan  from "morgan";
//routes
import languageRoutes from "./routes/language.routes";
const app = express()

//setings
app.set('port', 4000)

//middlewares
app.use(morgan('dev'))
app.use(express.json())

//rutas
app.use('/api/laguages',languageRoutes)


export default  app