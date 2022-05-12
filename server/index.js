const express = require("express");
const app = express()
const harrow =require ('./data/Harrow.json')
const heathrow = require('./data/Heathrow.json');
const stratford = require('./data/Stratford.json')

const allCity = {harrow, heathrow, stratford}

app.get("/pharmacies", (req, res)=>{
    res.send(stratford.pharmacies);
});
app.get("/colleges", (req, res)=>{
    res.send(stratford.colleges);
})
app.get("/doctors", (req, res)=>{
    res.send(stratford.doctors);
});
app.get("/hospitals", (req, res)=>{
    res.send(stratford.hospitals);
})

app.get("/:city/pharmacies", (req, res)=>{
    //console.log(req.params.city)
    const city = req.params.city;
    //console.log(allCity[city])
    res.send(allCity[city].pharmacies);
})

app.get("/:city/colleges", (req, res)=>{
    //console.log(req.params.city)
    const city = req.params.city;
    //console.log(allCity[city])
    res.send(allCity[city].colleges);
})
app.get("/:city/doctors", (req, res)=>{
    //console.log(req.params.city)
    const city = req.params.city;
    //console.log(allCity[city])
    res.send(allCity[city].doctors);
})
app.get("/:city/hospitals", (req, res)=>{
    //console.log(req.params.city)
    const city = req.params.city;
    //console.log(allCity[city])
    res.send(allCity[city].pharmacies);
})
app.get("/:city/pharmacies", (req, res)=>{
    //console.log(req.params.city)
    const city = req.params.city;
    //console.log(allCity[city])
    res.send(allCity[city].pharmacies);
})


app.listen(4000, () =>console.log("App London running on port:4000"))