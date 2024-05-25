export class AppError extends Error {
  constructor(public status: number = 400, public message: string) {
    super(message);
  }
};
