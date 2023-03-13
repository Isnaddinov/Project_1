import express from 'express'
import cors from 'cors'
import router from './routers/index.routes'
import { PORT, STORAGE } from './routers/prismaclient.routes'

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(STORAGE))


app.use('/stroyapi', router)



app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);  
})