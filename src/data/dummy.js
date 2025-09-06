import React from 'react';
import Button from '../components/Button';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import  '../App.css';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';

import '../App.css'
import {Link} from 'react-router-dom';


export const PyramidData = [
  { x: 'Sweet Treats', y: 120, text: '120 cal' },
  { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
  { x: 'Vegetables', y: 470, text: '470 cal' },
  { x: 'Meat, Poultry, Fish', y: 475, text: '475 cal' },
  { x: 'Fruits', y: 520, text: '520 cal' },
  { x: 'Bread, Rice, Pasta', y: 930, text: '930 cal' },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'اجتماع',
    Location: 'قاعة الاجتماعات',
    StartTime: '2023-06-10T04:00:00.000Z',
    EndTime: '2023-06-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
 
 
];

export const kanbanGrid = [
  { headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true },

  { headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true },

  { headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false },

  { headerText: 'Done',
    keyField: 'Close',
    allowToggle: true },
];
const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="employee"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

  



export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Gold',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Silver',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Bronze',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
    { x: 'Apr', y: 17.5 },
    { x: 'May', y: 22.1 },
    { x: 'June', y: 25 },
    { x: 'July', y: 29.4 },
    { x: 'Aug', y: 29.6 },
    { x: 'Sep', y: 25.8 },
    { x: 'Oct', y: 21.1 },
    { x: 'Nov', y: 15.5 },
    { x: 'Dec', y: 9.9 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  { label: '1°C to 10°C',
    start: '1',
    end: '10',
    colors: colorMappingData[1] },

  { label: '11°C to 20°C',
    start: '11',
    end: '20',
    colors: colorMappingData[2] },

  { label: '21°C to 30°C',
    start: '21',
    end: '30',
    colors: colorMappingData[3] },

];

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}°C',
  title: 'Temperature',
};

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center' },
 
];

export const employeesData = [

  {
    ID: {},
    class: '1er bac',
    name:'benz' ,
    prenom: 'saida',
    tele:'0637354609',
   
  
  }];
  export let employeeData = [{
    'EmployeeID': 1,
    'LastName': 'Davolio',
    'FirstName': 'Nancy',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-664743600000),
    'HireDate': new Date(704692800000),
    'Address': '507 - 20th Ave. E.\r\nApt. 2A',
    'City': 'Seattle',
    'Region': 'WA',
    'PostalCode': '98122',
    'Country': 'USA',
    'HomePhone': '(206) 555-9857',
    'Extension': '5467',
    'Photo': { 'Length': 21626 },
    'Notes': 'Education includes a BA in psychology from Colorado State University in 1970.  She also completed\
    \'The Art of the Cold Call.\'  Nancy is a member of Toastmasters International.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 2,
    'LastName': 'Fuller',
    'FirstName': 'Andrew',
    'Title': 'Vice President, Sales',
    'TitleOfCourtesy': 'Dr.',
    'BirthDate': new Date(-563828400000),
    'HireDate': new Date(713764800000),
    'Address': '908 W. Capital Way',
    'City': 'Tacoma',
    'Region': 'WA',
    'PostalCode': '98401',
    'Country': 'USA',
    'HomePhone': '(206) 555-9482',
    'Extension': '3457',
    'Photo': { 'Length': 21626 },
    'Notes': 'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of \
    Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, \
    was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the \
    Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.',
    'ReportsTo': 0,
    'PhotoPath': 'http://accweb/emmployees/fuller.bmp'
},
{
    'EmployeeID': 3,
    'LastName': 'Leverling',
    'FirstName': 'Janet',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-200088000000),
    'HireDate': new Date(702104400000),
    'Address': '722 Moss Bay Blvd.',
    'City': 'Kirkland',
    'Region': 'WA',
    'PostalCode': '98033',
    'Country': 'USA',
    'HomePhone': '(206) 555-3412',
    'Extension': '3355',
    'Photo': { 'Length': 21722 },
    'Notes': 'Janet has a BS degree in chemistry from Boston College (1984). \
     She has also completed a certificate program in food retailing management.\
     Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/leverling.bmp'
},
{
    'EmployeeID': 4,
    'LastName': 'Peacock',
    'FirstName': 'Margaret',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mrs.',
    'BirthDate': new Date(-1018814400000),
    'HireDate': new Date(736401600000),
    'Address': '4110 Old Redmond Rd.',
    'City': 'Redmond',
    'Region': 'WA',
    'PostalCode': '98052',
    'Country': 'USA',
    'HomePhone': '(206) 555-8122',
    'Extension': '5176',
    'Photo': { 'Length': 21626 },
    'Notes': 'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American \
    Institute of Culinary Arts (1966).  She was assigned to the London office temporarily from July through November 1992.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/peacock.bmp'
},
{
    'EmployeeID': 5,
    'LastName': 'Buchanan',
    'FirstName': 'Steven',
    'Title': 'Sales Manager',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(-468010800000),
    'HireDate': new Date(750830400000),
    'Address': '14 Garrett Hill',
    'City': 'London',
    'Region': null,
    'PostalCode': 'SW1 8JR',
    'Country': 'UK',
    'HomePhone': '(71) 555-4848',
    'Extension': '3453',
    'Photo': { 'Length': 21626 },
    'Notes': 'Steven Buchanan graduated from St. Andrews University, Scotland, with a BSC degree in 1976.  Upon joining the company as \
    a sales representative in 1992, he spent 6 months in an orientation program at the Seattle office and then returned to his permanent \
    post in London.  He was promoted to sales manager in March 1993.  Mr. Buchanan has completed the courses \'Successful \
    Telemarketing\' and \'International Sales Management.\'  He is fluent in French.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/buchanan.bmp'
},
{
    'EmployeeID': 6,
    'LastName': 'Suyama',
    'FirstName': 'Michael',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(-205185600000),
    'HireDate': new Date(750830400000),
    'Address': 'Coventry House\r\nMiner Rd.',
    'City': 'London',
    'Region': null,
    'PostalCode': 'EC2 7JR',
    'Country': 'UK',
    'HomePhone': '(71) 555-7773',
    'Extension': '428',
    'Photo': { 'Length': 21626 },
    'Notes': 'Michael is a graduate of Sussex University (MA, economics, 1983) and the University of California at Los Angeles \
    (MBA, marketing, 1986).  He has also taken the courses \'Multi-Cultural Selling\' and \'Time Management for the Sales Professional.\'  \
    He is fluent in Japanese and can read and write French, Portuguese, and Spanish.',
    'ReportsTo': 5,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 7,
    'LastName': 'King',
    'FirstName': 'Robert',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Mr.',
    'BirthDate': new Date(-302731200000),
    'HireDate': new Date(757486800000),
    'Address': 'Edgeham Hollow\r\nWinchester Way',
    'City': 'London',
    'Region': null,
    'PostalCode': 'RG1 9SP',
    'Country': 'UK',
    'HomePhone': '(71) 555-5598',
    'Extension': '465',
    'Photo': { 'Length': 21626 },
    'Notes': 'Robert King served in the Peace Corps and traveled extensively before completing his degree in English at the \
    University of Michigan in 1992, the year he joined the company.  After completing a course entitled \'Selling in Europe,\' \
    he was transferred to the London office in March 1993.',
    'ReportsTo': 5,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 8,
    'LastName': 'Callahan',
    'FirstName': 'Laura',
    'Title': 'Inside Sales Coordinator',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-377982000000),
    'HireDate': new Date(762843600000),
    'Address': '4726 - 11th Ave. N.E.',
    'City': 'Seattle',
    'Region': 'WA',
    'PostalCode': '98105',
    'Country': 'USA',
    'HomePhone': '(206) 555-1189',
    'Extension': '2344',
    'Photo': { 'Length': 21626 },
    'Notes': 'Laura received a BA in psychology from the University of Washington.  She has also completed a course in business \
    French.  She reads and writes French.',
    'ReportsTo': 2,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
},
{
    'EmployeeID': 9,
    'LastName': 'Dodsworth',
    'FirstName': 'Anne',
    'Title': 'Sales Representative',
    'TitleOfCourtesy': 'Ms.',
    'BirthDate': new Date(-123966000000),
    'HireDate': new Date(784875600000),
    'Address': '7 Houndstooth Rd.',
    'City': 'London',
    'Region': null,
    'PostalCode': 'WG2 7LT',
    'Country': 'UK',
    'HomePhone': '(71) 555-4444',
    'Extension': '452',
    'Photo': { 'Length': 21626 },
    'Notes': 'Anne has a BA degree in English from St. Lawrence College.  She is fluent in French and German.',
    'ReportsTo': 5,
    'PhotoPath': 'http://accweb/emmployees/davolio.bmp'
}];
export let productData = [
{
    'ProductID': 1,
    'ProductName': 'Chai',
    'SupplierID': 1,
    'QuantityPerUnit': '10 boxes x 20 bags',
    'UnitPrice': 18.00,
    'UnitsInStock': 39,
    'Discontinued': true
},
{
    'ProductID': 2,
    'ProductName': 'Chang',
    'SupplierID': 1,
    'QuantityPerUnit': '24 - 12 oz bottles',
    'UnitPrice': 19.00,
    'UnitsInStock': 17,
    'Discontinued': true
},
{
    'ProductID': 3,
    'ProductName': 'Aniseed Syrup',
    'SupplierID': 1,
    'QuantityPerUnit': '12 - 550 ml bottles',
    'UnitPrice': 10.00,
    'UnitsInStock': 13,
    'Discontinued': true
},
{
    'ProductID': 4,
    'ProductName': 'Chef Anton\'s Cajun Seasoning',
    'SupplierID': 2,
    'QuantityPerUnit': '48 - 6 oz jars',
    'UnitPrice': 22.00,
    'UnitsInStock': 53,
    'Discontinued': true
},
{
    'ProductID': 5,
    'ProductName': 'Chef Anton\'s Gumbo Mix',
    'SupplierID': 2,
    'QuantityPerUnit': '36 boxes',
    'UnitPrice': 21.35,
    'UnitsInStock': 0,
    'Discontinued': true
},
{
    'ProductID': 6,
    'ProductName': 'Grandma\'s Boysenberry Spread',
    'SupplierID': 3,
    'QuantityPerUnit': '12 - 8 oz jars',
    'UnitPrice': 25.00,
    'UnitsInStock': 120,
    'Discontinued': false
},
{
    'ProductID': 7,
    'ProductName': 'Uncle Bob\'s Organic Dried Pears',
    'SupplierID': 3,
    'QuantityPerUnit': '12 - 1 lb pkgs.',
    'UnitPrice': 30.00,
    'UnitsInStock': 15,
    'Discontinued': false
},
{
    'ProductID': 8,
    'ProductName': 'Northwoods Cranberry Sauce',
    'SupplierID': 3,
    'QuantityPerUnit': '12 - 12 oz jars',
    'UnitPrice': 40.00,
    'UnitsInStock': 6,
    'Discontinued': false
},
{
    'ProductID': 9,
    'ProductName': 'Mishi Kobe Niku',
    'SupplierID': 4,
    'QuantityPerUnit': '18 - 500 g pkgs.',
    'UnitPrice': 97.00,
    'UnitsInStock': 29,
    'Discontinued': true
}
];
export const employeesGrid = [
  { type: 'checkbox', width: '50' },
  
  { 
    field :'tele',
    headerText: 'هاتف  الولي',
    width: '120',
    textAlign: 'Center',
     },

  { 
    field: 'class',
    headerText:'المستوى الدراسي ',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ID',
    headerText:'رقم التسجيل',
    width: '140',
    textAlign: 'Center' },

  { field: 'prenom',
    headerText: "الإسم العائلي",
    width: '125',
    textAlign: 'Center' },

   
    { field :'name',
      headerText: "الإسم الشخصي",
    width: '150',
    textAlign: 'Center' },
    {
      field: "actions",
      headerName: "Delete",
      type: "actions",
      width: 80,
      
    },

];

export const ParcourGrid = [ 
  { type: 'checkbox', width: '50' },

  { field: 'HireDate',
    headerText:'القرار السنوي',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: 'معدل العام',
    width: '140',
    textAlign: 'Center' },

  
    { field: 'Title',
    headerText: 'معدل الدورة 2',
    width: '170',
    textAlign: 'Center',
  },

    { headerText: 'القسم',
    width: '150',
    textAlign: 'Center' },

    { headerText: 'الموسم الدراسي ',
    width: '150',
    textAlign: 'Center' },
    
    { field: 'EmployeeID',
  headerText: 'رقم ',
  width: '125',
  textAlign: 'Center' },

];

export const FréresGrid = [
  { type: 'checkbox', width: '50' },

  
  { field: 'ReportsTo',
  headerText: 'مكان الإزدياد',
  width: '140',
  textAlign: 'Center' },
  
  { field: 'n',
  headerText: 'تاريخ الإزدياد',
  width: '140',
  textAlign: 'Center' },

  { field: 'ReportsTo',
    headerText: ' الاسم العائلي',
    width: '140',
    textAlign: 'Center' },

    { field: 'HireDate',
    headerText: 'الاسم الشخصي',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },

    { field: 'EmployeeID',
  headerText: 'رقم ',
  width: '125',
  textAlign: 'Center' },
 
  
];

export const customersData = [
  {
    CustomerID: <Link to="/AffichageEngagement.jsx">
    <button class="bg-blue-500 hover:bg-blue-700 mt-0 ml-20 text-white font-bold py-2 px-4 rounded-full">Click</button>
  </Link>
,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1002,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },
  {
    CustomerID: 1003,

    CustomerName: 'Andrew McDownland',
    CustomerEmail: 'andrew@gmail.com',
    ProjectName: 'Real Homes WP Theme',
    Status: 'Pending',
    CustomerImage:
      avatar4,
    StatusBg: '#FEC90F',
    Weeks: '19',
    Budget: '$24.5k',
    Location: 'USA',
  },
];
export const links = [
  {
      links: [
      {
        name: 'معلومات الطفل الشخصية',
      },
      {
        name: 'المسار الدراسي ',
      },
      {
        name:'شهادةالإسكان',
      },  
      {
        name:'الإعفاء من الرسوم',
      },
      {
        name:'شهادة طبية',
      },  
      {
        name: 'بطاقة الحالة المدنية',
      },
      {
        name: 'شهادة الحياة الجماعية',
      },     
      {
        name: 'التزام',
      },
      {
        name: 'شهادة الإحتياج',
      },
      {
        name: 'الملف الطبي',
      },
    ],
  },
  
];


export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Refunds',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const recentTransactions = [
  {
    icon: <BsCurrencyDollar />,
    amount: '+$350',
    title: 'Paypal Transfer',
    desc: 'Money Added',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'green-600',
  },
  {
    icon: <BsShield />,
    amount: '-$560',
    desc: 'Bill Payment',
    title: 'Wallet',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
  {
    icon: <FiCreditCard />,
    amount: '+$350',
    title: 'Credit Card',
    desc: 'Money reversed',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',

    pcColor: 'green-600',
  },
  {
    icon: <TiTick />,
    amount: '+$350',
    title: 'Bank Transfer',
    desc: 'Money Added',

    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',
    pcColor: 'green-600',
  },
  {
    icon: <BsCurrencyDollar />,
    amount: '-$50',
    percentage: '+38%',
    title: 'Refund',
    desc: 'Payment Sent',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',

  },

];
export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },

];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
]
export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'England',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'India',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];

export const pieChartData = [
 
  { x: 'المرشحون', y: 60, text: '60%' },
  { x: 'المستفيدين', y: 40, text: '40%' },
];
export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];


 

export const links2 = [
  {
      links: [
      {
        name: 'معلومات الطفل الشخصية',
      },
      {
        name: 'المسار الدراسي ',
      },
      {
        name:'شهادةالإسكان',
      },  
      {
        name:'الإعفاء من الرسوم',
      },
      {
        name:'شهادة طبية',
      },  
      {
        name: 'بطاقة الحالة المدنية',
      },
      {
        name: 'شهادة الحياة الجماعية',
      },     
      {
        name: 'الملف الطبي',
      },
    ],
  },
  
];


export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};
export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};



export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];

 


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
 
];


 
export const FréresData = [
  
 
];
export const ParcourData = [
  
 
];


