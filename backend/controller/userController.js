import userModel from "../model/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    if (allUsers) {
      return res.status(200).json(allUsers);
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export const addUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
      return res.status(400).json({ message: "Enter all the details" });
    }

    const newUser =new userModel({ name, email, age });
    const savedUser = await newUser.save();
    if (savedUser) {
      return res.status(200).json(savedUser);
    } else {
      return res.status(400).json({ message: "oops something went wrong" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const getSingleData = await userModel.findById(id);
      return res.status(200).json(getSingleData);
    } else {
      return res.status(400).json({ message: "id not ound" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const getUpdatedData = await userModel.findByIdAndUpdate(id, req.body);
      return res.status(200).json(getUpdatedData);
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      const deleteSingleUser = await userModel.findByIdAndDelete(id);
      res.status(200).json({ message: "user has been deleted" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};
