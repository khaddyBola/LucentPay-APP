const User = require("../models/User");
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { firstname, lastname, email, user, phn, country, region, pwd } =
    req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  // check for duplicate usernames in the db
  const duplicateUser = await User.findOne({ username: user }).exec();
  if (duplicateUser) return res.sendStatus(409); //Conflict
  const duplicateEmail = await User.findOne({ email: email }).exec();
  if (duplicateEmail) return res.sendStatus(409); //Conflict
  const duplicatePHN = await User.findOne({ phn: phn }).exec();
  if (duplicatePHN) return res.sendStatus(409); //Conflict

  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);

    //create and store the new user
    const result = await User.create({
      firstname: firstname,
      lastname: lastname,
      email: email,
      username: user,
      phn: phn,
      country: country,
      state: region,
      pwd: hashedPwd,
    });

    console.log(result);

    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };
