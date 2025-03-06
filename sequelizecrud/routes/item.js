import sequelize from '../database/db.js';
import express from 'express';
import { DataTypes } from 'sequelize';
const router = express.Router();
import Item from '../model/model.js';

router.get('/',async(req,res)=>{
    const items = await Item.findAll();
    res.render('index',{items})
})

router.post('/add',async(req,res)=>{
    await Item.create(req.body);
    res.redirect('/')
})

// edit page
router.get('/edit/:id', async(req,res)=>{
    const item = await Item.findByPk(req.params.id);
    res.render('edit',{item})
})

// edit item 
router.post('/update/:id',async(req,res)=>{
    const item = await Item.findByPk(req.params.id);
    await item.update(req.body);
    res.redirect('/');
})

router.post('/delete/:id',async(req,res)=>{
    const item = await Item.findByPk(req.params.id);
    await item.destroy();
    res.redirect('/');

})

export default (router);