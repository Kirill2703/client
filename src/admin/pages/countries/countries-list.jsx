import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCountries } from '../../../thunks/countriesThunk';

const columns = [
  {
    title: "Name",
    dataIndex: "title",
    sorter: (a, b) => a.title > b.title? 1 : -1,
  },
];
const CountriesList = () => {
  const countries = useSelector((state) => state.countries.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allCountries())
  }, [])
    return (
      <div>
        <h1>Countries</h1>
        <Table columns={columns} rowKey="_id" dataSource={countries} />
      </div>
    );
}

export default CountriesList;
