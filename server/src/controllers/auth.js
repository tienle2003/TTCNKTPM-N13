import { StatusCodes } from "http-status-codes";

export const register = async (req, res) => {
  const { name, phone, password } = req.body;
  try {
    if (!name || !phone || !password)
      return res.status(StatusCodes.BAD_REQUEST).json({
        err: true,
        msg: "Missing inputs!",
      });

    
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {}
};
