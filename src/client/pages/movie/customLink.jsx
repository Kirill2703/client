import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({href, data}) => {
    return data.map((item, index) => (
      <Link to={`/${href}/${item._id}`} key={item._id}>
        {index > 0 && ", "}
        {item.title ? item.title : `${item.name} ${item.surname}`}
      </Link>
    ));
}

export default CustomLink;
