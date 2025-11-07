import React, { useEffect, useState } from "react";
import "./MyCourses.css";

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [activeCourseId, setActiveCourseId] = useState(null); // For toggling modules

  // ✅ Mock data with modules
  useEffect(() => {
    const coursesData = [
      {
        id: 1,
        title: "Full Stack Web Development",
        desc: "Master front-end and back-end web technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
        instructor: "Prof. Sarah Johnson",
        progress: 75,
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
        modules: [
          { id: 1, title: "HTML & CSS Basics", duration: "2h 30m", status: "Completed" },
          { id: 2, title: "JavaScript Fundamentals", duration: "3h 10m", status: "In Progress" },
          { id: 3, title: "React Components", duration: "2h 45m", status: "Pending" },
        ],
      },
      {
        id: 2,
        title: "Machine Learning with Python",
        desc: "Build intelligent systems using scikit-learn, TensorFlow, and real-world datasets.",
        instructor: "Dr. Michael Chen",
        progress: 45,
        img: "https://images.unsplash.com/photo-1677442135968-8d0f8c24b661?auto=format&fit=crop&w=1000&q=80",
        modules: [
          { id: 1, title: "Introduction to ML", duration: "1h 50m", status: "Completed" },
          { id: 2, title: "Supervised Learning", duration: "3h 00m", status: "In Progress" },
          { id: 3, title: "Neural Networks", duration: "2h 20m", status: "Pending" },
        ],
      },
      {
        id: 3,
        title: "Data Science and Analytics",
        desc: "Perform data analysis and visualization using Pandas, NumPy, and Matplotlib.",
        instructor: "Prof. Amanda Lewis",
        progress: 30,
        img: "https://images.unsplash.com/photo-1551288049-3b2afe19f372?auto=format&fit=crop&w=1000&q=80",
        modules: [
          { id: 1, title: "Python for Data Science", duration: "2h 00m", status: "Completed" },
          { id: 2, title: "Pandas & NumPy", duration: "2h 15m", status: "Pending" },
        ],
      },
      {
        id: 4,
        title: "React Frontend Development",
        desc: "Build modern, dynamic web applications with React, Hooks, and Context API.",
        instructor: "Dr. Robert Park",
        progress: 60,
        img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1000&q=80",
        modules: [
          { id: 1, title: "JSX & Components", duration: "2h 40m", status: "Completed" },
          { id: 2, title: "Hooks Overview", duration: "3h 20m", status: "In Progress" },
          { id: 3, title: "Routing & Navigation", duration: "2h 10m", status: "Pending" },
        ],
      },
      {
        id: 5,
        title: "Database Management Systems",
        desc: "Learn SQL, normalization, transactions, and database design.",
        instructor: "Prof. Emily Rodriguez",
        progress: 20,
        img: "https://images.unsplash.com/photo-1590608897129-79da98d1592a?auto=format&fit=crop&w=1000&q=80",
        modules: [
          { id: 1, title: "SQL Basics", duration: "1h 30m", status: "Completed" },
          { id: 2, title: "Joins & Queries", duration: "2h 00m", status: "Pending" },
          { id: 3, title: "Database Design", duration: "1h 50m", status: "Pending" },
        ],
      },
    ];

    setEnrolledCourses(coursesData);
  }, []);

  // ✅ Toggle Course Modules
  const handleContinue = (id) => {
    setActiveCourseId(activeCourseId === id ? null : id);
  };

  return (
    <div className="mycourses-container">
      <h1>My Courses</h1>

      {enrolledCourses.length === 0 ? (
        <p className="no-courses">You haven’t enrolled in any courses yet.</p>
      ) : (
        <div className="mycourses-grid">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="mycourse-card">
              <img
                src={course.img}
                alt={course.title}
                onError={(e) =>
                  (e.target.src =
                    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80")
                }
              />
              <div className="course-info">
                <h3>{course.title}</h3>
                <p>{course.desc}</p>
                <p className="instructor">
                  <i className="fas fa-user-tie"></i> {course.instructor}
                </p>

                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{course.progress}% complete</span>
                </div>

                <button
                  className="continue-btn"
                  onClick={() => handleContinue(course.id)}
                >
                  {activeCourseId === course.id
                    ? "Hide Modules"
                    : "Continue Learning"}
                </button>

                {/* ✅ Display Modules when Continue is clicked */}
                {activeCourseId === course.id && (
                  <div className="modules-section">
                    <h4>📘 Course Modules</h4>
                    <ul>
                      {course.modules.map((mod) => (
                        <li key={mod.id} className={`module ${mod.status.toLowerCase()}`}>
                          <div className="module-title">{mod.title}</div>
                          <div className="module-meta">
                            <span>⏱ {mod.duration}</span>
                            <span
                              className={`status ${mod.status
                                .toLowerCase()
                                .replace(" ", "-")}`}
                            >
                              {mod.status}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;
