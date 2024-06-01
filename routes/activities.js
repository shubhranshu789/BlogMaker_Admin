const express = require("express");
const mongoose = require("mongoose");
const router = express.Router()


const jwt = require("jsonwebtoken");
// const requireLogin = require("../middleWares/requireLogin");
// const LOGO = mongoose.model("LOGO")
const ECONOMY = mongoose.model("ECONOMY");
const FINANCIAL = mongoose.model("FINANCIAL");
const TECHNICAL = mongoose.model("TECHNICAL");
const OTHERS = mongoose.model("OTHERS");
const ALLBLOGS = mongoose.model("ALLBLOGS");




// ======================================================================================================================
//for LOGO
router.post('/createEconomy' ,  (req,res) => {
    const {title , desc , pic , link , about} = req.body;
    if(!title || !desc ||!pic || !link || !about) {
        console.log(title,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const blog = new ECONOMY({
        title,
        desc,
        pic:pic,
        link,
        about,
    })

    blog.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))



    const blog2 = new ALLBLOGS({
        title,
        desc,
        pic:pic,
        link,
        about,
    })

    blog2.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))

    
    // res.json('Item added')
})
router.get("/allEconomies" , (req,res) => {
    // console.log(req.merchant._id)
    ECONOMY.find()
    .then(myposts => {
        res.json(myposts)
    })
})
router.delete("/deleteEconomy/:economyid" , async(req , res) => {
    

    ECONOMY.findOne({_id : req.params.economyid}).populate("_id")
    .then((blog) => {
        blog.deleteOne().then(result => {
            return res.json({message : "Blog Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})

// ======================================================================================================================


router.post('/createFinancial' ,  (req,res) => {
    const {title , desc , pic , link , about} = req.body;
    if(!title || !desc ||!pic || !link || !about) {
        console.log(title,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const blog = new FINANCIAL({
        title,
        desc,
        pic:pic,
        link,
        about,
    })

    blog.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))


    const blog2 = new ALLBLOGS({
        title,
        desc,
        pic:pic,
        link,
        about,
    })

    blog2.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))
    // res.json('Item added')
})
router.get("/allFinancial" , (req,res) => {
    // console.log(req.merchant._id)
    FINANCIAL.find()
    .then(myposts => {
        res.json(myposts)
    })
})
router.delete("/deleteFinancial/:id" , async(req , res) => {
    

    FINANCIAL.findOne({_id : req.params.id}).populate("_id")
    .then((blog) => {
        blog.deleteOne().then(result => {
            return res.json({message : "Blog Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})


// ======================================================================================================================

router.post('/createTecnical' ,  (req,res) => {
    const {title , desc , pic , link , about} = req.body;
    if(!title || !desc ||!pic || !link || !about) {
        console.log(title,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const blog = new TECHNICAL({
        title,
        desc,
        pic:pic,
        link,
        about,
    })

    blog.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))

    const blog2 = new ALLBLOGS({
        title,
        desc,
        pic:pic,
        link,
        about,
    })

    blog2.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))
    // res.json('Item added')
})
router.get("/allTechnical" , (req,res) => {
    // console.log(req.merchant._id)
    TECHNICAL.find()
    .then(myposts => {
        res.json(myposts)
    })
})
router.delete("/deleteTecnical/:id" , async(req , res) => {
    

    TECHNICAL.findOne({_id : req.params.id}).populate("_id")
    .then((blog) => {
        blog.deleteOne().then(result => {
            return res.json({message : "Blog Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})

// ======================================================================================================================
router.post('/createOthers' ,  (req,res) => {
    const {title , desc , pic , link , about} = req.body;
    if(!title || !desc ||!pic || !link || !about) {
        console.log(title,desc,pic)
        return res.status(422).json({error : "Please add all the fields"})
    }

    // console.log(req.merchant)
    // return res.json(req.merchant)


    const blog = new OTHERS({
        title,
        desc,
        pic:pic,
        link,
        about,
    })

    blog.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))


    const blog2 = new ALLBLOGS({
        title,
        desc,
        pic:pic,
        link,
        about,
    })

    blog2.save().then((result) => {
        return res.json({blog : result})

    }).catch( err => console.log(err))
    // res.json('Item added')
})
router.get("/allOthers" , (req,res) => {
    // console.log(req.merchant._id)
    OTHERS.find()
    .then(myposts => {
        res.json(myposts)
    })
})
router.delete("/deleteOthers/:id" , async(req , res) => {
    

    OTHERS.findOne({_id : req.params.id}).populate("_id")
    .then((blog) => {
        blog.deleteOne().then(result => {
            return res.json({message : "Blog Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})

// ======================================================================================================================


router.get("/allblogs" , (req,res) => {
    // console.log(req.merchant._id)
    ALLBLOGS.find()
    .then(myposts => {
        res.json(myposts)
    })
})
router.delete("/deletehomeblogs/:id" , async(req , res) => {
    

    ALLBLOGS.findOne({_id : req.params.id}).populate("_id")
    .then((blog) => {
        blog.deleteOne().then(result => {
            return res.json({message : "Blog Deleted"})
        })
        .catch((err) => {
            console.log("error")
        })
    })
})




module.exports = router;