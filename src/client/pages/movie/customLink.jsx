import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = ({href, data}) => {
    return (
        data.map((item, index) => <Link to={`/${href}/${item._id}`} key={item._id}>
            {index > 0 && ", "}
            {item.title}
        </Link> )
    );
}

export default CustomLink;
