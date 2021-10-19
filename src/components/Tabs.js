import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const Tabs = ({ list }) => {
  const [jobs, setJobs] = useState(list);
  const [value, setValue] = useState(0);
  return (
    <>
      <section className='container'>
        <Buttons jobs={jobs} value={value} setValue={setValue} />
        <Info jobs={jobs} value={value} />
      </section>
      <div className='more-info-container'>
        <button className='more-info-btn'>More Info</button>
      </div>
    </>
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
    <>
      <article className='info-container'>
        <h2 className='info-title'>{title}</h2>
        <span className='company-subtitle'>{company}</span>
        <p className='dates'>{dates}</p>
        <div className='duties'>
          {duties.map((duty, index) => {
            return (
              <div key={index} className='duty'>
                <FaAngleDoubleRight className='duty-icon' />
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
};

export default Tabs;
