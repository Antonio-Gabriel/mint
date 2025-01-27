import axios from 'axios';

export const getPage = async (subdomain: string, path: string) => {
  try {
    const { data, status } = await axios.get(
      `${process.env.API_ENDPOINT}/api/v1/admin/build/static-props`,
      {
        headers: { Authorization: `Bearer ${process.env.ADMIN_TOKEN}` },
        data: {
          subdomain,
          path,
          basePath: process.env.BASE_PATH,
        },
      }
    );
    return { data, status };
  } catch (err: any) {
    const {
      response: { data, status },
    }: { response: { data: any; status: number } } = err;
    return {
      data,
      status,
    };
  }
};
