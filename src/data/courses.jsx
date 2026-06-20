import graphic from '../assets/graphic.jpg';
import literacy from '../assets/literacy.png';
import music from '../assets/music.webp';
import photography from '../assets/photography.jpg';
import software from '../assets/software.webp';
import videography from '../assets/videography.jpeg';

export const Courses = [
        {
            id: 1,
            title: 'Software Development',
            category: 'Software Engineering',
            summary: 'Master coding fundamentals and full-stack development to build responsive web apps and launch your tech career.',
            description: 'Dive into the world of coding and learn to build the digital world from scratch. This course takes you from programming fundamentals to full-stack application development. You will master core languages like Python, JavaScript, and SQL, understand version control with Git, and learn how to design, test, and deploy responsive web apps. By the end of this course, you will have a portfolio of real-world projects and the problem-solving mindset required to launch a career as a software engineer.  ',
            price: '$205',
            level: 'Intermediate',
            duration: '6 months',
            image:  software,
            spotsLeft: 30,
            lessons: [
                { id: 1, title: 'Programming Fundamentals & Logic' },
                { id: 2, title: 'Front-End Web Engineering' },
                { id: 3, title: 'Back-End Infrastructure & APIs' },
                { id: 4, title: 'Databases, Testing, & DevOps Deployment' },
            ] 
        },
        {
            id: 2,
            title: 'Photography',
            category: 'Visual Arts',
            summary: 'Step off manual mode and master exposure, composition, and lighting to capture breathtaking professional photos.',
            description: 'Unlock the full potential of your camera and learn to see the world like a professional photographer. This course strips away the confusion of manual mode, teaching you how to master the "exposure triangle"—aperture, shutter speed, and ISO—to perfectly control light. You will explore creative composition, portraiture, landscape photography, and basic digital photo editing. Whether you are using a DSLR, mirrorless camera, or a smartphone, you will finish this course with the technical prowess and artistic eye to capture stunning images.',
            price: '$145',
            level: 'Beginner',
            duration: '4 months',
            image:  photography,
            spotsLeft: 22,
            
        },
        {
            id: 3,
            title: 'Computer Literacy',
            category: 'Foundational Tech',
            summary: 'Gain essential digital skills, from file management to office software, and navigate technology with confidence.',
            description: 'Conquer the digital divide and gain confidence using modern technology. Designed specifically for absolute beginners, this course covers the absolute essentials of operating a computer. You will learn how to navigate Windows and macOS environments, manage files securely, master internet browsing and email etiquette, and utilize essential office software like Microsoft Word and Excel. This is your stress-free gateway to navigating the modern digital workforce and staying connected with the world.',
            price: '$75',
            level: 'Basic',
            duration: '3 months',
            image:  literacy,
            spotsLeft: 74
        },
        {
            id: 4,
            title: 'Music and Audio Production',
            category: 'Audio Engineering',
            summary: 'Learn to record, mix, and master your own tracks or podcasts using professional audio engineering tools.',
            description: 'Transform your musical ideas into polished, radio-ready tracks. This course introduces you to the exciting world of audio engineering and digital music creation. Working inside a Digital Audio Workstation (DAW), you will learn the fundamentals of MIDI sequencing, recording live instruments, vocal production, and the intricate arts of mixing and mastering (using EQ, compression, and effects). Perfect for aspiring music producers, podcasters, and sound designers looking to achieve professional-grade audio.',
            price: '$245',
            level: 'Advanced Beginner',
            duration: '8 months',
            image:  music,
            spotsLeft: 30
        },
        {
            id: 5,
            title: 'Graphic Design',
            category: 'Visual Communication',
            summary: 'Learn typography, color theory, and Adobe tools to create stunning logos, branding, and marketing visuals.',
            description: 'Learn the art of visual storytelling and turn your creative ideas into high-impact designs. This course explores the core principles of typography, color theory, branding, and layout design. Through hands-on projects, you will gain mastery over industry-standard tools like Adobe Photoshop, Illustrator, and InDesign. Whether you want to design logos, social media graphics, marketing materials, or user interfaces, this course will help you build a professional design portfolio from the ground up.' ,
            price: '$190',
            level: 'Beginner',
            duration: '7 months',
            image:  graphic,
            spotsLeft: 93
        },
        {
            id: 6,
            title: 'Videography',
            category: 'Media Production',
            summary: 'Master camera operation, lighting, and video editing to shoot and produce cinematic, high-quality stories.',
            description: 'Unlock the full potential of your camera and learn to see the world like a professional photographer. This course strips away the confusion of manual mode, teaching you how to master the "exposure triangle"—aperture, shutter speed, and ISO—to perfectly control light. You will explore creative composition, portraiture, landscape photography, and basic digital photo editing. Whether you are using a DSLR, mirrorless camera, or a smartphone, you will finish this course with the technical prowess and artistic eye to capture stunning images.',
            price: '$275',
            level: 'Advanced',
            duration: '9 months',
            image:  videography,
            spotsLeft: 76
    
        }
 ]