import { PORTFOLIO } from "../../constants/constants";

export default function handler(req, res) {
  res.status(200).json(PORTFOLIO);
}
