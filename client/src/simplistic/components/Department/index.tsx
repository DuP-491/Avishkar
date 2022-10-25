import React from 'react';
import DepartmentCard from './DepartmentCard';

const index = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-900">
      <h2 className="my-20 text-5xl font-bold text-center text-white underline title md:text-6xl lg:text-8xl">
        Events
      </h2>
      {/* <div className="flex flex-col mt-10 space-x-4 overflow-auto md:flex-row snap-x snap-mandatory scroll-pl-px hide-scrollbar scroll-smooth justify-evenly flex-nowrap"> */}
      <div className="flex flex-col space-y-10 overflow-auto snap-x snap-mandatory scroll-pl-px scroll-smooth flex-nowrap md:space-x-10 md:block hide-scrollbar whitespace-nowrap">
        <DepartmentCard
          deptName="cyberquest"
          deptDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae voluptatibus ipsam eius id eligendi?"
          redirectTo="cyberquest"
        />
        <DepartmentCard
          deptName="powersurge"
          deptDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae voluptatibus ipsam eius id eligendi?"
          redirectTo="powersurge"
        />
        <DepartmentCard
          deptName="nirman"
          deptDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae voluptatibus ipsam eius id eligendi?"
          redirectTo="nirman"
        />
        <DepartmentCard
          deptName="cyberquest"
          deptDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae voluptatibus ipsam eius id eligendi?"
          redirectTo="cyberquest"
        />
        <DepartmentCard
          deptName="powersurge"
          deptDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae voluptatibus ipsam eius id eligendi?"
          redirectTo="powersurge"
        />
        <DepartmentCard
          deptName="nirman"
          deptDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae voluptatibus ipsam eius id eligendi?"
          redirectTo="nirman"
        />
        <DepartmentCard
          deptName="cyberquest"
          deptDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae voluptatibus ipsam eius id eligendi?"
          redirectTo="cyberquest"
        />
        <DepartmentCard
          deptName="powersurge"
          deptDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae voluptatibus ipsam eius id eligendi?"
          redirectTo="powersurge"
        />
        <DepartmentCard
          deptName="nirman"
          deptDesc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas recusandae voluptatibus ipsam eius id eligendi?"
          redirectTo="nirman"
        />
      </div>
    </div>
  );
};

export default index;
