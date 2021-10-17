import React from 'react'
const task = [
    {
        id: 1,
        name: 'Write some code',
        description: 'In deserunt reprehenderit magna dolore ad enim.',
        date: '2020-01-01',
        reminder: true
    },
    {
        id: 2,
        name: 'Get the groceries',
        description: 'In deserunt reprehenderit magna dolore ad enim.',
        date: '2020-01-01',
        reminder: true
    },
    {
        id: 3,
        name: 'Clean your code',
        description: 'In deserunt reprehenderit magna dolore ad enim.',
        date: '2020-01-01',
        reminder: true
    },
    {
        id: 4,
        name: 'publish the code',
        description: 'In deserunt reprehenderit magna dolore ad enim.',
        date: '2020-01-01',
        reminder: true
    },
    {
        id: 5,
        name: 'File a bug on github',
        description: 'In deserunt reprehenderit magna dolore ad enim.',
        date: '2020-01-01',
        reminder: false
    },
];
function Task() {
    return (
        <div className='task-container'>
            {task.map((task) => (
                <div className={[
                    'task',
                    (task.reminder === true) ? 'reminder' : ''
                ].join(' ')}>
                    <h3>
                        {task.name}
                    </h3>
                    <p>
                        {task.description}
                    </p>
                    <h4>
                        {task.date}
                    </h4>
                </div>
            )
            )
            }
        </div>
    );
}

export default Task;
