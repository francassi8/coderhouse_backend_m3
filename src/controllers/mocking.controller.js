import { generateUsers, generatePets, generateData } from "../utils/mocks.js";

const mockingPets = async (req, res) => {
    const result = await generatePets(req.query.numPets);
      res.send({status:"success",pets:result})
}

const mockingUsers = async (req, res) => {
      const result = await generateUsers(req.query.numUsers);
      res.send({status:"success",users:result})
}

const mockingALLData = async (req,res) => {
    await generateData(req.query.numPets, req.query.numUsers);
    res.send({ status: 'success', message: 'Usuarios y Mascotas Generados' });
}

export default {
    mockingPets,
    mockingUsers,
    mockingALLData
}