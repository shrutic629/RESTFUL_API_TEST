const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "tryyiuopipoifhkjjkjkljjgfxvvnbnmhjhffdfdfgg";

exports.createuser = async (req, res) => {
  const data = req.body;
  console.log(`>data>>>>`, data);
  const { email } = data;
  const existingUser = await User.findOne({ email: email });
  console.log(`>>> existingUser>>>`, existingUser);
  if (existingUser) {
    res.status(400).json({ message: "User already exist" });
  }
  console.log(`>>>>>>>.`);
  const user = new User(data);
  await user.save();
  res.status(200).json(user);
};

exports.getallUsers = async (req, res) => {
  const user = await User.find();
  res.status(200).json(user);
};

exports.getSingleUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  res.status(200).json(user);
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const user = await User.findByIdAndUpdate(id, data);
  res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findByIdAndDelete(id);
  res.status(200).json(user);
};

exports.signupUser = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400).json("user already exist");
  }

  if (!(name && email && password)) {
    res.status(400).json("all fields are required");
  }

  const data = { name, email, password: hash };
  const user = new User(data);
  await user.save();
  res.status(200).json(user);
};

exports.loginUser = async(req,res)=>{
    const { name, email, password } = req.body;

  if (!(email && password)) {
    return res.status(401).json({ message: "all fields are required" });
  }

  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    return res.status(401).json({ message: "User not found" });
  }

  const match = await bcrypt.compare(password, existingUser.password);
  if (!match) {
    return res.status(401).json({ message: "Invalid password" });
  }

  const token = jwt.sign({ id: existingUser._id }, secret, {
    expiresIn: "15m",
  });

  console.log(`>>>>>>>>token>>>>>>>>>>>>`);

  res.json({ token, existingUser });

}
