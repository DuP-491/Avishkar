import React from 'react';
import Card from './Card';
import DividerLine from '../Common/DividerLine';

/* eslint-disable */
/* Images Imports */
import PlaceholderIMG from './Assets/Placeholder.jpg';
import DesignAnchalYadavIMG from './Assets/DesignAnchalYadav.jpeg';
import DesignDarpanMittalIMG from './Assets/DesignDarpanMittal.jpg';
import DesignHardikMittalIMG from './Assets/DesignHardikMittal.jpg';
import DesignKushagraSaxenaIMG from './Assets/DesignKushagraSaxena.jpeg';
import DesignMradulYadavIMG from './Assets/DesignMradulYadav.jpg';
import DirectorRajeevTripathiIMG from './Assets/DirectorRajeevTripathi.jpg';
import FSAdityaRajuDarjiIMG from './Assets/FSAdityaRajuDarji.jpg';
import FSAnushreeIMG from './Assets/FSAnushree.jpeg';
import FSShivanshiMaheshwariIMG from './Assets/FSShivanshiMaheshwari.jpg';
import FSShreyaYadavIMG from './Assets/FSShreyaYadav.jpg';
import FSVibhanshuVaibhavIMG from './Assets/FSVibhanshuVaibhav.jpg';
import GnosomaniaVanshAmbashtaIMG from './Assets/GnosomaniaVanshAmbashta.jpg';
import PRAdityaGuptaIMG from './Assets/PRAdityaGupta.jpeg';
import PRPrakharJainIMG from './Assets/PRPrakharJain.jpg';
import PRRishiGargIMG from './Assets/PRRishiGarg.jpeg';
import PRSiddharthDubeyIMG from './Assets/PRSiddharthDubey.jpg';
import SACAnilKumarSinghIMG from './Assets/SACAnilKumarSingh.jpg';
import TechDennisThomasIMG from './Assets/TechDennisThomas.jpg';
import TechMohitPandeyIMG from './Assets/TechMohitPandey.jpg';
import TechSanskarOmarIMG from './Assets/TechSanskarOmar.jpg';
/* eslint-enable */

const index = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="bg-gray-100  dark:bg-gray-800">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
              Team Avishkar
            </h1>

            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="DIRECTOR" />
            <div className="grid items-center grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card
                imgsrc={DirectorRajeevTripathiIMG}
                name="Professor Rajeev Tripathi"
                designation="Director"
              />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="SAC President" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card
                imgsrc={SACAnilKumarSinghIMG}
                name="Prof. Anil Kumar Singh"
                designation="SAC President"
              />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="faculty" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={PlaceholderIMG} name="Faculty 1" designation="Designations" />
              <Card imgsrc={PlaceholderIMG} name="Faculty 2" designation="Designations" />
              <Card imgsrc={PlaceholderIMG} name="Faculty 3" designation="Designations" />
              <Card imgsrc={PlaceholderIMG} name="Faculty 4" designation="Designations" />
              <Card imgsrc={PlaceholderIMG} name="Faculty 5" designation="Designations" />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="Festive Secretaries" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={FSVibhanshuVaibhavIMG} name="Vibhanshu Vaibhav" designation="" />
              <Card imgsrc={FSShreyaYadavIMG} name="Shreya Yadav" designation="" />
              <Card imgsrc={FSAdityaRajuDarjiIMG} name="Aditya Raju Darji" designation="" />
              <Card imgsrc={PlaceholderIMG} name="Om Vijay Gupta" designation="" />
              <Card imgsrc={FSShivanshiMaheshwariIMG} name="Shivanshi Maheshwari" designation="" />
              <Card imgsrc={FSAnushreeIMG} name="Anushree" designation="" />
              <Card imgsrc={PlaceholderIMG} name="---" designation="" />
              <Card imgsrc={PlaceholderIMG} name="---" designation="" />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="Public Relations" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={PRAdityaGuptaIMG} name="Aditya Gupta" designation="" />
              <Card imgsrc={PRRishiGargIMG} name="Rishi Garg" designation="" />
              <Card imgsrc={PlaceholderIMG} name="Devashish Singh Tomar" designation="" />
              <Card imgsrc={PRSiddharthDubeyIMG} name="Siddharth Dubey" designation="" />
              <Card imgsrc={PlaceholderIMG} name="Himanshu Goyal" designation="" />
              <Card imgsrc={PRPrakharJainIMG} name="Prakhar Jain" designation="" />
              <Card imgsrc={PlaceholderIMG} name="Aashirwad Sharma" designation="" />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="Gnosiomania Team" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={GnosomaniaVanshAmbashtaIMG} name="Vansh Ambashta" designation="" />
              <Card imgsrc={PlaceholderIMG} name="Darin Peter Carvalho" designation="" />
              <Card imgsrc={PlaceholderIMG} name="---" designation="" />
              <Card imgsrc={PlaceholderIMG} name="---" designation="" />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="Tech Team" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={PlaceholderIMG} name="Lovedeep Singh Kamal" designation="" />
              <Card imgsrc={TechMohitPandeyIMG} name="Mohit Pandey" designation="" />
              <Card imgsrc={TechSanskarOmarIMG} name="Sanskar Omar" designation="" />
              <Card imgsrc={TechDennisThomasIMG} name="Dennis Thomas" designation="" />
              <Card imgsrc={PlaceholderIMG} name="Ishan Gupta" designation="" />
              <Card imgsrc={PlaceholderIMG} name="Priyav K Kaneria" designation="" />
              <Card imgsrc={PlaceholderIMG} name="Parth Mittal" designation="" />
            </div>
          </div>

          <div className="container px-6 py-10 mx-auto">
            <DividerLine text="Design Team" />
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
              <Card imgsrc={DesignHardikMittalIMG} name="Hardik Mittal" designation="" />
              <Card imgsrc={DesignDarpanMittalIMG} name="Darpan Mittal" designation="" />
              <Card imgsrc={DesignKushagraSaxenaIMG} name="Kushagra Saxena" designation="" />
              <Card imgsrc={DesignMradulYadavIMG} name="Mradul Yadav" designation="" />
              <Card imgsrc={DesignAnchalYadavIMG} name="Anchal Yadav" designation="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
