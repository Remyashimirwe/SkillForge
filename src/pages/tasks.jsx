import { useState } from "react";
function Tasks (){
     const [modules, setModules] = useState([
    { id: 1, name: 'Introduction to React', isCompleted: false },
    { id: 2, name: 'State & Props', isCompleted: false },
    { id: 3, name: 'Hooks (useState, useEffect)', isCompleted: false },
    { id: 4, name: 'Routing with React Router', isCompleted: false },
  ]);

  // 2. Calculate progress dynamically
  const totalModules = modules.length;
  const completedModules = modules.filter((mod) => mod.isCompleted).length;
  const progressPercentage = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;

  // 3. Toggle completion status
  const handleToggleComplete = (id) => {
    setModules(
      modules.map((mod) =>
        mod.id === id ? { ...mod, isCompleted: !mod.isCompleted } : mod
      )
    );
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>Course Progress</h2>
      
      {/* Progress Bar Container (Track) */}
      <div style={{
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: '8px',
        height: '23px',
        overflow: 'hidden',
        marginBottom: '10px'
      }}>
        {/* Animated Progress Bar Filler */}
        <div style={{
          width: `${progressPercentage}%`,
          backgroundColor: '#4caf50',
          height: '100%',
          transition: 'width 0.4s ease-in-out', // Smooth transition when ticked
        }} />
      </div>
      
      <p style={{ textAlign: 'right', fontSize: '14px', color: '#555' }}>
        {completedModules} of {totalModules} modules completed ({Math.round(progressPercentage)}%)
      </p>

      {/* Module Checklist */}
      <div style={{ marginTop: '20px' }}>
        {modules.map((mod) => (
          <div 
            key={mod.id} 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '10px', 
              borderBottom: '1px solid #eee' 
            }}
          >
            <input
              type="checkbox"
              id={`mod-${mod.id}`}
              checked={mod.isCompleted}
              onChange={() => handleToggleComplete(mod.id)}
              style={{ marginRight: '12px', transform: 'scale(1.2)', cursor: 'pointer' }}
            />
            <label 
              htmlFor={`mod-${mod.id}`}
              style={{ 
                textDecoration: mod.isCompleted ? 'line-through' : 'none',
                color: mod.isCompleted ? '#888' : '#000',
                cursor: 'pointer'
              }}
            >
              {mod.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks

