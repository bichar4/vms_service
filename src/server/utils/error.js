export const errorGeneral = (req,res,next) =>{
    next({
        status:404,
        message:'Bad Route'
    });
};

export const errorWithMessage = (error,req,res,next)=>{
    res.status(error.status).json({
        status:error.status,
        message:error.message
    })
}