import { NextApiRequest, NextApiResponse } from "next";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
};

export default function findAllUsers(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  res.status(200).json([
    {
      id: 1,
      firstName: "Mike",
      lastName: "Rocco",
      fullName: "Mike Rocco",
    },
    {
      id: 2,
      firstName: "Bill",
      lastName: "Gates",
      fullName: "Bill Gates",
    },
  ]);
}
