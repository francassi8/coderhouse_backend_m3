import UserDTO from '../dto/User.dto.js';
import PetDTO from "../dto/Pet.dto.js";
import { usersService, petsService } from '../services/index.js';
import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

export const generateUsers = async (numUsers) => {
  const users = [];
  for (let i = 0; i < numUsers; i++) {
    const first_name = faker.person.firstName();
      const last_name = faker.person.lastName();
      const user = UserDTO.getUserInputFrom({
        first_name: first_name,
        last_name: last_name,
        email: first_name + '.' + last_name + '@coder.com',
        password: bcrypt.hashSync('coder123', bcrypt.genSaltSync(10)),
        role: i % 3 === 0 ? 'admin' : 'user',
        pets: [],
      });
      const result = await usersService.create(user);
      users.push(result);
  }
  return users;
};

export const generatePets = async (numPets) => {
    const pets = [];
    for (let i = 0; i < numPets; i++) {
        const pet = PetDTO.getPetInputFrom({
            name: `Mock Pet ${i}`,
            specie: faker.animal.type(),
            birthDate: new Date()}
        );
        const result = await petsService.create(pet);
        pets.push(result);
    }
    return pets;
};

export const generateData = async (numPets, numUsers) => {
    try {
        await generateUsers(numUsers);
        await generatePets(numPets);
      } catch (error) {
        res.status(500).send(error.message);
      }
}