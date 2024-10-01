// import { Request, Response, NextFunction, RequestHandler } from "express";
// import {
//   Request,
//   Response,
//   NextFunction,
//   RequestHandler,
// } from "express-serve-static-core";

// import createHttpError from "http-errors";
// import supabase from "../server";

// const { Request, Response, NextFunction } = require("express");

// @ts-ignore
exports.getProducts = async (req, res, next) => {
  // export const getProducts: RequestHandler = async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) => {
  try {
    res.stats(200).json({"msg": "hello"});
  } catch (error) {
    console.error("Error in getProducts:", error);
    next(error);
  }
};

interface CreateProductBody {
  name: number;
  description: string;
  imagePath: string;
  company: string;
  color: string[];
  category: string[];
}

interface Product {
  id: number;
  name: string;
  description: string;
  company: string;
  image: string;
}
//@ts-ignore
export const createProduct = async (req, res, next) => {
  const { name, description, imagePath, company, color, category } = req.body;

  try {
    res.status(201).json({});
  } catch (error) {
    next(error);
  }
};
//@ts-ignore
export const getProduct = async (req, res, next) => {
  const productId = req.params.productId;

  try {
    // Respond with the product data
    res.status(200).json({});
  } catch (error) {
    next(error);
  }
};
