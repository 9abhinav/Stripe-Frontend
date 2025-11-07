import React from "react";
import "./AllCourses.css";

const AllCourses = () => {
  const handleEnroll = async (course) => {
    try {
      const res = await fetch("http://localhost:8083/api/payment/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course, amount: 49900 }), // ₹499 per course
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Non-OK response:", res.status, text);
        alert("Payment initiation failed. Check console for details.");
        return;
      }

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No URL returned from backend:", data);
        alert("Failed to create checkout session.");
      }
    } catch (err) {
      console.error("Error initiating payment:", err);
      alert("Error initiating payment. See console.");
    }
  };

  const courses = [
    {
      title: "Full Stack Web Development",
      desc: "Learn front-end, back-end, and databases with real projects.",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Machine Learning with Python",
      desc: "Build predictive models and AI systems using Python.",
      img: "https://techblog.smc.it/static/c5256a11117134b1d5f3bd35c479db40/a41d1/ml.jpg",
    },
    {
      title: "Cybersecurity & Ethical Hacking",
      desc: "Protect systems and networks with security best practices.",
      img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d3?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Data Science & Analytics",
      desc: "Analyze and visualize data using Pandas, NumPy, and PowerBI.",
      img: "https://images.unsplash.com/photo-1551288049-3b2afe19f372?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Cloud Computing with AWS",
      desc: "Master cloud services, EC2, S3, and deployment strategies.",
      img: "https://images.unsplash.com/photo-1508612761958-e9317d1c58bf?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Mobile App Development (React Native)",
      desc: "Create cross-platform mobile apps for iOS and Android.",
      img: "https://images.unsplash.com/photo-1596742578443-7682ef7b7a0f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Artificial Intelligence Basics",
      desc: "Understand neural networks, deep learning, and automation.",
      img: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Database Management Systems",
      desc: "Learn SQL, NoSQL, and database optimization techniques.",
      img: "https://images.unsplash.com/photo-1590608897129-79da98d1592a?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Operating Systems Fundamentals",
      desc: "Understand processes, threads, and scheduling.",
      img: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Frontend Frameworks (React/Angular/Vue)",
      desc: "Design dynamic and responsive UIs using modern JS.",
      img: "https://images.unsplash.com/photo-1581276879432-15a19d654956?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Backend Development with Spring Boot",
      desc: "Build REST APIs and integrate with databases securely.",
      img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "DevOps & CI/CD",
      desc: "Automate deployment pipelines using Jenkins, Docker, and Kubernetes.",
      img: "https://images.unsplash.com/photo-1631624210921-1ffba83b6b1b?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Blockchain & Cryptocurrency",
      desc: "Understand distributed ledgers, smart contracts, and tokens.",
      img: "https://images.unsplash.com/photo-1621516933211-3e8e1dc2ad53?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Artificial Neural Networks",
      desc: "Implement CNNs, RNNs, and LSTMs using TensorFlow.",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Computer Networks",
      desc: "Master OSI, TCP/IP, routing, switching, and network security.",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Software Engineering",
      desc: "Learn SDLC, Agile, and version control with Git & GitHub.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Internet of Things (IoT)",
      desc: "Connect devices and build IoT systems using sensors and cloud.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Enhance problem-solving with algorithms and coding patterns.",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Natural Language Processing (NLP)",
      desc: "Work with text data using spaCy and NLTK.",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Augmented & Virtual Reality",
      desc: "Develop immersive AR/VR experiences using Unity and Unreal.",
      img: "https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "UI/UX Design Principles",
      desc: "Learn user interface design and usability testing.",
      img: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Big Data Technologies",
      desc: "Analyze massive datasets using Hadoop and Spark.",
      img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="all-courses-container">
      <h1>All Courses</h1>
      <div className="course-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <img
              src={course.img}
              alt={course.title}
              onError={(e) =>
                (e.target.src =
                  "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1000&q=80")
              }
            />
            <h3>{course.title}</h3>
            <p>{course.desc}</p>
            <button onClick={() => handleEnroll(course.title)}>Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
