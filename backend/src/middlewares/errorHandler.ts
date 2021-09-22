import { NextFunction, Request, Response } from "express";
import { logger } from "../logger";

export default async function(err, req: Request, res: Response, next: NextFunction) {
  if(err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }

  logger.error(err)

  return res.status(500).json({
    message: "Internal server error"
  })
}