const router = require('express').Router();
const { Material } = require('../models/Material');
router.get('/',(req,res)=>{
    res.send('API must be tested with Postman')
})


router.post('/add', (req, res)=>{
    const materialData = {
        materialCode: req.body.matCode,
        materialName: req.body.matName,
        materialUnitPrice: req.body.matUnitPrice,
        materialStockLevel: req.body.matStockLevel
    }
    console.log(materialData).
    Material.findOne({materialCode: materialData.materialCode}).then(result =>{
        if(result){
            return res.json({ message: `🤷🏻‍♂️ 🚫 Sorry the material code ${materialCode} exits..`})
        }
        Material.create(materialData).then(newRecord => {
            return res.json(newRecord);
        })
        .catch(error => { 
            return res.json({
                message: `❌ Sorry - ${error.message}`
            })
        });
    })
    .catch(error => {
        return res.json({
            message: `❌ Sorry - ${error.message}`
        })
    })

});

router.put('/update/:materialCode', (req, res)=>{
    res.send('Update later')
});

router.delete('/delete/:materialCode', (req, res)=>{
    res.send('Delete Later')
});

module.exports = router;