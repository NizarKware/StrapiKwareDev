import React from 'react'
import "./FolioFeatures.css"



function Users() {

  var UserObject = [
    { className: 'Orange', content: "تطوير التطبيقات apps  محليا من قبل المكتبات و/أو شركات البرمجة المحلية" },
    { className: 'DarkBlue', content: "عند تقنين العلاقة بين مقدم الخدمة والمكتباتAgile Development Model نقلة في الشفافية " },
    { className: 'MediumBlue', content: "دعم تعدد المسأجرين على نفس الحالة multi-tenant" },
    { className: 'MediumPurple', content: "دعم كافة اللغات الإنسانية عبر اطار React لتطوير واجهات المستخدمين" },
    { className: 'VeryLightPurple', content: (
      <div className ="container2">
      <img className ="kintegration" src=".\Logos\kintegration.jpg" alt="kintegration"/>
      <img className ="kware" src=".\Logos\kware.png" alt="kware"/>
      <img className ="ebsco" src=".\Logos\ebsco.jpg" alt="ebsco"/>
      </div>
  ) },
    { className: 'Blue', content: "الخدمات المصغرة OKAPI" },
    { className: 'LightPurple', content: "دعم البيانات المترابطة  – Bibframe RDA مع دعم كافة صيغ البيانات MARC, DC, MODS" },
    { className: 'Orange', content: "شاملاً نظام إدارة الموارد الإلكترونية ERM المورد الإلكتروني - الرخصة - الاتفاقية" },
    { className: 'DarkBlue', content: "برمجيات مفتوحة المصدر - تراخيص استخدام مجانية - مجتمع متطوعين حول العالم لتقديم الدعم الفني والتطوير" },
    { className: 'Orange', content: "حيادية تامة عند التكامل مع منصات الإكتشاف Discovery Portals" },
    { className: 'MediumPurple', content: "شركات محلية وعالمية لتقديم الخبرات والتطوير والتنفيذ والصيانة والدعم والإستضافة" },
    { className: 'MediumBlue', content: "مرونة نظام التزويد الفرعي تركيب التطبيقات الممكن الاستفادة منها فقط! حسب بيئة العمل." },
  ];
    
    return (
        <div>

          <div className="title">
            <h1>
              {/*<img id ="foliobee" src=".\Logos\foliobee.jpg" alt="FolioBee"/>*/} 
              ماهي المميزات الثورية في فوليو والتي تجذب لها الجميع ؟ 
              {/*<img id ="darah" src=".\Logos\darah.jpg" alt="Darah" />*/}
            </h1>
      
          </div>
          <div className="ParentGrid">
            {UserObject.map(props => (
            <div  className={props.className}>{props.content} </div>
            ))}
          </div>
          {/*<div className="YLine"></div>*/}

          {/*<div>
          { UserObject[4].content = <img className ="opensource" src=".\Logos\opensource.jpg" alt="opensource"/>}
          </div>*/}
       
        </div>
    )
    }
    
  export default Users

  