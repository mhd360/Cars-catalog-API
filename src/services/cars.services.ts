import { TCarCreate, TCarPatch } from "../schemas/cars.schemas";
import { prisma } from "../database/prisma";

export class CarsServices {
  async create(body: TCarCreate) {
    return await prisma.car.create({ data: body });
  }

  async getMany() {
    return await prisma.car.findMany();
  }

  async getOne(id: string) {
    return await prisma.car.findFirst({ where: { id } });
  }

  async patch(id: string, body: TCarPatch) {
    return await prisma.car.update({ where: { id }, data: body });
  }

  async delete(id: string) {
    await prisma.car.delete({ where: { id } });
  }
}
