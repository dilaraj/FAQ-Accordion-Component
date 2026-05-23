import './App.css'
import ExpandingComponent from './faq-expanding-component/ExpandingComponent'

// Background Image
import mobileBgImg from './assets/images/background-pattern-mobile.svg'
import desktopBgImg from './assets/images/background-pattern-desktop.svg'

// Icons
import starIcon from './assets/images/icon-star.svg'

export default function App() {
  return (
    <>
      <img src={mobileBgImg} alt="Mobile Background Image" className="mobileBgImg bg-img" />
      <img src={desktopBgImg} alt="Desktop Background Image" className="desktopBgImg bg-img" />

      <div className="faq-accordion-main-container">
        <div className="faq-accordion-container">
          <div className="faq-header">
            <img src={starIcon} alt="Star Icon" className="star-icon" />
            <span>FAQs</span>
          </div>
          <div className="faq-accordion-questions">
            <ExpandingComponent 
              FAQuestion={'What is Frontend Mentor, and how will it help me?'}
              FAQAnswer={"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and Javascript. It's suitable for all levels and ideal for portfolio building."}
            />
            <div className="line"></div>

            <ExpandingComponent 
              FAQuestion={'Is Frontend Mentor Free?'}
              FAQAnswer={"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."}
            />
            <div className="line"></div>

            <ExpandingComponent 
              FAQuestion={'Can I use Frontend Mentor projects in my portfolio?'}
              FAQAnswer={"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"}
            />
            <div className="line"></div>

            <ExpandingComponent 
              FAQuestion={'How can I get help if Im stuck on a challenge?'}
              FAQAnswer={"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."}
            />
          </div>
        </div>
      </div>
    </>
  )
}