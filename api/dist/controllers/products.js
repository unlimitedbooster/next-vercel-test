"use strict";
// import { Request, Response, NextFunction, RequestHandler } from "express";
// import {
//   Request,
//   Response,
//   NextFunction,
//   RequestHandler,
// } from "express-serve-static-core";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.createProduct = exports.getProducts = void 0;
// import createHttpError from "http-errors";
// import supabase from "../server";
// const { Request, Response, NextFunction } = require("express");
// @ts-ignore
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // export const getProducts: RequestHandler = async (
    //   req: Request,
    //   res: Response,
    //   next: NextFunction
    // ) => {
    try {
        res.status(200).json({ "msg": "hello" });
    }
    catch (error) {
        console.error("Error in getProducts:", error);
        next(error);
    }
});
exports.getProducts = getProducts;
//@ts-ignore
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, imagePath, company, color, category } = req.body;
    try {
        res.status(201).json({});
    }
    catch (error) {
        next(error);
    }
});
exports.createProduct = createProduct;
//@ts-ignore
const getProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    try {
        // Respond with the product data
        res.status(200).json({});
    }
    catch (error) {
        next(error);
    }
});
exports.getProduct = getProduct;
