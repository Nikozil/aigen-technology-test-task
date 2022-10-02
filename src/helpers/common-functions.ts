export const getApiSearchData = (searchData: ISearchData) => {
  const { page, name, id, sort, order, date_start, date_end } = searchData;
  let api_name = name as string | undefined;
  let api_id = id as string | undefined;
  let api_sort = sort as string | undefined;
  let api_order = order as string | undefined;
  let api_date_start = date_start as string | undefined;
  let api_date_end = date_end as string | undefined;

  if (name.length === 0) api_name = undefined;
  if (id.length === 0) api_id = undefined;
  if (id.length > 0) {
    api_name = undefined;
    api_sort = undefined;
    api_date_start = undefined;
    api_date_end = undefined;
  }
  if (api_sort === undefined) {
    api_order = undefined;
  }

  // const apiData = { _page: page, name: 'Документ 1' };
  const apiData = {
    _page: page,
    name_like: api_name,
    id_like: api_id,
    _sort: api_sort,
    _order: api_order,
    date_start_gte: api_date_start,
    date_start_lte: api_date_end,
    date_end_gte: api_date_start,
    date_end_lte: api_date_end,
  };
  return apiData;
};

interface ISearchData {
  page: number;
  name: string;
  id: string;
  sort: undefined | string;
  order: string;
  date_start: string;
  date_end: string;
}
