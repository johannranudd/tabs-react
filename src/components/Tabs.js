import React, { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// import { useState } from 'react';

const Tabs = ({ list }) => {
  //   const orderedList = list.sort((a, b) => {
  //     if (a.order > b.order) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });

  const [index, setIndex] = useState(0);
  const [newList, setNewList] = useState(list[index]);

  const filterItems = (id) => {
    const newItem = list.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });
    setNewList(newItem[0]);
  };

  return (
    <section className='container'>
      <Companies filterItems={filterItems} list={list} />
      <Info newList={newList} />
    </section>
  );
};

const Companies = ({ list, filterItems }) => {
  return (
    <article className='btn-conainer'>
      {list.map((mapItem, index) => {
        const { id, company } = mapItem;
        return (
          <button key={index} className='btn' onClick={() => filterItems(id)}>
            {company}
          </button>
        );
      })}
    </article>
  );
};

const Info = ({ newList }) => {
  //   console.log(newList);
  const { company, dates, duties, id, order, title } = newList;
  return (
    <article className='info-container'>
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>{dates}</p>
      <div className='duties'>
        {duties.map((duty) => {
          return (
            <div className='duty'>
              <FaAngleDoubleRight />
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
      <button>More Info</button>
    </article>
  );
};

export default Tabs;
