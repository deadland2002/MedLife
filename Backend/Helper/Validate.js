const userSchema = require("../Schema/UserSchema.js");
const OtpSchema = require("../Schema/OtpSchema.js");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function VerifyUser(email, pass) {
  try {
    const user = await userSchema.findOne({ Email: email });
    if (!user) return false;
    var pass = await bcrypt.compare(pass, user.Password);
    if (!pass) return false;
    return user;
  } catch (err) {
    console.log("Verify User - ", err);
  }
}

async function SetOtp(email) {
  try {
    const otp = await OtpSchema.findOne({ Email: email });
    const OTP = (Math.floor(1000000 + Math.random() * 9000000)).toString();

    if (!otp) {
      const expireAt = (Date.now() + 1000*60*30).toString();
      await OtpSchema.create({ Email: email ,Otp:OTP,Exp:expireAt});
    }else{
      await OtpSchema.updateOne({ Email: email },{$set:{Otp:OTP}});
    }
  } catch (err) {
    console.log("Generate Otp - ", err);
  }
}

module.exports = {
  // Sign In Function
  SignIn: async (req, res) => {
    try {
      // Destructuring the request for email and password
      const { email, password } = req.body;

      if (email && password) {
        try {
          const user = await VerifyUser(email, password);
          if (user) {
            const secret = process.env.JWTSECRET;
            const token = await JWT.sign(
              {
                Name: user.name,
                Email: user.Email,
                exp: Math.floor(Date.now() / 1000) + 60 * 60,
              },
              secret
            );
            return res.header(200).json({ status: 200 });
          }
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {}
    return res.header(201).json({ status: 401 });
  },

  SignUp: async (req, res) => {
    try {
      const { email, password, phone, fname, sname } = req.body;
      if (email && password && phone && fname && sname) {
        try {
          const saltRound = parseInt(process.env.SALTROUND);
          var pass = await bcrypt.genSalt(saltRound).then((salt) => {
            return bcrypt.hash(password, salt);
          });
          console.log(pass);

          const user = await userSchema.create({
            Email: email,
            FName: fname,
            SName: sname,
            Phone: phone,
            Password: pass,
          });
          if (user) {
            console.log(user);
            return res.header(200).json({ status: 200 });
          } else {
            return res.header(401).json({ status: 404 });
          }
        } catch (err) {
          console.log(err);
        }
      } else {
        return res.header(201).json({ status: 404 });
      }
    } catch (err) {}
    return res.header(201).json({ status: 401 });
  },

  // Sign In Function

  VerifyOtp: async (req, res) => {
    try {
      // Destructuring the request for email and password
      const { email, password, otp } = req.body;
      console.log(req.body);

      if (email && password) {
        try {
          const user = await VerifyUser(email, password);
          if (user && otp) {
            var OTP = await OtpSchema.findOne({ Email:email });
            if (OTP.Otp == otp && OTP.Exp > Date.now()) {
              await userSchema.updateOne({Email:email},{$set:{Verified:true}});
              return res.header(200).json({ status: 200 });
            } else {
              return res.header(200).json({ status: 202 });
            }
          } else if (user) {
            await SetOtp(email);
            return res.header(200).json({ status: 201 });
          } else {
            return res.header(200).json({ status: 203 });
          }
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {}
    return res.header(201).json({ status: 401 });
  },

  Test: (req, res) => {
    res.send(`<form action='/SignIn' method='post'>
      <input type='text' name='email' />
      <input type='text' name='password' />
      <button type='submit'>Submit
      </button>
      </form>  `);
  },
};
