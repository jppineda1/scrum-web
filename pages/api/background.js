import { BACKGROUND } from "../../constants/constants";

export default function handler(req, res) {
  res.status(200).json(BACKGROUND);
}
