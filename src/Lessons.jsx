function Lessons(){
    return(
        <div className="bg-white min-h-screen p-8 text-slate-950">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold">Computer Literacy Lessons</h1>
                <div className="text-lg leading-8 text-slate-700 space-y-4">
                    <p>
                        This intermediate course in computer literacy is designed for learners who possess foundational digital skills and wish to develop greater proficiency and efficiency in the use of common computing tools.
                    </p>
                    <p>
                        The course begins by strengthening document creation and management skills. Students will engage with advanced formatting techniques, the use of templates, and version control practices. Emphasis is placed on improving accuracy, consistency, and productivity in document-based tasks.
                    </p>
                    <p>
                        The module on file management focuses on effective organization of digital resources. Topics include folder structuring, file naming conventions, data retrieval methods, and the use of cloud storage systems to enable secure and flexible access to documents across devices.
                    </p>
                    <p>
                        In addition, the course introduces collaborative digital practices through cloud-based platforms. Students will learn how to share files, collaborate in real time, manage user permissions, and track document revisions within a shared working environment.
                    </p>
                    <p>
                        The final section addresses fundamental troubleshooting and cybersecurity principles. Learners will be guided through common system issues such as software updates, connectivity challenges, and performance optimization. Core security practices, including password management, identification of phishing attempts, and data protection strategies, will also be covered.
                    </p>
                </div>

                <section className="space-y-4 rounded-3xl bg-slate-950/80 p-6 shadow-xl border border-white/10">
                    <h2 className="text-2xl font-semibold">Advanced Productivity Skills</h2>
                    <p className="text-base leading-7 text-slate-200">
                        Learn how to create and manage documents with advanced formatting, templates, and version control. Explore spreadsheet functions, layout best practices, and productivity features that help you complete work faster and more accurately.
                    </p>
                </section>

                <section className="space-y-4 rounded-3xl bg-slate-950/80 p-6 shadow-xl border border-white/10">
                    <h2 className="text-2xl font-semibold">Smart File Management</h2>
                    <p className="text-base leading-7 text-slate-200">
                        Discover practical ways to organize files, use folders, and maintain backups. Learn how to keep your desktop clutter-free, search for documents quickly, and use cloud storage to access your work from anywhere.
                    </p>
                </section>

                <section className="space-y-4 rounded-3xl bg-slate-950/80 p-6 shadow-xl border border-white/10">
                    <h2 className="text-2xl font-semibold">Cloud Collaboration</h2>
                    <p className="text-base leading-7 text-slate-200">
                        Explore cloud-based tools for sharing documents, collaborating with teams, and managing access. You'll learn how to work together in real time, track changes, and keep everyone synced so your projects move smoothly.
                    </p>
                </section>

                <section className="space-y-4 rounded-3xl bg-slate-950/80 p-6 shadow-xl border border-white/10">
                    <h2 className="text-2xl font-semibold">Troubleshooting and Security</h2>
                    <p className="text-base leading-7 text-slate-200">
                        Build confidence solving common computer issues like software updates, connectivity problems, and performance slowdowns. Learn essential security habits such as using strong passwords, recognizing phishing, and protecting your data.
                    </p>
                </section>
            </div>
        </div>
    )
}
export default Lessons;