import { StudentContext } from "@/context/student-context";
import { fetchStudentViewCourseDetailsService } from "@/services";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

const StudentViewCourseDetailsPage = () => {
  //1st
  const {
    StudentViewCourseDetailsPage,
    setStudentViewCourseDetailsPage,
    currentCourseDetailsId,
    setCurrentCourseDetailsId,
  } = useContext(StudentContext);

  const { id } = useParams();

  //4th
  async function fetchStudentViewCourseDetails() {
    const response = await fetchStudentViewCourseDetailsService(
      currentCourseDetailsId
    );

    console.log(response, "response");
  }

  //3rd
  useEffect(() => {
    if (currentCourseDetailsId !== null) fetchStudentViewCourseDetails();
  }, [currentCourseDetailsId]);

  //2nd
  useEffect(() => {
    if (id) setCurrentCourseDetailsId(id);
  }, [id]);

  return <div>StudentViewCourseDetailsPage</div>;
};

export default StudentViewCourseDetailsPage;
