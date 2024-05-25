import { prisma } from "../../database/prisma";
import { carCreateBodyListMock } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";

describe("Integration test: get all cars", () => {

  test("should be able to get all cars", async () => {

    await prisma.car.createMany({ data: carCreateBodyListMock})

    const data = await request
      .get("/cars")
      .expect(200)
      .then((response) => response.body);

    expect(data).toHaveLength(2)

    expect(data[0].id).toBeDefined();
    expect(data[0].name).toBe(carCreateBodyListMock[0].name);
    expect(data[0].description).toBe(carCreateBodyListMock[0].description);
    expect(data[0].brand).toBe(carCreateBodyListMock[0].brand);
    expect(data[0].year).toBe(carCreateBodyListMock[0].year);
    expect(data[0].km).toBe(carCreateBodyListMock[0].km);

    expect(data[1].id).toBeDefined();
    expect(data[1].name).toBe(carCreateBodyListMock[1].name);
    expect(data[1].description).toBe(carCreateBodyListMock[1].description);
    expect(data[1].brand).toBe(carCreateBodyListMock[1].brand);
    expect(data[1].year).toBe(carCreateBodyListMock[1].year);
    expect(data[1].km).toBe(carCreateBodyListMock[1].km);
  });
});