import { useEffect } from 'react';
import { motion } from 'framer-motion';

const siteData = {
  name: 'Kittokinz',
  role: 'Creative UX/UI Designer',
  tagline: 'Xây dựng trải nghiệm web hiện đại, đậm chất nghệ thuật và công nghệ.',
  skills: [
    { label: 'Thiết kế trải nghiệm', level: 92, color: '#00D4FF' },
    { label: 'Thiết kế giao diện', level: 88, color: '#7C3AED' },
    { label: 'Hiệu ứng tương tác', level: 84, color: '#FF4D9D' },
    { label: 'Thiết kế 3D giả', level: 78, color: '#8B5CF6' },
  ],
  projects: [
    { title: 'Nebula Studio', description: 'Landing page thương hiệu với trải nghiệm gradient và các lớp chiều sâu.', tags: ['UI', 'Brand', 'Motion'], image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=640&q=80' },
    { title: 'Aurora Labs', description: 'Portfolio kỹ thuật số với hệ thống màu neon và hiệu ứng cuộn mượt mà.', tags: ['Web', 'Animation', 'Responsive'], image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=640&q=80' },
    { title: 'Pulse Card', description: 'Thiết kế thẻ sản phẩm cao cấp với hiệu ứng nổi và ánh sáng động.', tags: ['Product', 'Interaction', '3D'], image: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=640&q=80' },
  ],
  experience: [
    { year: '2025', role: 'Senior Designer', company: 'Lava Studio', detail: 'Điều phối dự án trải nghiệm số cho khách hàng cao cấp.' },
    { year: '2023', role: 'Lead UI Designer', company: 'Glow Creative', detail: 'Thiết kế hệ thống nhận diện thương hiệu và sản phẩm tương tác.' },
    { year: '2021', role: 'Motion Designer', company: 'Pixel Wave', detail: 'Xây dựng hiệu ứng chuyển động và trải nghiệm 3D giả cho web.' },
  ],
};

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const gradientBlobs = [
  { className: 'blob blob-1', delay: 0 },
  { className: 'blob blob-2', delay: 0.2 },
  { className: 'blob blob-3', delay: 0.4 },
];

function App() {
  useEffect(() => {
    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));

    const handleClick = (event) => {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const target = href ? document.querySelector(href) : null;
      target?.scrollIntoView({ behavior: 'smooth' });
    };

    anchors.forEach((anchor) => anchor.addEventListener('click', handleClick));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleClick));
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="app-shell">
      <div className="background-layer" />
      <div className="noise-layer" />

      <nav className="site-nav">
        <div className="nav-inner">
          <a href="#" className="nav-brand">Kittokinz</a>
          <div className="nav-links">
            <a href="#about">Giới thiệu</a>
            <a href="#projects">Dự án</a>
            <a href="#experience">Hành trình</a>
            <a href="#contact">Liên hệ</a>
          </div>
        </div>
      </nav>

      <header className="hero-section">
        {gradientBlobs.map((blob) => (
          <motion.div
            key={blob.className}
            className={blob.className}
            initial={{ opacity: 0, scale: 0.8, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: blob.delay, repeat: Infinity, repeatType: 'reverse', repeatDelay: 3 }}
          />
        ))}

        <div className="hero-content">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="eyebrow">Portfolio Cá Nhân</span>
            <h1>{siteData.name}</h1>
            <p className="hero-subtitle">{siteData.role}</p>
            <p>{siteData.tagline}</p>
            <div className="hero-actions">
              <a href="#projects" className="glow-button">Xem Dự Án</a>
              <a href="#contact" className="ghost-button">Liên hệ</a>
            </div>
          </motion.div>

          <motion.div className="hero-avatar-wrapper" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}>
            <img
              src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/605630868_1374713017477417_5462270144693449261_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEM_PLkpnb56bt8QkKU3e562Z8nIGQjACHZnycgZCMAIc4YkzYUoUPRrtbRkIqOKmtWe_OXse-Gqe-_0uOcvQHy&_nc_ohc=1Mwks3hPfGYQ7kNvwHW9vxM&_nc_oc=Ado25agjKiz3Z3q4WY4--8p5g0jiVY9fW96P0XW1W-WLLyO8exRISafBUJN-jMk_Lkw&_nc_zt=23&_nc_ht=scontent.fsgn2-7.fna&_nc_gid=OslV3dM9_-R0FnDJMx7xVA&_nc_ss=7b2a8&oh=00_Af4GQ0uL9RwpSpieyBx-RvlmgShwH74hcrgjaY7iWqxc5Q&oe=69FF5ACD"
              alt="Profile avatar"
              className="hero-avatar"
            />
          </motion.div>

          <motion.div className="hero-image-wrapper" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }}>
            <img
              className="hero-image"
              src="https://via.placeholder.com/640x640.png?text=Ảnh+Portfolio"
              alt="Ảnh minh họa portfolio"
            />
          </motion.div>

          <motion.div className="hero-metrics" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.2 }}>
            <div className="metric-card">
              <span>12+</span>
              <p>Năm kinh nghiệm thiết kế</p>
            </div>
            <div className="metric-card">
              <span>30+</span>
              <p>Dự án sáng tạo</p>
            </div>
          </motion.div>
        </div>
      </header>

      <main>
        <motion.section id="about" className="section about-section" variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <div className="section-heading"><span>01</span><h2>Giới thiệu</h2></div>
          <div className="about-grid">
            <div className="about-copy">
              <p>Tôi tạo ra những trải nghiệm kỹ thuật số hiện đại bằng cách hòa quyện màu sắc, chuyển động và cấu trúc trực quan.</p>
              <p>Thiết kế của tôi tập trung vào sự sang trọng, rõ ràng và cảm giác đậm chất công nghệ, phù hợp cho portfolio, thương hiệu và sản phẩm cao cấp.</p>
            </div>
            <div className="skill-panel">
              {siteData.skills.map((skill) => (
                <div className="skill-row" key={skill.label}>
                  <div className="skill-header">
                    <span>{skill.label}</span>
                    <strong>{skill.level}%</strong>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: `${skill.level}%`, background: skill.color }} />
                  </div>
                </div>
              ))}
            </div>
            <motion.div className="about-image-wrapper" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <img
                className="about-image"
                src="https://via.placeholder.com/400x400.png?text=Hình+Ảnh+Cá+Nhân"
                alt="Hình ảnh cá nhân"
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section id="projects" className="section projects-section" variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <div className="section-heading"><span>02</span><h2>Dự án nổi bật</h2></div>
          <div className="project-grid">
            {siteData.projects.map((project, index) => (
              <motion.article className="project-card" key={project.title} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <div className={`project-accent accent-${index + 1}`} />
                <img className="project-image" src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="experience" className="section experience-section" variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <div className="section-heading"><span>03</span><h2>Hành trình</h2></div>
          <div className="timeline">
            {siteData.experience.map((item, idx) => (
              <motion.div className="timeline-item" key={item.company} initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, delay: idx * 0.1 }}>
                <div className="timeline-marker" />
                <div>
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="section contact-section" variants={sectionFade} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }}>
          <div className="section-heading"><span>04</span><h2>Liên hệ</h2></div>
          <div className="contact-grid">
            <div className="contact-copy">
              <h3>Chuẩn bị bắt đầu dự án tiếp theo?</h3>
              <p>Gửi tin nhắn để kết nối, cộng tác và tạo ra trải nghiệm kỹ thuật số ấn tượng.</p>
              <div className="social-row">
                <a href="#" className="social-pill">Behance</a>
                <a href="#" className="social-pill">Dribbble</a>
                <a href="#" className="social-pill">LinkedIn</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Tên của bạn
                <input type="text" placeholder="Nguyễn Văn A" aria-label="Tên của bạn" />
              </label>
              <label>
                Email
                <input type="email" placeholder="email@domain.com" aria-label="Email" />
              </label>
              <label>
                Tin nhắn
                <textarea rows="4" placeholder="Mô tả ngắn về dự án..." aria-label="Tin nhắn" />
              </label>
              <button type="submit" className="glow-button">Gửi liên hệ</button>
            </form>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default App;
