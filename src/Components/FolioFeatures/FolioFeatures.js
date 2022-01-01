/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import PropTypes from 'prop-types'
import "./FolioFeatures.css"




function FolioFeatures(props) {
  const FeaturesObjects = [
  {label:'تطوير التطبيقات Apps محليا من قبل المكتبات و/او شركات البرمجة المحلية', className:'Orange'},
  {label:'نقلة في الشفافية - عند تقنين العلاقة بين مقدم الخدمة والمكتباتAgile Development Model', className:'dblue'},
  {label:'دعم تعدد المسأجرين على نفس الحالة multi-tenant', className:'blue'},
  {label:'دعم كافة اللغات الإنسانية عبر اطار React لتطوير واجهات المستخدمين الخدمات المصغرةOKAPI', className:'purple'},
  {label:'دعم البيانات المترابطة RDA – Bibframe  مع دعم كافة صيغ البيانات MARC, DC, MODS', className:'purple1'},
  {label:'شاملاً نظام إدارة الموارد الإلكترونية ERM  المورد الإلكتروني – الرخصة - الاتفاقية', className:'blue1'},
  {label:'', className:'blue1'},
  {label:'حيادية تامة عند التكامل مع منصات الإكتشاف  Discovery Portals', className:'blue1'},
  {label:'شركات محلية وعالمية لتقديم الخبرات والتطوير والتنفيذ والصيانة والدعم والإستضافة', className:'blue1'},
  {label:'مرونة نظام التزويد الفرعي تركيب التطبيقات الممكن الاستفادة منها فقط! حسب بيئة العمل.', className:'blue1'},
  {label:'', className:'blue1'},
  {label:'', className:'orange'}]

  
    return (

     
      /*<div>
        <div> <h2 id="title">ماهي المميزات الثورية في فوليو والتي تجذب لها الجميع ؟</h2> </div>
        <div id="main" class="parent">
       {
         features.map(item => (
          <div class="blue"> {item} </div>

         ))
       }
      </div>
<br></br>
<br></br>*/
      <div>
      <div  class="parent">
       {FeaturesObjects.map(kware => (
          <div className={kware.className}> {kware.label}</div>
          /* <div className="orange">تطوير التطبيقات Apps محليا من قبل المكتبات و/او شركات البرمجة المحلية</div> */
          
         ))
       }
      </div>
      </div> 

    )

}

FolioFeatures.propTypes = {

}

export default FolioFeatures

