import React from "react";
import Header from "../components/common/Header";
import Hero from "../components/Hero";
import CourseCarousel from "../components/CourseCarousel";
const gsFoundationCourses = [
  { id: 1, title: "Foundation Course 2025", price: 125000 },
  { id: 2, title: "Foundation Course 2026", price: 225000 },
  { id: 3, title: "Foundation Course 2027", price: 325000 },
  { id: 4, title: "Foundation Course 2028", price: 425000 },
  { id: 5, title: "Foundation Course 2027", price: 325000 },
  { id: 6, title: "Foundation Course 2028", price: 425000 },
];

const testSeriesCourses = [
  { id: 7, title: "Test Series 2025", price: 15000 },
  { id: 8, title: "Test Series 2026", price: 18000 },
  { id: 9, title: "Test Series 2027", price: 20000 },
  { id: 10, title: "Test Series 2027", price: 20000 },
  { id: 11, title: "Test Series 2027", price: 20000 },
];

const subjectWiseCourses = [
  { id: 12, title: "Economics Course", price: 45000 },
  { id: 13, title: "History Course", price: 40000 },
  { id: 14, title: "Geography Course", price: 50000 },
  { id: 15, title: "Economics Course", price: 45000 },
  { id: 16, title: "History Course", price: 40000 },
  { id: 17, title: "Geography Course", price: 50000 },
];

const Homepage = () => {
  return (
    <div>
      <Hero />
      <div>
        {/* Carousel for GS Foundation */}
        <CourseCarousel
          categoryTitle="GS Foundation Courses"
          courses={gsFoundationCourses}
        />
      </div>
      <div>
        {/* Carousel for Test Series */}
        <CourseCarousel
          categoryTitle="Test Series"
          courses={testSeriesCourses}
        />
      </div>
      <div>
        {/* Carousel for Subject-Wise Courses */}
        <CourseCarousel
          categoryTitle="Subject-Wise Courses"
          courses={subjectWiseCourses}
        />
      </div>
    </div>
  );
};

export default Homepage;
