import express from 'express'
import cors from 'cors'
import router from './routers/index.routes'

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./uploads'))


app.use('/stroyapi', router)



app.listen(9090, () => {
    console.log(`Server is running on port: ${9090}`);  
})