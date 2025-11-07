import { useNavigate } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
    // Handle Stripe payment through Spring Boot backend
    const handleEnroll = async (course) => {
        try {
            const res = await fetch('http://localhost:8083/api/payment/create-checkout-session', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ course, amount: 49900 }) // amount in paisa (₹499)
            });

            // Check if backend responded properly
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

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login');
    };

    return (
        <div className="landing-page">
            <section className="hero">
                <nav className="navbar">
                    <div className="logo">Learning Hub</div>
                    <div className="nav-links">
                        <a href="#courses">Courses</a>
                        <a href="#about">About</a>
                        <a href="#contact">Contact</a>
                        <button className="login-btn" onClick={() => navigate('/login')}>
                            <b><i>Login</i></b>
                        </button>
                    </div>
                </nav>
                <div className="hero-content">
                    <h1>Start Your Learning Journey Today</h1>
                    <h1>Welcome to Learning Hub</h1>
                    <p>Access thousands of courses from expert instructors worldwide</p>
                    <button
                        className="cta-btn"
                        onClick={() => navigate('/login')}
                    >
                        Get Started
                    </button>
                </div>
            </section>

            <section className="features" id="about">
                <h2>Why Choose Learning Hub?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <i className="fas fa-laptop-code"></i>
                        <h3>Expert Instructors</h3>
                        <p>Learn from industry professionals</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-clock"></i>
                        <h3>Flexible Learning</h3>
                        <p>Study at your own pace</p>
                    </div>
                    <div className="feature-card">
                        <i className="fas fa-certificate"></i>
                        <h3>Certificates</h3>
                        <p>Earn recognized certificates</p>
                    </div>
                </div>
            </section>

            <section className="courses" id="courses">
                <h2>Popular Courses</h2>
                <div className="course-grid">
                    {[
                        { title: 'Full Stack Development', img: '/fullstack.jpg' },
                        { title: 'Network Protocols & Security', img: '/security.jpg' },
                        { title: 'Database Management Systems', img: '/dbms.jpg' },
                        { title: 'Operating Systems', img: '/os.jpg' },
                        { title: 'AI & Machine Learning', img: '/aiml.jpg' },
                        { title: 'Data Structures & Algorithms', img: '/dsa.jpg' },
                        { title: 'Frontend Frameworks', img: '/frontend.jpg' },
                    ].map((course, idx) => (
                        <div className="course-card" key={idx}>
                            <img
                                src={course.img}
                                alt={course.title}
                                onError={(e) => {
                                    e.target.src =
                                        'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';
                                }}
                            />
                            <h3>{course.title}</h3>
                            <p>Click below to enroll</p>
                            <button onClick={() => handleEnroll(course.title)}>Enroll Now</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta">
                <h2>Ready to Start Learning?</h2>
                <p>Join thousands of students already learning on Learning Hub</p>
                <button className="cta-btn" onClick={handleGetStarted}>
                    Join Now
                </button>
            </section>

            <footer className="footer" id="contact">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>Learning Hub</h4>
                        <p>Empowering learners worldwide</p>
                    </div>
                    <div className="footer-section">
                        <h4>Quick Links</h4>
                        <a href="#courses">Courses</a>
                        <a href="#about">About Us</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <p>Email: learninghubfsad@gmail.com</p>
                        <p>Phone: (+91) 9491578736</p>
                    </div>
                    <div className="footer-section">
                        <h4>Follow Us</h4>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-facebook"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Learning Hub. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Landing;
