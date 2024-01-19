import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//Importar hoja de estilos
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, remove }) => {

    useEffect(() => {
        console.log('Tarea Creada');
        return () => {
            console.log(`Task: ${task.name} is going to unmount`);
        };
    }, [task]);

    /**
     * Returns a badge depending on the task level
     */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(<h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>);
            case LEVELS.URGENT:
                return(<h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>);
            case LEVELS.BLOCKING:
                return(<h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>);
            default:
                break;
        }
    }

    /**
     * 
     * @returns icon depende on trask completion
     */
    function taskCompletedIcon(){
        if (task.completed)
            return (<i 
                className='bi-toggle-on task-action' 
                style={{color: 'green'}} 
                onClick={() => complete(task)}>
                </i>);
        else
            return (<i 
                className='bi-toggle-off task-action' 
                style={{color: 'grey'}} 
                onClick={() => complete(task)}>
            </i>);   
    }

    const taskCompleted = {
        color: 'gray',
        fontWeight: 'bold',
        textDecoration: 'line-through'
    }

    const taskPending = {
        fontWeight: 'bold',
        color: 'tomato'
    }

    return (
        <tr className='fw-normal' style={task.completed ? taskCompleted : taskPending}>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Ejecutar funcion para devolver el badge */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/* TODO: Sustituir por iconos */}
                {taskCompletedIcon()}
                <i className='bi-trash task-action' 
                    style={{color: 'tomato'}} 
                    onClick={() => remove(task)}></i>
            </td>
        </tr>       
    );
};


TaskComponent.propTypes = {
    task : PropTypes.instanceOf(Task).isRequired,
    complete : PropTypes.func.isRequired,
    remove : PropTypes.func.isRequired,
};


export default TaskComponent;
