import React from 'react';
import './AllCourses.css'; // optional if you have one
import { useNavigate } from 'react-router-dom';

const AllCourses = () => {
    const navigate = useNavigate();

    // 🔹 Function to handle payment through backend
    const handleEnroll = async (course) => {
        try {
            const res = await fetch('http://localhost:8083/api/payment/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ course, amount: 49900 }) // ₹499 per course
            });

            if (!res.ok) {
                const text = await res.text();
                console.error('Non-OK response:', res.status, text);
                alert('Payment initiation failed. Check console for details.');
                return;
            }

            const data = await res.json();
            if (data.url) {
                // Redirect user to Stripe Checkout
                window.location.href = data.url;
            } else {
                console.error('No URL returned from backend:', data);
                alert('Failed to create checkout session.');
            }
        } catch (err) {
            console.error('Error initiating payment:', err);
            alert('Error initiating payment. See console.');
        }
    };

    // 🔹 Same courses as in Popular Courses section
    const courses = [
        { title: 'Full Stack Development', img: '/fullstack.jpg', desc: 'Master modern web technologies' },
        { title: 'Network Protocols & Security', img: '/security.jpg', desc: 'Learn cybersecurity fundamentals' },
        { title: 'Database Management Systems', img: '/dbms.jpg', desc: 'Master SQL and NoSQL databases' },
        { title: 'Operating Systems', img: '/os.jpg', desc: 'Understand OS fundamentals' },
        { title: 'AI & Machine Learning', img: '/aiml.jpg', desc: 'Explore ML algorithms & AI concepts' },
        { title: 'Data Structures & Algorithms', img: '/dsa.jpg', desc: 'Master DSA concepts' },
        { title: 'Frontend Frameworks', img: '/frontend.jpg', desc: 'React, Angular, and Vue.js' },
    ];

    return (
        <div className="all-courses-page">
            <h1 style={{ textAlign: 'center', margin: '20px 0' }}>All Courses</h1>

            <div className="course-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px',
                padding: '20px'
            }}>
                {courses.map((course, idx) => (
                    <div key={idx} className="course-card" style={{
                        border: '1px solid #ddd',
                        borderRadius: '12px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        textAlign: 'center',
                        padding: '15px',
                        backgroundColor: '#fff',
                        transition: 'transform 0.3s ease'
                    }}>
                        <img
                            src={course.img}
                            alt={course.title}
                            style={{
                                width: '100%',
                                height: '180px',
                                objectFit: 'cover',
                                borderRadius: '10px'
                            }}
                            onError={(e) => {
                                e.target.src =
                                    'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                            }}
                        />
                        <h3 style={{ marginTop: '15px' }}>{course.title}</h3>
                        <p style={{ color: '#555', fontSize: '14px', marginBottom: '15px' }}>{course.desc}</p>
                        <button
                            style={{
                                backgroundColor: '#4f46e5',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '10px 15px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease'
                            }}
                            onClick={() => handleEnroll(course.title)}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#3730a3'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#4f46e5'}
                        >
                            Enroll Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllCourses;
