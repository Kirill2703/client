import { Table } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCountries } from '../../../thunks/countriesThunk';

const columns = [
  {
    title: "Name",
    dataIndex: "title",
    sorter: (a, b) => a.age - b.age,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
const CountriesList = () => {
  const countries = useSelector((state) => state.countries.countries)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allCountries)
  }, [])
    return (
      <div>
        <h1>Countries</h1>
        <Table columns={columns} dataSource={countries} onChange={onChange} />
      </div>
    );
}

export default CountriesList;
