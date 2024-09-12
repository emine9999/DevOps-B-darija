import React, { useState } from 'react';
import { CiCirclePlus } from 'react-icons/ci';

const Span = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  
  const sections = [
    { title: 'منين نبداو؟', content: 'بدا رحلتك معانا، حيت تعلم DevOps و الكلاود ولا ساهل. حنا تا حنا طلبة بحالك، كنقراو وكنشاركو المعارف الجديدة كل نهار' },
    { title: 'كيفاش نخدمو مع بعضياتنا؟', content: 'من خلال بناء مجتمع داعم ديال الطلبة المغاربة، كنعاونو بعضياتنا، كنكتاشفو وكنكبرو مجموعين في رحلة التعلم ديال الكلاود و DevOps.' },
    { title: 'علاش تختارنا؟', content: 'حنا طلبة مغاربة عندنا شغف بالكلاود و DevOps. المنصة ديالنا معمولة باش تعاون الطلبة المغاربة سواء بالدريجة ولا بالإنجليزية، باش التعليم يكون في المتناول وعملي' },
    { title: 'شنو اللي كيميزنا؟', content: 'حيت حنا تا حنا طلبة، كل نهار كنقراو حاجة جديدة وكنوثقو الرحلة ديالنا. من الكورسات للمقالات، ملتازمين نشاركو معاكم كل اللي تعلمناه باش نعاونوكم تحققو النجاح.' }
  ];

  return (
    <div className='absolute grid grid-col-3 p-7 md:p-16 gap-5 top-[450px] left-10 w-[320px] md:-top-10 md:left-24 md:w-[500px] md:h-[472px] 2xl:w-[600px] 2xl:h-[600px] bg-violet rounded-3xl shadow-inner'>
      {sections.map((section, index) => (
        <div key={index}>
          <div className='col-span-3 bg-white py-3 2xl:py-5 rounded-t-2xl flex space-x-3 justify-end items-center'>
            <div><h1 className='md:text-xl'>{section.title}</h1></div>
            <div>
              <CiCirclePlus 
                onClick={() => toggleSection(index)} 
                className='text-3xl cursor-pointer' 
              />
            </div>
          </div>
          {activeSection === index && (
            <div className='col-span-3 p-4 border bg-menu rounded-b-2xl text-black'>
              <p>{section.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Span;
