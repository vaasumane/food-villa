import { useState } from "react";
import { faqQuestionAns } from "../Constant";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";


const Accordian = ({ value, setValue, textValue, keyName, buttonText }) => {
  return (
    <>
      <div className="p-2 border-b-2 border-black m-2 pb-3">
        {value ? (
          <button className="w-full flex justify-between" onClick={() => setValue("")}><span >{buttonText}</span>  <span > <FaAngleUp /></span></button>
        ) : (
          <button className="w-full flex justify-between" onClick={() => setValue(keyName)}><span >{buttonText}</span>  <span ><FaAngleDown /></span></button>
        )}
        <div>{value ? <p className="py-2">{textValue}</p> : ""}</div>
      </div>
    </>
  );
};
const Contact = () => {
  const [selectedValue, SetSelectedValue] = useState("section-0");
  return (
    <>
      <div className="section py-5 lg:mx-28">
        <div className="container mx-auto">
            <h1 className="text-4xl p-3 font-bold">Help & Support</h1>
          <div className="">
            <h2 className="text-center text-2xl py-3 font-semibold">FAQ</h2>
          {faqQuestionAns &&
            faqQuestionAns.map((faq,index) => (
                <Accordian
              key={index}
                value={selectedValue === `section-`+index? true : ""}
                setValue={SetSelectedValue}
                textValue={faq.answer}
                keyName={`section-`+index}
                buttonText={faq.question}

              />
            ))}
          </div>
          {/* <Accordian
            value={selectedValue === "section-1" ? true : ""}
            setValue={SetSelectedValue}
            keyName="section-1"
            textValue=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            eget magna fermentum iaculis. Laoreet non curabitur gravida arcu ac
            tortor dignissim. Donec adipiscing tristique risus nec feugiat in
            fermentum. Orci dapibus ultrices in iaculis nunc sed augue. Montes
            nascetur ridiculus mus mauris vitae. Mattis nunc sed blandit libero
            volutpat sed. In est ante in nibh mauris cursus. Velit egestas dui
            id ornare arcu odio ut sem nulla. Quisque non tellus orci ac auctor
            augue mauris augue neque. Mattis molestie a iaculis at erat
            pellentesque adipiscing commodo elit. Amet est placerat in egestas."
          />
          <Accordian
            value={selectedValue === "section-2" ? true : false}
            setValue={SetSelectedValue}
            keyName="section-2"
            textValue=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            eget magna fermentum iaculis. Laoreet non curabitur gravida arcu ac
            tortor dignissim. Donec adipiscing tristique risus nec feugiat in
            fermentum. Orci dapibus ultrices in iaculis nunc sed augue. Montes
            nascetur ridiculus mus mauris vitae. Mattis nunc sed blandit libero
            volutpat sed. In est ante in nibh mauris cursus. Velit egestas dui
            id ornare arcu odio ut sem nulla. Quisque non tellus orci ac auctor
            augue mauris augue neque. Mattis molestie a iaculis at erat
            pellentesque adipiscing commodo elit. Amet est placerat in egestas."
          />
          <Accordian
            value={selectedValue === "section-3" ? true : false}
            setValue={SetSelectedValue}
            keyName="section-3"
            textValue=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo
            eget magna fermentum iaculis. Laoreet non curabitur gravida arcu ac
            tortor dignissim. Donec adipiscing tristique risus nec feugiat in
            fermentum. Orci dapibus ultrices in iaculis nunc sed augue. Montes
            nascetur ridiculus mus mauris vitae. Mattis nunc sed blandit libero
            volutpat sed. In est ante in nibh mauris cursus. Velit egestas dui
            id ornare arcu odio ut sem nulla. Quisque non tellus orci ac auctor
            augue mauris augue neque. Mattis molestie a iaculis at erat
            pellentesque adipiscing commodo elit. Amet est placerat in egestas."
          /> */}
        </div>
      </div>
    </>
  );
};
export default Contact;
