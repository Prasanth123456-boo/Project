export const hello = async (req,res) =>{
    res.send("hello This is mern application")
}

export const hello2 = async (req,res) =>{
    const name = "prasanth"
    const password = "12345"
    res.send({name: name,
    password:password})
   
}