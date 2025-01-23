import { userData } from "../seed.mjs";

export const findMany = () => {
  const Data = userData();
  return Data;
};

export const create = (req) => {
  try {
    const Data = userData();
    const exitsEmail = Data.find((item) => item.email === req.email);
    if (exitsEmail) {
      return { Message: "This email is already Used", Email: exitsEmail.email };
    }
    const newId = Data.length + 1;
    const newData = [
      {
        id: newId,
        name: req.name,
        lastname: req.lastname,
        email: req.email,
        phone: req.phone,
        walletAddress: req.walletAddress,
        createion_time: new Date(),
        deleted_at: null,
      },
    ];
    Data.push(newData);
    return { Message: "Create new User Success", Data: newData };
  } catch (e) {
    throw new Error(e.message);
  }
};
