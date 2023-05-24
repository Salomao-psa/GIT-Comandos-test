exports.homepage = async (req,res)=>{
    const info={
        title:'Git Comandos',
        description:'Um site estatico sobre Comandos basicos'
    }
    try{
        res.render('index',{info})
    }catch(error){
        console.log(error)
    }
}
//route get
//entendendo git
exports.git =  (req,res)=>{
    const info={
        title:'O que e Git',
        description:'Comprendendo o que é Git e Github'
    }
    try{
        res.render('pages/git.ejs',{info})
    }catch(error){
        console.log(error)
    }
}

//Comandos Git
exports.comandos = async (req,res)=>{
    const info={
        title:'Comandos Git',
        description:'Entendendo os comandos  GIT e como funcionam'
    }
    try{
        res.render('pages/comandos.ejs',{info})
    }catch(error){
        console.log(error)
    }
}