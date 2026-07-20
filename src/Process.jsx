import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { useAuth } from "./AuthContext";

const initialTasks = [
  {
    id: 1,
    title: "Introduction to Course Planning",
    description: "Review your learning goals and set a weekly schedule.",
    completed: true,
  },
  {
    id: 2,
    title: "Complete Module 2: Web Foundations",
    description: "Finish the hands-on lab for HTML, CSS, and responsive design.",
    completed: false,
  },
  {
    id: 3,
    title: "Take the progress quiz",
    description: "Validate your new skills with a short knowledge check.",
    completed: false,
  },
  {
    id: 4,
    title: "Schedule mentorship review",
    description: "Book a 1:1 session to get feedback on your project.",
    completed: false,
  },
];

function Process() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState(initialTasks);

  const userName = user?.username ? user.username : "Learner";
  const firstName = userName.split(" ")[0];
  const courseName = `${userName}'s Web Development Path`;

  const completedCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  const progress = useMemo(
    () => Math.round((completedCount / tasks.length) * 100),
    [completedCount, tasks.length]
  );

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-24">
      <div className="mx-auto max-w-6xl space-y-10">
        <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300/70">Learning progress</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white">{firstName}, here's your learning process</h1>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-950/80 p-5 text-center border border-white/10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Tasks completed</p>
                <p className="mt-3 text-3xl font-semibold text-white">{completedCount}</p>
                <p className="text-sm text-slate-400">of {tasks.length}</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 text-center border border-white/10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Overall progress</p>
                <p className="mt-3 text-3xl font-semibold text-white">{progress}%</p>
                <p className="text-sm text-slate-400">Course workflow completion</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-5 text-center border border-white/10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Next milestone</p>
                <p className="mt-3 text-xl font-semibold text-white">Quiz unlock</p>
                <p className="text-sm text-slate-400">Complete module 2 first</p>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl bg-slate-950/70 p-1">
            <div className="h-4 rounded-full bg-slate-800">
              <div
                className="h-4 rounded-full bg-sky-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Current course</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">{courseName}</h2>
                </div>
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/course">Continue course</Link>
                </Button>
              </div>

              <div className="mt-8 space-y-6">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-sm"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold text-white">{task.title}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {task.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${task.completed ? 'bg-emerald-500/15 text-emerald-300' : 'bg-slate-700 text-slate-200'}`}>
                          {task.completed ? 'Completed' : 'Pending'}
                        </span>
                        <Button
                          variant={task.completed ? 'outline' : 'secondary'}
                          size="sm"
                          onClick={() => toggleTask(task.id)}
                        >
                          {task.completed ? 'Undo' : 'Mark done'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Milestones</p>
              <div className="mt-6 space-y-4">
                {[
                  { step: 'Enroll', status: 'Done' },
                  { step: 'Complete module 2', status: 'In progress' },
                  { step: 'Take quiz', status: 'Pending' },
                  { step: 'Book review', status: 'Pending' },
                ].map((item) => (
                  <div key={item.step} className="flex items-center justify-between rounded-3xl bg-slate-950/80 p-4">
                    <div>
                      <p className="font-medium text-white">{item.step}</p>
                      <p className="text-sm text-slate-400">{item.status}</p>
                    </div>
                    <div className={`h-3 w-3 rounded-full ${item.status === 'Done' ? 'bg-emerald-400' : item.status === 'In progress' ? 'bg-amber-400' : 'bg-slate-600'}`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick actions</p>
              <div className="mt-6 space-y-4">
                <Button asChild size="lg" className="w-full rounded-full">
                  <Link to="/course">Explore another course</Link>
                </Button>
                <Button variant="outline" asChild size="lg" className="w-full rounded-full">
                  <Link to="/lessons">Go to lessons</Link>
                </Button>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

export default Process;
