import mongoose from 'mongoose'
import dotenv from'dotenv'
import colors from'colors'
import products from './data/products.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connecctDB from './config/db.js'

dotenv.config()

connecctDB()

const importData = async () =>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()

        const sampleProducts = products.map(product => {
            return { ...product}
        })

        await Product.insertMany(sampleProducts)
        
        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () =>{
    try{
        await Order.deleteMany()
        await Product.deleteMany()
    

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error){
        console.eroor(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}