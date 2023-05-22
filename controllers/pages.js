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