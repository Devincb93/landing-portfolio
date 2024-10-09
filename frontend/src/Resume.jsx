import { Link } from "react-router-dom"

function Resume(){
    return(
        <div class="container mx-auto p-4 text-xs">
    <div className="text-right">
        <Link to='/'>
            <button className="bg-green-700 rounded-md hover:bg-green-900">Go Back</button>
        </Link>
    </div>
    <div class="header text-center">
        <h1 class="text-2xl font-bold">Devin Burkett</h1>
        <p>Los Angeles, CA | 949-484-5278 | <a href="mailto:devincb93@gmail.com" class="underline">devincb93@gmail.com</a></p>
        <p><a href="your-linkedin-url" class="underline">LinkedIn</a> | <a href="your-github-url" class="underline">Github</a> | <a href="your-blog-url" class="underline">Blog</a></p>
    </div>

    
    <div class="summary my-4">
        <h2 class="text-xl font-semibold">Full Stack Software Engineer</h2>
        <p>Full Stack Software Engineer with a passion for creating user-centric solutions and staying at the cutting edge of technology. Experienced in JavaScript, React, and Python with a background in sales and customer service, I have strong skills in communication, collaboration, and adaptability. Those skills, coupled with an eye for detail and creativity, enable me to deliver innovative digital experiences.</p>
    </div>

    
    <div class="technical-skills my-4">
        <h2 class="text-xl font-semibold">Technical Skills</h2>
        <p>Python, JavaScript, React, HTML, CSS, Flask, TailwindCSS, SQL, SQLAlchemy, Python Fire, Formik, Bcrypt, SQLite, Git</p>
    </div>

    
    <div class="technical-projects my-4">
        <h2 class="text-xl font-semibold">Technical Projects</h2>
        <div class="project my-2">
            <h3 class="text-lg font-semibold">Queue-Me App - <a href="your-github-url" class="underline">Github</a> | <a href="your-demo-url" class="underline">Demo</a></h3>
            <ul class="list-disc pl-5">
                <li>An app that lets users easily join, leave, and manage queues, making wait times more organized and efficient.</li>
                <li>Built with React for a dynamic frontend and Flask for backend API, enabling real-time queue management.</li>
                <li>Styled with TailwindCSS to ensure a responsive and adaptable UI across devices.</li>
                <li>Improved queue management with React and Flask to enhance service efficiency.</li>
            </ul>
        </div>
        <div class="project my-2">
            <h3 class="text-lg font-semibold">Library CLI Menu App - <a href="your-github-url" class="underline">Github</a> | <a href="your-demo-url" class="underline">Demo</a></h3>
            <ul class="list-disc pl-5">
                <li>A CLI Menu app that allows users to manage books and authors.</li>
                <li>Built using Python and the Fire library to create an interactive CLI for managing books and authors.</li>
                <li>Mapped a one-to-many author-book relationship with SQLAlchemy for database efficiency.</li>
                <li>Implemented CRUD operations to simplify book and author management via the command line.</li>
            </ul>
        </div>
        <div class="project my-2">
            <h3 class="text-lg font-semibold">Recipe Park App - <a href="your-github-url" class="underline">Github</a> | <a href="your-demo-url" class="underline">Demo</a></h3>
            <ul class="list-disc pl-5">
                <li>An app where users can explore, save, and favorite recipes, with personalized collections for a seamless experience.</li>
                <li>Developed with Flask for backend API, handling CRUD operations, user authentication, and sessions.</li>
                <li>Created a responsive UI with React, featuring a grid layout for recipes, improving user experience.</li>
                <li>Integrated Formik for form validation, ensuring accurate data input and seamless user interaction.</li>
            </ul>
        </div>
    </div>

    
    <div class="experience my-4">
        <h2 class="text-xl font-semibold">Experience</h2>
        <div class="job my-2">
            <h3 class="text-lg font-semibold">KöR Whitening/Evolve Dental Technologies, Irvine, CA (2023-2024)</h3>
            <p><strong>Lab Technician</strong></p>
            <ul class="list-disc pl-5">
                <li>Engineered and fabricated whitening trays by evaluating dental impressions and digital scans to ensure precision.</li>
                <li>Executed quality control measures to enhance whitening effectiveness, achieving consistent results.</li>
                <li>Administered workflow improvements that increased production efficiency.</li>
            </ul>
        </div>
        <div class="job my-2">
            <h3 class="text-lg font-semibold">Eli Alexander Salon, San Juan Capistrano, CA (2021-2022)</h3>
            <p><strong>Hair Stylist</strong></p>
            <ul class="list-disc pl-5">
                <li>Created color treatments and tailored cutting techniques to enhance client satisfaction.</li>
                <li>Communicated effectively with clients to determine preferences, encouraging loyalty and repeat business.</li>
                <li>Adapted quickly to new trends and integrated innovative styles, expanding the salon’s service offerings.</li>
            </ul>
        </div>
        <div class="job my-2">
            <h3 class="text-lg font-semibold">Regal Theaters, Irvine, CA (2019-2020)</h3>
            <p><strong>Cast Member</strong></p>
        </div>
        <div class="job my-2">
            <h3 class="text-lg font-semibold">Bonefish Grill Restaurant, Wesley Chapel, FL (2017-2018)</h3>
            <p><strong>Server</strong></p>
            <ul class="list-disc pl-5">
                <li>Facilitated guest dining experiences by introducing daily specials, recommending selections, and executing multi-course meal service.</li>
                <li>Handled orders with accuracy and expedited meals to ensure seamless service.</li>
                <li>Resolved guest concerns efficiently, encouraging positive reviews and return visits.</li>
            </ul>
        </div>
        <div class="job my-2">
            <h3 class="text-lg font-semibold">Steak N Shake, Tampa, FL (2015-2017)</h3>
            <p><strong>Server</strong></p>
        </div>
        <div class="job my-2">
            <h3 class="text-lg font-semibold">Verizon Wireless, Tampa, FL (2013-2015)</h3>
            <p><strong>Sales Representative</strong></p>
        </div>
    </div>

    
    <div class="education my-4">
        <h2 class="text-xl font-semibold">Education</h2>
        <div class="school">
            <h3 class="text-lg font-semibold">Flatiron School (07/2023 - 08/2024)</h3>
            <p>Full Stack Web Development, Python and JavaScript Online Program</p>
        </div>
    </div>
</div>
    )
}

export default Resume