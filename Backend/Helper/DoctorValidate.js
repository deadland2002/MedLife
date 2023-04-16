const DoctorSchema = require("../Schema/DoctorSchema.js");
const OtpSchema = require("../Schema/OtpSchema.js");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");


async function VerifyUser(email, pass) {
    try {
      const doc = await DoctorSchema.findOne({ Email: email });
      if (!doc) return false;
      var pass = await bcrypt.compare(pass, doc.Password);
      if (!pass) return false;
      return doc;
    } catch (err) {
      console.log("Verify Doctor - ", err);
    }
  }

  


module.exports = {
    SignIn : async (req,res)=>{
        try {
            // Destructuring the request for email and password
            const { email, password } = req.body;
      
            if (email && password) {
              try {
                const user = await VerifyUser(email, password);
                if (user && user.Verified) {
                  const secret = process.env.JWTSECRET;
                  const token = await JWT.sign(
                    {
                      FName: user.FName,
                      SName: user.SName,
                      Email: user.Email,
                      exp: Math.floor(Date.now() / 1000) + 60 * 60,
                    },
                    secret
                  );
                  return res.header(200).json({ status: 200, token });
                }
              } catch (err) {
                console.log(err);
              }
            }
          } catch (err) {}
          return res.header(201).json({ status: 401 });
    }
}