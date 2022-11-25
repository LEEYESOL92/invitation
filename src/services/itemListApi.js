import { mock } from "../pages/Main/mock";
// const getList = async (params) => {
//   const response = await axios.get(`/${name}/list`, {
//     params,
//   });
//   return response.data;
// };

//샘플데이터

const getList = async () => {
  const response = await mock.item_list;
  return { data: response };
};

const itemListApi = {
  getList
};

export default itemListApi;
