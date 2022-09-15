import React, { useEffect, useState } from 'react';

const CategoryDropdown = ({ categories, content, setContent }) => {
  const [category, setCategory] = useState('');
  console.log(category);
  //   setContent(content.filter((product) => product.category === category));

  //   useEffect(() => {
  //     setContent(content.filter((product) => product.category === category));
  //   }, []);

  return <></>;
};

export default CategoryDropdown;
