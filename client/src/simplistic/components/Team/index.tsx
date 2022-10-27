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
import FSDivyanshUpdhyayIMG from './Assets/FSDivyanshUpadhyay.jpeg';
import FSOmVijayGuptaIMG from './Assets/FSOmVijayGupta.jpg';
import FSShamoyeetaSahaIMG from './Assets/FSShamoyeetaSaha.jpeg';
import FSShivanshiMaheshwariIMG from './Assets/FSShivanshiMaheshwari.jpg';
import FSShreyaYadavIMG from './Assets/FSShreyaYadav.jpg';
import FSVibhanshuVaibhavIMG from './Assets/FSVibhanshuVaibhav.jpg';

import GnosomaniaBhaviKhatorIMG from './Assets/GnosomaniaBhaviKhator.jpg';
import GnosomaniaShristiSinghIMG from './Assets/GnosomaniaShristiSingh.jpg';
import GnosomaniaVanshAmbashtaIMG from './Assets/GnosomaniaVanshAmbashta.jpg';

import PRAashirwadSharmaIMG from './Assets/PRAashirwadSharma.jpg';
import PRAdityaGuptaIMG from './Assets/PRAdityaGupta.jpeg';
import PRGaurikaSharmaIMG from './Assets/PRGaurikaSharma.jpg';
import PRHimanshuGoyalIMG from './Assets/PRHimanshuGoyal.jpg';
import PRPrakharJainIMG from './Assets/PRPrakharJain.jpg';
import PRRishiGargIMG from './Assets/PRRishiGarg.jpeg';
import PRSiddharthDubeyIMG from './Assets/PRSiddharthDubey.jpg';

import SACAnilKumarSinghIMG from './Assets/SACAnilKumarSingh.jpg';

import TechAmitKumarIMG from './Assets/TechAmitKumar.jpg';
import TechDennisThomasIMG from './Assets/TechDennisThomas.jpg';
import TechHiteshMitrukaIMG from './Assets/TechHiteshMitruka.jpg';
import TechMohitPandeyIMG from './Assets/TechMohitPandey.jpg';
import TechParthMittalIMG from './Assets/TechParthMittal.jpg';
import TechSanskarOmarIMG from './Assets/TechSanskarOmar.jpg';

import PVSumitYadavIMG from './Assets/PVSumitYadav.jpg';
import PVVarunKumarIMG from './Assets/PVVarunKumar.jpg';
/* eslint-enable */

const index = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="bg-gray-100 dark:bg-gray-800">
          <div className="container px-6 py-6 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-6xl dark:text-white">
              Team Avishkar
            </h1>

            <div className="flex justify-center mx-auto mt-6">
              <span className="inline-block h-1 bg-blue-500 rounded-full w-60"></span>
              <span className="inline-block w-10 h-1 mx-1 bg-blue-500 rounded-full"></span>
              <span className="inline-block w-3 h-1 bg-blue-500 rounded-full"></span>
            </div>
          </div>

          <div className="container px-6 py-6 mx-auto">
            <DividerLine alignmentCenter={true} text="DIRECTOR" />
            <div className="flex flex-wrap justify-around">
              <Card
                imgsrc={DirectorRajeevTripathiIMG}
                name="Professor Rajeev Tripathi"
                designation="Director"
                facebook=""
                instagram=""
                linkedin=""
              />
            </div>
          </div>

          <div className="container px-6 py-6 mx-auto">
            <DividerLine alignmentCenter={true} text="SAC President" />
            <div className="flex flex-wrap justify-around">
              <Card
                imgsrc={SACAnilKumarSinghIMG}
                name="Prof. Anil Kumar Singh"
                designation="SAC President"
                facebook=""
                instagram=""
                linkedin=""
              />
            </div>
          </div>

          <div className="container px-6 py-6 mx-auto">
            <DividerLine alignmentCenter={true} text="faculty" />
            <div className="flex flex-wrap justify-around">
              <Card
                imgsrc={PlaceholderIMG}
                name="Faculty 1"
                designation="Designations"
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PlaceholderIMG}
                name="Faculty 2"
                designation="Designations"
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PlaceholderIMG}
                name="Faculty 3"
                designation="Designations"
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PlaceholderIMG}
                name="Faculty 4"
                designation="Designations"
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PlaceholderIMG}
                name="Faculty 5"
                designation="Designations"
                facebook=""
                instagram=""
                linkedin=""
              />
            </div>
          </div>

          <div className="container px-6 py-6 mx-auto">
            <DividerLine alignmentCenter={true} text="Festival Secretary" />
            <div className="flex flex-wrap justify-around">
              <Card
                imgsrc={FSAdityaRajuDarjiIMG}
                name="Aditya Raju Darji"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={FSAnushreeIMG}
                name="Anushree"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={FSDivyanshUpdhyayIMG}
                name="Divyansh Upadhyay"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={FSOmVijayGuptaIMG}
                name="Om Vijay Gupta"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={FSShamoyeetaSahaIMG}
                name="Shamoyeeta Saha"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={FSShivanshiMaheshwariIMG}
                name="Shivanshi Maheshwari"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={FSShreyaYadavIMG}
                name="Shreya Yadav"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={FSVibhanshuVaibhavIMG}
                name="Vibhanshu Vaibhav"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
            </div>
          </div>

          <div className="container px-6 py-6 mx-auto">
            <DividerLine alignmentCenter={true} text="Public Relations" />
            <div className="flex flex-wrap justify-around">
              <Card
                imgsrc={PRAashirwadSharmaIMG}
                name="Aashirwad Sharma"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PRAdityaGuptaIMG}
                name="Aditya Gupta"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PlaceholderIMG}
                name="Devashish Singh Tomar"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PRGaurikaSharmaIMG}
                name="Gaurika Sharma"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PRHimanshuGoyalIMG}
                name="Himanshu Goyal"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PRPrakharJainIMG}
                name="Prakhar Jain"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PRRishiGargIMG}
                name="Rishi Garg"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PRSiddharthDubeyIMG}
                name="Siddharth Dubey"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
            </div>
          </div>

          <div className="container px-6 py-6 mx-auto">
            <DividerLine alignmentCenter={true} text="Gnosiomania Team" />
            <div className="flex flex-wrap justify-around">
              <Card
                imgsrc={GnosomaniaBhaviKhatorIMG}
                name="Bhavi Khator"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PlaceholderIMG}
                name="Darin Peter Carvalho"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={GnosomaniaShristiSinghIMG}
                name="Shristi Singh"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={GnosomaniaVanshAmbashtaIMG}
                name="Vansh Ambashta"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
            </div>
          </div>

          <div className="container px-6 py-6 mx-auto">
            <DividerLine alignmentCenter={true} text="Tech Team" />
            <div className="flex flex-wrap justify-around">
              <Card
                imgsrc={TechAmitKumarIMG}
                name="Amit Kumar"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={TechDennisThomasIMG}
                name="Dennis Thomas"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={TechHiteshMitrukaIMG}
                name="Hitesh Mitruka"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PlaceholderIMG}
                name="Ishan Gupta"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PlaceholderIMG}
                name="Lovedeep Singh Kamal"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={TechMohitPandeyIMG}
                name="Mohit Pandey"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={TechParthMittalIMG}
                name="Parth Mittal"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PlaceholderIMG}
                name="Priyav K Kaneria"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={TechSanskarOmarIMG}
                name="Sanskar Omar"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
            </div>
          </div>

          <div className="container px-6 py-6 mx-auto">
            <DividerLine alignmentCenter={true} text="Design Team" />
            <div className="flex flex-wrap justify-around">
              <Card
                imgsrc={DesignAnchalYadavIMG}
                name="Anchal Yadav"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={DesignDarpanMittalIMG}
                name="Darpan Mittal"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={DesignHardikMittalIMG}
                name="Hardik Mittal"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={DesignKushagraSaxenaIMG}
                name="Kushagra Saxena"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={DesignMradulYadavIMG}
                name="Mradul Yadav"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
            </div>
          </div>
          <div className="container px-6 py-6 mx-auto">
            <DividerLine alignmentCenter={true} text="Tech Team" />
            <div className="flex flex-wrap justify-around">
              <Card
                imgsrc={PRAdityaGuptaIMG}
                name="Aditya Gupta"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PVSumitYadavIMG}
                name="Sumit Yadav"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
              <Card
                imgsrc={PVVarunKumarIMG}
                name="Varun Kumar"
                designation=""
                facebook=""
                instagram=""
                linkedin=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
