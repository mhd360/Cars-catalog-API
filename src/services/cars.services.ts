import { TCarCreate, TCarPatch } from "../schemas/cars.schemas";
import { prisma } from "../database/prisma";

export class CarsServices {
  async create(body: TCarCreate) {
    return await prisma.cars.create({ data: body });
  }

  async getMany() {
    return await prisma.cars.findMany();
  }

  async getOne(id: number) {
    return await prisma.cars.findFirst({ where: { id } });
  }

  async patch(id: number, body: TCarPatch) {
    return await prisma.cars.update({ where: { id }, data: body });
  }

  async delete(id: number) {
    await prisma.cars.delete({ where: { id } });
  }
}
