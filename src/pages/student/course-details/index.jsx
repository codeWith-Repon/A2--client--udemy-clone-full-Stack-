import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { StudentContext } from "@/context/student-context";
import { fetchStudentViewCourseDetailsService } from "@/services";
import { CheckCircle, Globe, Lock, PlayCircle, UserCheck } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

const StudentViewCourseDetailsPage = () => {
  //1st
  const {
    loadingState,
    setLoadingState,
    StudentViewCourseDetails,
    setStudentViewCourseDetails,
    currentCourseDetailsId,
    setCurrentCourseDetailsId,
  } = useContext(StudentContext);

  const { id } = useParams();

  //4th
  async function fetchStudentViewCourseDetails() {
    const response = await fetchStudentViewCourseDetailsService(
      currentCourseDetailsId
    );
    //5th
    if (response?.success) {
      setStudentViewCourseDetails(response?.data);
      setLoadingState(false);
    } else {
      setStudentViewCourseDetails(null);
      setLoadingState(false);
    }
  }

  //3rd
  useEffect(() => {
    if (currentCourseDetailsId !== null) fetchStudentViewCourseDetails();
  }, [currentCourseDetailsId]);

  //2nd
  useEffect(() => {
    if (id) setCurrentCourseDetailsId(id);
  }, [id]);

  //6th
  if (loadingState) return <Skeleton />;

  return (
    <div className="mx-auto p-4">
      <div className="bg-gray-900 text-white p-8 rounded-t-lg">
        <h1 className="text-3xl font-bold mb-4">
          {StudentViewCourseDetails?.title}
        </h1>
        <p className="text-xl mb-4">{StudentViewCourseDetails?.subtitle}</p>
        <div className="flex items-center space-x-4 mt-2 text-sm">
          <span>Created By {StudentViewCourseDetails?.instructorName}</span>
          <span>Created On {StudentViewCourseDetails?.date.split("T")[0]}</span>
          <span className="flex items-center">
            <Globe className="mr-1 h-4 w-4" />
            {StudentViewCourseDetails?.primaryLanguage}
          </span>
          <span className="flex items-center">
            <UserCheck className="mr-1 h-4 w-4" />
            {StudentViewCourseDetails?.students.length}{" "}
            {StudentViewCourseDetails?.students.length <= 1
              ? "Student"
              : "Students"}
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <main className="flex-grow">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What you'll learn</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {StudentViewCourseDetails?.objectives
                  .split(",")
                  .map((objectives, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>{objectives}</span>
                    </li>
                  ))}
              </ul>
            </CardContent>
          </Card>
          {/* problem section */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Course Curriculum</CardTitle>
            </CardHeader>
            <CardContent>
              {StudentViewCourseDetails?.curriculum?.map(
                (curriculumItem, index) => (
                  <li
                    key={index}
                    className={`${
                      curriculumItem?.freePreview
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } flex items-center mb-4`}
                  >
                    {curriculumItem?.freePreview ? (
                      <PlayCircle className="mr-2 h-4 w-4" />
                    ) : (
                      <Lock className="mr-2 h-4 w-4" />
                    )}
                    <span>{curriculumItem?.title}</span>
                  </li>
                )
              )}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default StudentViewCourseDetailsPage;
