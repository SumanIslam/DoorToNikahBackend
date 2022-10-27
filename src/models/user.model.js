const bcrypt = require('bcryptjs');
const userModel = require('../mongoose/user.mongo');

async function saveUser(newUser) {
  try {
		// generating hashed password
		bcrypt.genSalt(10, async (err, salt) => {
			bcrypt.hash(newUser.password, salt, async(err, hash) => {
				if (err) throw err;
				// replace plain password to hashed password
				newUser.password = hash;
        const user = await userModel.create(newUser);
			});
		});
    return newUser;
	} catch(err) {
    console.log(err);
  }
}

async function getUser(id) {
  try {
    return await userModel.findById(id);
  } catch(err) {
    console.log(`Couldn't get user: ${err.message}`);
  }
}

module.exports = {
  saveUser,
  getUser
}