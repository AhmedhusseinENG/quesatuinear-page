import React ,{useState} from 'react'
import SignUp from './Component/Signing';
import './App.css';
import   arrowImage from '../public/arr-2.svg';
// import Table from './Component/Table';
import SearchableList from './Component/SearchableList.jsx';
// import SurveyComponent from "./Component/SurveyComponent";
import SearchableList2 from './Component/SerachableList2.jsx';
import A2 from "./A2.jsx";
// import MyComponent from './Component/MyComponent.jsx';
import SatisfactionTable from './Component/SatisfactionTable.jsx';
import GridSystem from './Component/GridSystem.jsx';
import cubic from "./assets/cube-10019.svg";
import users from "../public/users-267.svg";
import survey from "../public/to-do-list-13182.svg";
import circle from "../public/lined-circle-4074.svg";
import chart from "../public/pie-chart-and-bar-chart-15662.svg";
// import backgroundImage from '../public/mix-4.png';

const App = () => {
  const [selectedValue1, setSelectedValue1] = useState('');
    
  const [selectedValue2, setSelectedValue2] = useState('');

    const [choiceFirstComponent, setChoiceFirstComponent] = useState("");
  
    // Function to handle choice change in the first component
    const handleFirstComponentChoiceChange = (choice) => {
      setChoiceFirstComponent(choice);
    };
  const mapping = {
      "female": "mean",
      "male": "mode",
      "other": "median"
      // Add more mappings as needed
      
  };
//     // Mapping between options of component 2 and component 1
//     const mappingData = {
//         "mean": ["female"],
//         "mode": ["male"],
//         "median": ["other"]
//         // Add more mappings as needed
//     };

//     // Handles the change in component 2
//     const handleList2Change = (value) => {
//         setSelectedValue2(value);
//         // Do not update selectedValue1 based on selectedValue2
//     };


  // Handles the change in component 1
  const handleList1Change = (value) => {
    setSelectedValue1(value);
    // Update selected value of component 2 based on mapping
    const mappedValue = mapping[value];
    setSelectedValue2(mappedValue || ''); // Set to empty string if no mapping found
};

// Handles the change in component 2
// const handleList2Change = (value) => {
//     setSelectedValue2(value);
//     // Reverse mapping to find the original value in component 1
//     const originalValue = Object.keys(mapping).find(key => mapping[key] === value);
//     setSelectedValue1(originalValue || ''); // Set to empty string if no original value found
// };
const [state,setState] = useState("");
const [state2,setState2] = useState("");
 const handelChange = (e) => {
  setState(e.target.value);
  

 }
 const handelChange1 = (e) => {


 }
 const handelChange2 = (e) => {
  setState2(e.target.value);
 }

 const [errors, setErrors] = useState({});

 const validateInputs = (inputs) => {
   const newErrors = {};

   // Validate text inputs
   inputs.textInputs.forEach((input, index) => {
     if (input.trim() === '') {
       newErrors[`text-${index}`] = 'This field is required.';
     }
   });

   // Validate radio inputs
   if (!inputs.selectedRadio) {
     newErrors.radio = 'Please select an option.';
   }

   setErrors(newErrors);
   return Object.keys(newErrors).length === 0;
 };



const [selectedSatisfaction ,setSelectedSatisfaction] = useState({});
// const [users, setUsers] = useState([
//   { id: 1, name: 'الوقت المستغرق للوصول الى المكتب او المنطقة التأمينية' },
//   { id: 2, name: 'مواعيد العمل بالهيئة' },
//   { id: 3, name: 'البنية التحتية المادية (من حيث الشكل والمظهر، ونظافة مبنى المكاتب، وأماكن الانتظار، والمراحيض، وما إلى ذلك' },
//   { id: 4, name: 'مدة الانتظار ( قبل أداء الخدمة )'},
//   { id: 5, name: 'سلوك وأسلوب وطريقة تعامل الموظف' },
//   { id: 6, name: 'احترافية وكفاءة الموظفين' },
//   { id: 7, name: 'المعلومات المقدمة ( هل تلبي متطلباتك ؟)'},
//   { id: 8, name: 'الوقت المستغرق لإتمام الخدمة' },
//   { id: 9, name: 'التجربة بشكل عام' },
// ]);
 const handleChange = (userId, value) => {
  setSelectedSatisfaction({
    ...selectedSatisfaction,
    [userId]: value,
  });
};

 //  <SatisfactionTable />
//  <img src={cubic}/>
// style={{    backgroundRepeat: "repeat-y",backgroundSize:"contain", backgroundImage:`url(${backgroundImage})`}}
// <div className='flex  items-center justifuy-center gap-4'>
// <h2 >المحافظة</h2>
// <SearchableList  value={selectedValue2}  />
// <br></br>
// <br></br>
// <h2>المنطقة </h2>
// <SearchableList2 value={selectedValue2} onChange={handleList1Change} />
// </div>
return (
  <form  dir='rtl' className='container  ' action='POST'  onSubmit={handleChange}>
  <SatisfactionTable/>
  <A2/>
  <div  dir="rtl"  className=' container mt-[20%]  opacity-90 bg-gradient-to-r from-[#2196f3] to-[#7febeb] border-4 border-solid border-purple-800 rounded image bg-no-repeat  w-max ml-auto mr-auto grid relative m-10 p-5'>
<h2 className='text-center mt-2 mb-2'>في 5 دقائق من وقتك شاركنا برأيك حول الخدمة التي تلقيتها الان</h2>
<h2 className='text-center mt-2 mb-2 '>مشاركتك في الاستطلاع اختيارية , نحن نضمن سرية البيانات.</h2>

            {/* Your React components go here */}
            <a href="#end" className="go-down">
              <img className='mm' src={arrowImage} alt="arrowImage" />
            </a>
    
            <h2 className=' pt-10 mr-[90px]'>ما هي علاقتك ؟</h2>
            <GridSystem errors={errors} labels={['مؤمن عليك في جهة عمل .','صاحب عمل او مدير مسئول او مندوب عن منشأة.','عاملين بالخارج وعمالة غير منتظمة ','سائق / عامل مقاولات / مخابز ','صاحب او مستفيد من', 'عميل غير مسجل ']} prefix="first" onChoiceChange={handleFirstComponentChoiceChange} />
            <h2 className=' pt-10 mr-[90px]'> ما نوع الخدمة التي طلبتها؟</h2>
            <GridSystem errors={errors} labels={['= خدمات عاجلة (طابعة ، اعتماد مستند)', 'طلب اشتراك ( منشأة – مؤمن عليه ) - تحديث بيانات ', 'التقدم بطلب (صرف، تعديل، قطع)', 'تقديم شكوى أو طعن ', 'استفسار عن معلومات', 'أخرى']}  prefix="third"  />
            <h2 className=' pt-10 mr-[90px]'>   هل حصلت على الخدمة التي طلبتها؟</h2>
            <GridSystem errors={errors}  labels={[' نعم', ' مازال هناك حاجة إلى بعض المتابعة', 'لا']}  prefix="second" disabled={choiceFirstComponent === "نعم"} />
            <h2 className=' pt-10 mr-[90px]'>كيف ستتابع طلب الخدمة الخاص بك؟  </h2>
            <GridSystem errors={errors} labels={[ 'زيارة المكتب الأمامي مرة أخرى',' الاتصال بخط الساخن (16217)', 'زيارة الموقع الالكتروني (nosi.gov.eg)', 'جميع ما سبق   ']} prefix="four" />
            <h2 className=' pt-10 mr-[90px]'>   هل تلقيت رسالة على الهاتف المحمول فورًا بخصوص حالة طلب الخدمة الخاص بك؟</h2>
            <GridSystem errors={errors} labels={[ 'نعم', 'لا', ' لا أعلم']} prefix="five" />
            <h2 className=' pt-10 mr-[90px]'> ما رأيك في إضافة وسائل تواصل أخرى؟ مثل : </h2>
            <h2  className=' pt-2 mr-[90px]'> أ- سيارات متنقلة لتقديم الخدمات التأمينية   </h2>
            <GridSystem errors={errors} labels={[ 'نعم', 'لا', ' لا أعلم']} prefix="six" />
            <h2  className=' pt-10 mr-[90px]'>    ب- تطبيق على الهاتف المحمول للحصول على الخدمات التأمينية  </h2>
            <GridSystem errors={errors} labels={[ 'نعم', 'لا', ' لا أعلم']} prefix="six" />

            <div className='mt-10 mb-10'>
           
            <label htmlFor="message" className="block mb-[-20px] text-sm font-medium text-gray-900 ">هل لديك أي تعليقات أو اقتراحات حول كيفية تحسين خدمات المقدمة؟</label>
            <h2 className="text-red-700  cursor-pointer mt-6 flex space-x-2">*</h2>
            <textarea name="textera"   id="message" rows="4" className='resize-none  w-full	 block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg  border-gray-300 cursor-pointer px-4 py-2 border border--300  shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500'  placeholder="هل لديك أي تعليقات أو اقتراحات ..."></textarea>
            <p className='mb-2'>شكرا لك على إجاباتك</p>
            <p>يمكنك اختيار إنهاء الاستبيان الآن  ولكن نأمل أن تخبرنا عن نفسك لتعطينا فكرة توضيحية عن عملائنا.</p>
            </div>
            <h2 className=' pt-10 mr-[90px]'> كم عمرك؟ </h2>
            <GridSystem errors={errors} labels={[ 'اقل من 20', 'من 20حتى 45', 'من 45 حتى60', 'أكثر من 60  ']} prefix="seven" />
            <h2 className=' pt-10 mr-[90px]'>النوع</h2>
            <GridSystem  errors={errors} labels={['ذكر','انثي']} prefix="eight" />
            <h2 className=' pt-10 mr-[90px]'>هل أنت على استعداد للمشاركة في الاستطلاعات المستقبلية ؟</h2>
            <GridSystem errors={errors} labels={['نعم','لا']} prefix="nine" />
           <div className='mt-[50px]'>
           <h2 className='mb-[-20px]'>
           تفاصيل الاتصال :  
           </h2>
           <div>
           <label htmlFor="email" className="text-red-700  cursor-pointer mt-6 flex space-x-2">*</label>
           <input type="email" placeholder='الايميل الشحضي' className="mb-[-20px] cursor-pointer px-4 py-2 border  text-gray-900 bg-gray-50 border-gray-300 rounded shadow-sm focus:outline-none focus:border-cyan-500  focus:border-cyan-500  focus:ring-2 focus:ring-cyan-500" onChange={handelChange2} value={state2}/> 
           </div>
           <div>
           
           <label htmlFor="num" className="text-red-700  mt-6 flex space-x-2"><h2>*</h2></label>
           <input type="text"   placeholder=' رقم هاتف ' className="  text-gray-900 bg-gray-50 px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none    focus:ring-2 focus:ring-cyan-500" onChange={handelChange} value={state}/>
           </div>
           
           </div>

            <h2 className='mt-5 mb-5'>نهايــــة الاستبيان</h2>
            <button className="btn mt-10" id="end" type='submit'>ارسال</button>
            </div>
            </form>
);
}

export default App;
// v2.2


//  version 2

// import React, { useState } from "react";

// const governments = [
//   { name: "القاهرة", counties: ["القاهرة الكبرى", "حلوان", "المطرية", "النزهة", "مصر الجديدة", "عين شمس", "الخليفة", "المرج", "الشرابية", "الزاوية الحمراء", "حدائق القبة", "البساتين", "السيدة زينب", "إمبابة", "منشأة ناصر"] },
//   { name: "الجيزة", counties: ["الجيزة", "الشيخ زايد", "الهرم", "العمرانية", "أوسيم", "البدرشين", "كرداسة", "الصف", "أطفيح", "6 أكتوبر"] },
//   { name: "الإسكندرية", counties: ["الإسكندرية", "برج العرب", "العامرية", "المنتزه", "سيدي بشر", "الجمرك", "العجمي", "أبو قير", "العامرية الثانية"] },
//   { name: "القليوبية", counties: ["بنها", "قليوب", "شبرا الخيمة", "القناطر الخيرية", "الخانكة", "كفر شكر", "طوخ", "قها", "المنصورة", "بلبيس", "العاشر من رمضان", "العبور", "بنها الجديدة"] },
//   { name: "الشرقية", counties: ["الزقازيق", "بلبيس", "العاشر من رمضان", "العبور", "منيا القمح", "أبو حماد", "القرين", "ههيا", "ديرب نجم", "فاقوس", "أبو كبير", "كفر صقر", "الإبراهيمية", "الحسينية", "الزوامل", "منشأة أبو عمر"] },
//   { name: "الدقهلية", counties: ["المنصورة", "طلخا", "المطرية", "أجا", "منية النصر", "بلقاس", "المنزلة", "السنبلاوين", "جمصة", "ميت غمر", "تمي الأمديد", "السرو", "دكرنس", "مشتول السوق", "نبروه", "أشمون", "السنبلاوين الجديدة"] },
//   { name: "الغربية", counties: ["طنطا", "المحلة الكبرى", "كفر الزيات", "زفتى", "بسيون", "السنطة", "سمنود", "قطور", "الميمون", "كفر الدوار", "بركة السبع"] },
//   { name: "البحيرة", counties: ["دمنهور", "كفر الدوار", "رشيد", "إدكو", "أبو المطامير", "كوم حمادة", "حوش عيسى", "النوبارية الجديدة", "إيتاي البارود", "شبراخيت", "وادي النطرون", "بدر", "الرحمانية", "دمنهور الجديدة", "حلايب"] },
//   { name: "المنوفية", counties: ["شبين الكوم", "منوف", "أشمون", "قويسنا", "تلا", "السادات", "بركة السبع", "السنبلاوين", "منوفية", "السادات الجديدة"] },
//   { name: "الإسماعيلية", counties: ["الإسماعيلية", "القنطرة شرق", "القنطرة غرب", "فايد", "أبو صوير"] },
//   { name: "بورسعيد", counties: ["بورسعيد", "بورفؤاد", "العرب"] },
//   { name: "السويس", counties: ["السويس", "عتاقة", "الجناين"] },
//   { name: "البحر الأحمر", counties: ["الغردقة", "رأس غارب", "سفاجا", "مرسى علم", "القصير", "حلايب", "شلاتين", "برنيس"] },
//   { name: "أسوان", counties: ["أسوان", "كوم أمبو", "إدفو", "دراو", "نصر النوبة", "أبو سمبل", "كلابشة", "بربر"] },
//   { name: "الأقصر", counties: ["الأقصر", "إسنا", "طيبة", "أرمنت", "البياضية", "القرنة", "المراغة", "الدير", "البلينا", "العرابة", "القصير"] },
//   { name: "قنا", counties: ["قنا", "نجع حمادي", "قوص", "دشنا", "أبو تشت", "نقادة", "فرشوط", "قفط", "إسنا", "الوقف", "المراغة", "أبو صير"] },
//   { name: "سوهاج", counties: ["سوهاج", "أخميم", "طهطا", "جرجا", "ساقلته", "المنشأة", "البلينا", "دار السلام", "المراغة", "العسيرات", "جهينة", "أولاد عيسى", "المراغة الجديدة"] },
//   { name: "أسيوط", counties: ["أسيوط", "ديروط", "منفلوط", "أبنوب", "أبو تيج", "ساحل سليم", "القوصية", "البداري", "الغنايم", "القوصية الجديدة", "إنشاص", "منقباد", "الفتح", "القوصية الجديدة"] },
//   { name: "المنيا", counties: ["المنيا", "مغاغة", "بني مزار", "مطاي", "سمالوط", "أبو قرقاص", "ديروط", "العدوة", "ملوي", "بني حسن", "المنيا الجديدة"] },
//   { name: "بني سويف", counties: ["بني سويف", "الواسطى", "ناصر", "إهناسيا", "سمسطا", "ببا", "الفشن", "بني سويف الجديدة"] },
//   { name: "الفيوم", counties: ["الفيوم", "طامية", "سنورس", "أبشواي", "يوسف الصديق", "إطسا", "الفيوم الجديدة"] },
//   { name: "شمال سيناء", counties: ["العريش", "بئر العبد", "رفح", "الشيخ زويد", "الحسنة", "نخل", "القسيمة", "الحسنة الجديدة"] },
//   { name: "جنوب سيناء", counties: ["شرم الشيخ", "دهب", "نويبع", "طابا", "أبو رديس", "سانت كاترين", "طور سيناء", "راس سدر", "شرم الشيخ الجديدة"] },
//   { name: "مطروح", counties: ["مرسى مطروح", "السلوم", "الضبعة", "الحمام", "سيوه", "العلمين", "النجيلة", "سيوة الجديدة"] },
// ];

// function App() {
//   const [selectedGovernment, setSelectedGovernment] = useState(null);

//   const handleGovernmentChange = (event) => {
//     setSelectedGovernment(event.target.value);
//   };

//   const filteredCounties = selectedGovernment
//     ? governments.find((gov) => gov.name === selectedGovernment).counties
//     : [];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Governments and Counties</h1>

//       <div className="flex items-center mb-4">
//         <label htmlFor="governments" className="mr-2">
//           Select Government:
//         </label>
//         <select
//           id="governments"
//           className="border rounded px-2 py-1"
//           value={selectedGovernment}
//           onChange={handleGovernmentChange}
//         >
//           <option value="">Select Government</option>
//           {governments.map((government) => (
//             <option key={government.name} value={government.name}>
//               {government.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {selectedGovernment && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold mb-2">Counties:</h2>
//           <ul className="list-disc ml-4">
//             {filteredCounties.map((county, index) => (
//               <li key={index}>{county}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// <h2 className=' pt-10 mr-[90px]'>ما هي علاقتك ؟</h2>
// <GridSystem errors={errors} prefix="grid1" labels={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']} />

// <h2 className=' pt-10 mr-[90px]'>ما هي علاقتك ؟</h2>
// <GridSystem errors={errors} prefix="grid2" labels={['Option 7', 'Option 8', 'Option 9', 'Option 10', 'Option 11', 'Option 12']} />

// {Object.keys(errors).length > 0 && <p className="text-red-500 line-through ">There are errors in the form.</p>}
// <button className='btn' id="end" type='submit'>Submit</button>
//   return (
//     // <SurveyComponent/>
//     // <SignUp/>
// // <SearchableList/>
//     // <Table/>

//     // <div>
//     // <SearchableList  value={selectedValue2}  />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // <br />
//     // // <br />
//     // <SearchableList2 value={selectedValue2} onChange={handleList1Change} />
//     // </div>
//   // <div>ukds</div>
//   <div dir="rtl" className=' bg-white  image m-5 p-5 ' >
//   <div className="absolute inset-0 w-full h-full bg-cyan-500 opacity-100">
//   <div className="absolute inset-0 w-full h-full bg-slate-400 opacity-100">
//   <SatisfactionTable/>
//   <br></br>
//   <br></br>
//   <br></br>
//   <br></br>
//   <br></br>
  
//   <a href="#end" className="go-down">

//   <img  className='mm' src={arrowImage} style={{ color: '#2196f3' }} alt="arrowImage" /> 
//   </a>

//   <GridSystem prefix="grid1" labels={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6']} />
//  <br></br>
//  <br></br>
//  <GridSystem prefix="grid2" labels={['Option 7', 'Option 8', 'Option 9', 'Option 10', 'Option 11', 'Option 12']} />
//  <br></br>
//  <br></br>
//  <br></br>
 
//  {/* First component */}
//  <GridSystem
//  labels={['نعم', 'لا']}
//  prefix="first"
//  onChoiceChange={handleFirstComponentChoiceChange}
//  />
//  <br></br>
//  <br></br>
//  <br></br>
 
//  {/* Second component - conditionally disabled */}
//  <GridSystem
//  labels={['Option 7', 'Option 8', 'Option 9', 'Option 10', 'Option 11', 'Option 12']}
//  prefix="second"
//  disabled={choiceFirstComponent === "نعم"}
//  />
//  <br/>
//  <br/>
//  <br/>
//  {/* Third component */}
//  <GridSystem
//  labels={['Option 13', 'Option 14', 'Option 15', 'Option 16', 'Option 17', 'Option 18']}
//  prefix="third"
//  />
//  <button className='btn'  id="end" type='submit'>Submit</button>
//  </div>
//  </div>
 
//  </div>
// )
// }

// export default App;




// componett-2


// <header className="App-header">
//       <h1 className="text-2xl font-bold">User Satisfaction Survey</h1>
//       <SatisfactionTable />
//     </header>

// <MyComponent/>;
