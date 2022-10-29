import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import MainService from '../../services/MainService';
import DepartmentCard from './DepartmentCard';

const index = () => {
  const [departments, setDepartments] = useState<{
    [key: string]: any;
  }>({});
  const UNEXPECTED_ERROR_MSG = 'Please try again later!';

  useEffect(() => {
    fetchDepartmentEvents();
  }, []);

  const fetchDepartmentEvents = () => {
    MainService.getAllDepartmentEvents()
      .then((data) => {
        if (data['success']) {
          let parsedDepartments: any = {};
          data['departmentEvents'].forEach((dept: any) => {
            parsedDepartments[dept['id']] = dept;
          });
          setDepartments(parsedDepartments);
        } else toast.error(data['message']);
      })
      .catch(() => {
        toast.error(UNEXPECTED_ERROR_MSG);
      });
  };
  return (
    <div className="min-h-screen p-4 bg-gray-900">
      <h2 className="my-20 text-5xl font-bold text-center text-white underline title md:text-6xl lg:text-8xl">
        Events
      </h2>
      {/* <div className="flex flex-col mt-10 space-x-4 overflow-auto md:flex-row snap-x snap-mandatory scroll-pl-px hide-scrollbar scroll-smooth justify-evenly flex-nowrap"> */}
      <div className="flex flex-col space-y-10 overflow-auto snap-x snap-mandatory scroll-pl-px scroll-smooth flex-nowrap md:space-x-10 md:block hide-scrollbar whitespace-nowrap">
        {Object.keys(departments).map((dept_id) => (
          <DepartmentCard
            key={dept_id}
            deptName={departments[dept_id]['name']}
            deptDesc={departments[dept_id]['desc']}
            redirectTo={dept_id}
          />
        ))}
      </div>
    </div>
  );
};

export default index;
