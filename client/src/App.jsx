import React from 'react'

import { Route,Routes } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDteails from './pages/student/CourseDteails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
 import Loading from './component/student/Loading'
import Educator from './pages/student/educator/Educator'
import Dashboard from './pages/student/educator/Dashboard'
import AddCourse from './pages/student/educator/AddCourse'
import MyCourses from './pages/student/educator/MyCourses'
import StudentEnrolled from './pages/student/educator/StudentEnrolled'
import Navbar from './component/student/Navbar'

const App = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}   />
     <Route path='/course-list' element={<CoursesList/>}/>
     <Route path='/course-list/:input' element={<CoursesList/>}/>
     <Route path='/course/:id' element={<CourseDteails/>}/>
     <Route path='/My-enrollments' element={<MyEnrollments/>}/>
     <Route path='/player/:courseId' element={<Player/>}/>
      <Route path='/loading/:path' element={<Loading/>}/>
     <Route path='/educator' element={<Educator/>}>
     <Route path='educator' element={<Dashboard/>}/>
     <Route path='add-course' element={<AddCourse/>}/>
     <Route path='my-courses' element={<MyCourses/>}/>
     <Route path='student-enrolled' element={<StudentEnrolled/>}/>

     </Route>
    </Routes>
    </div>
  )
}

export default App
