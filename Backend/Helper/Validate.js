module.exports = {
  SignIn: async (req,res) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const user = await userSchema.findOne({ Email: email });
        if (user) {
          if (user.Password == password) {
            return res.header(200).send("Found");
          }
        } else {
          return res.header(201).send("no user");
        }
      } catch (err) {}
    }
    return res.header(201).send("invalid");
  },



  SignUp : (req,res)=>{

  },



  Test : (req,res)=>{
    res.send(`<form action='/SignIn' method='post'>
      <input type='text' name='email' />
      <input type='text' name='password' />
      <button type='submit'>Submit
      </button>
      </form>  `);
  }
};
