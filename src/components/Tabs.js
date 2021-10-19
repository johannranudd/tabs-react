import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Tabs = ({ list }) => {
  const [jobs, setJobs] = useState(list);
  const [value, setValue] = useState(0);
  return (
    <section className='container'>
      <Buttons jobs={jobs} value={value} setValue={setValue} />
      <Info jobs={jobs} value={value} />
    </section>
  );
};

const Buttons = ({ jobs, setValue, value }) => {
  return (
    <article className='btn-container'>
      {jobs.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => setValue(index)}
            className={`btn ${index === value && 'active-btn'}`}
          >
            {item.company}
          </button>
        );
      })}
    </article>
  );
};

const Info = ({ jobs, value }) => {
  const { company, dates, duties, title } = jobs[value];
  return (
    <article className='info-container'>
      <h2>{title}</h2>
      <h3>{company}</h3>
      <p>{dates}</p>
      <div className='duties'>
        {duties.map((duty, index) => {
          return (
            <div key={index} className='duty'>
              <FaAngleDoubleRight />
              <p>{duty}</p>
            </div>
          );
        })}
      </div>
      <button className='more-info-btn'>More Info</button>
    </article>
  );
};

export default Tabs;
