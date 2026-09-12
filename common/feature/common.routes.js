import { Router } from "express";
import { getTableColumns } from 'drizzle-orm'
import { authenticateUser, authorizePermissions } from "#/common/authentication/auth.js";
import * as c from "./common.controller.js";
import * as table from "#/db/schema/index.js";
import { commonCreateSchema, commonUpdateSchema } from "./common.schema.js";

const router = Router({ mergeParams: true });

router.route("/")
  .get((req, res) => c.commonGetController(req, res, table[req.params.table]))
  .post(authenticateUser, authorizePermissions('admin'), (req, res) => c.commonCreateController(req, res, table[req.params.table], commonCreateSchema(table[req.params.table])));

export default router;
