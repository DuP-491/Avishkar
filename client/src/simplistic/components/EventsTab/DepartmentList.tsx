import React, { useEffect, useState } from 'react';
import DepartmentCard from './DepartmentCard';
import '../common.css';
import MainService from '../../services/MainService';

/* eslint-disable */
interface DepartmentSelectPropType {
  onDepartmentSelect: (deptId: string, name: string) => void;
}

function Dept({ onDepartmentSelect }: DepartmentSelectPropType) {
  const [departments, setDepartments] = useState([]);

  const fetchDepartmentEvents = () => {
    MainService.getAllDepartmentEvents()
      .then((data) => {
        if (data['success']) {
          setDepartments(data['departmentEvents']);
        } else console.log(data['message']); // Replace with Toast/Alert
      })
      .catch(() => {
        console.log('Please try again later!');
      });
  };

  useEffect(() => {
    fetchDepartmentEvents();
  }, []);

  return (
    <>
      <div className="flex justify-center pt-3">
        <span className="animating-event-title">E</span>
        <span className="animating-event-title">V</span>
        <span className="animating-event-title">E</span>
        <span className="animating-event-title">N</span>
        <span className="animating-event-title">T</span>
        <span className="animating-event-title">S</span>
      </div>
      <div className="flex justify-evenly flex-wrap">
        {departments.map((department) => (
          <DepartmentCard
            onDepartmentSelect={onDepartmentSelect}
            key={department['id']}
            NAME={department['name']}
            ID={department['id']}
          />
        ))}
      </div>
    </>
  );
}

export default Dept;
