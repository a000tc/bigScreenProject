import serviceAxios from "../index";


export const getPieInfo = (params) => {
  return serviceAxios({
    url: "/api/charts/getPie",
    method: "get",
    params,
  });
};
export const getCountInfo = (params) => {
  return serviceAxios({
    url: "/api/charts/getCount",
    method: "get",
    params,
  });
};
export const getChannel = (params) => {
  return serviceAxios({
    url: "/api/charts/getChannel",
    method: "get",
    params,
  })
}
export const getRadar = (params) => {
  return serviceAxios({
    url: "/api/charts/getRadar",
    method: "get",
    params,
  })
}
export const getRanking = (params) => {
  return serviceAxios({
    url: "/api/charts/getRanking",
    method: "get",
    params,
  })
} 
export const getStandards = (params) => {
  return serviceAxios({
    url: "/api/charts/getStandards",
    method: "get",
    params,
  })
} 
export const getBarChart = (params) => {
  return serviceAxios({
    url: "/api/charts/getBarChart",
    method: "get",
    params,
  })
}