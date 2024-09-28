// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { RECOMMEND } from "../../constants/constants";

export default function handler(req, res) {
  res.status(200).json(RECOMMEND);
}
