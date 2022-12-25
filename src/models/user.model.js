const bcrypt = require('bcryptjs');
const userModel = require('../mongoose/user.mongo');

// save user to db
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

// get user by id from db
async function getUser(id) {
  try {
    return await userModel.findById(id);
  } catch(err) {
    console.log(`Couldn't get user: ${err.message}`);
  }
}

// get the total user counts
async function getUsersCount() {
  try {
    return await userModel.countDocuments({});
  } catch(err) {
    console.log(err);
  }
}

// make user admin or editor
async function adminPrivilege(email, role) {
  console.log(role);
  try {
    if(role === 'editor') {
      return await userModel.findOneAndUpdate(
				{
					email: email,
				},
				{
					$set: {
						'roles.Editor': 2030,
					},
				},
				{
					upsert: true,
          returnOriginal: false,
				}
			);
    }
    if(role === 'admin') {
      return await userModel.findOneAndUpdate(
				{
					email: email,
				},
				{
					$set: {
						'roles.Admin': 5056,
					},
				},
				{
					upsert: true,
          returnOriginal: false,
				}
			);
    }
    
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
	saveUser,
	getUser,
	getUsersCount,
	adminPrivilege,
	adminPrivilege,
};