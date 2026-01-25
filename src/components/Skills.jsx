import React from "react"
import SkillsSection from "./SkillsSection"

const data = [
  {
    title: "Programming Languages",
    items: [
      { label: "JavaScript", value: 85 },
      { label: "Python", value: 80 },
      { label: "Java", value: 75 },
    ],
  },
  {
    title: "Web Development",
    items: [
      { label: "React", value: 85 },
      { label: "Tailwind CSS", value: 90 },
      { label: "HTML/CSS", value: 90 },
    ],
  },
  {
    title: "Backend & Databases",
    items: [
      { label: "Node.js/Express", value: 80 },
      { label: "MongoDB", value: 75 },
      { label: "REST APIs", value: 85 },
    ],
  },
  {
    title: "Tools & Technologies",
    items: [
      { label: "Git/GitHub", value: 85 },
      { label: "Vite", value: 80 },
      { label: "Responsive Design", value: 90 },
    ],
  },
]

export default function Skills() {
  return (
    <>
      <div className="bg-black pt-16 w-full fixed top-0 z-9">
        <span className='bg-gray-200 min-w-28.25 min-h-7.5 fixed top-5 left-14'></span>
      </div>
      <SkillsSection data={data} />
    </>
  )
}
