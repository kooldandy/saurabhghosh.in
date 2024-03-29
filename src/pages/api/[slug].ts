import { NextApiRequest, NextApiResponse } from "next";
import {
  homeData,
  aboutData,
  skillsData,
  experienceData,
  notFound,
} from "@utils/site-data";
import { ApiNameEnum } from "@interfaces/index";

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const { slug } = request.query;
    const res = getData(slug as string);
    response.status(200).json(res);
  } catch (err: any) {
    response.status(500).json({ statusCode: 500, message: err.message });
  }
};

const getData = (slug: string | ApiNameEnum) => {
  switch (slug) {
    case ApiNameEnum.HOME:
      return homeData;
    case ApiNameEnum.ABOUT:
      return aboutData;
    case ApiNameEnum.SKILLS:
      return skillsData;
    case ApiNameEnum.EXPERIENCES:
      return experienceData;
    case ApiNameEnum.NOTFOUND:
      return notFound;
    default:
      return null;
  }
};

export default handler;
