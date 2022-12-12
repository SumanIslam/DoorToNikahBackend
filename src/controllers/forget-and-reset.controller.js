const jwt = require('jsonwebtoken');
const userModel = require('../mongoose/user.mongo');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer')

require('dotenv').config();

const forgetPasswordPOST = async (req, res) => {
  const { email }  = req.body;
  
  try {
    const oldUser = await userModel.findOne({ email: email });

    if(!oldUser) {
      return res.status(400).json({msg: 'Email doesn\'t exist'});
    }
    
    const secret = process.env.JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id}, secret, {
        expiresIn: '5m'
      })

    const link = `http://localhost:5000/v1/api/password/reset-password/${oldUser.id}/${token}`;
    var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'doortonikah.developer@gmail.com',
				pass: 'sseoaiihqlhquzxv',
			},
		});

		var mailOptions = {
			from: 'doortonikah.developer@gmail.com',
			to: email,
			subject: 'Password reset link',
			text: link,
		};

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});

    res.status(200).json({msg: 'Password reset link has been sent to your email address'})
  } catch(err) {
    console.log(err)
  }
}

const resetPasswordGET = async(req, res) => {
  const {id, token} = req.params;
  
  const oldUser = await userModel.findOne({_id: id});

  if(!oldUser) {
    return res.status(400).json({ msg: "Email doesn't exist" });
  }

  const secret = process.env.JWT_SECRET + oldUser.password;

  try{
    const verify = jwt.verify(token, secret);
    res.render('index', { email: verify.email })
  } catch(err) {
    console.log(err);
    res.send('not verified')
  }
}

const resetPasswordPOST = async (req, res) => {
	const { id, token } = req.params;
  const { password, password2 } = req.body;
  console.log(req.params);

  // checking the length of password
	if (password?.length < 6) {
		return res
			.status(400)
			.json({ msg: 'Passwords must be at least 6 characters long' });
	}

  // checking both passwords are correct or not
  if(password !== password2) {
    return res.status(400).json({msg: 'Passwords do not match'});
  }

	const oldUser = await userModel.findOne({ _id: id });

	if (!oldUser) {
		return res.status(400).json({ msg: "Email doesn't exist" });
	}

	const secret = process.env.JWT_SECRET + oldUser.password;

	try {
		const verify = jwt.verify(token, secret);
		const encryptedPasswords = await bcrypt.hash(password, 10);
    const updatedUser = await userModel.updateOne(
      {
        _id: id,
      },
      {
        $set: {
          password: encryptedPasswords,
        }
      }
    )
    // res.status(200).json({msg: 'Passwords has been updated successfully'})
    res.redirect('http://localhost:3000')
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: 'Internal server Error'})
	}
};
const changePasswordPOST = async (req, res) => {
	const { email, oldPassword, newPassword, confirmNewPassword } = req.body;

	// checking the length of password
	if (newPassword?.length < 6) {
		return res
			.status(400)
			.json({ msg: 'Passwords must be at least 6 characters long' });
	}

	// checking both passwords are correct or not
	if (newPassword !== confirmNewPassword) {
		return res.status(400).json({ msg: 'New Password and Confirm New Password do not match' });
	}

	const oldUser = await userModel.findOne({ email: email });

	if (!oldUser) {
		return res.status(400).json({ msg: "Email doesn't exist" });
	}

	try {
		const match = await bcrypt.compare(oldPassword, oldUser.password);
    console.log(match);
    if(match) {
      const encryptedPasswords = await bcrypt.hash(newPassword, 10);
			const updatedUser = await userModel.updateOne(
				{
					email: email,
				},
				{
					$set: {
						password: encryptedPasswords,
					},
				}
			);
			return res.status(200).json({msg: 'Passwords has been updated successfully'})
		} else {
      return res.status(400).json({msg: 'Password doesn\'t match. Please enter correct password'})
    }
	} catch (err) {
		console.log(err);
		res.status(500).json({ msg: 'Internal server Error' });
	}
};



module.exports = {
	forgetPasswordPOST,
	resetPasswordGET,
	resetPasswordPOST,
	changePasswordPOST,
};