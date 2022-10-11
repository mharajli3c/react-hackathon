import { NextApiRequest, NextApiResponse } from "next";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
};

export default function login(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  res.status(200).json({
    id: 1,
    firstName: "Mike",
    lastName: "Rocco",
    fullName: "Mike Rocco",
  });
}
