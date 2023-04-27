import React from 'react';
import TaskList from './TaskList';

class InputField extends React.Component {
	state = {
		taskList: [],
		taskInput: '',
		savedTaskList: [],
	}

  handleInput = ({target}) => {
    const { name, value } = target;
    this.setState({
    [name]: value,
    })
  }

	addTask = () => {
		const { taskList, taskInput } = this.state;
		this.setState({
			taskList: [...taskList, taskInput ],
			taskInput: '',
		})
	}

	removeTask = (task) => {
		const { taskList } = this.state;
		const savedTaskList = [...taskList];
		this.setState({
			taskList: taskList.filter((currentTask) => currentTask !== task),
			savedTaskList,
		})
	}

	recoverTask = () => {
		const { savedTaskList } = this.state;
		this.setState({
			taskList: savedTaskList,
		})
	}

	render() {
		const { taskList, taskInput } = this.state;
		return (
			<div className='main-content'>
				<div className='input-container'>
					<label htmlFor="">What do you want to add to the task list?
						<input className='input-field' placeholder="Type a task" onChange={ this.handleInput } type="text" name="taskInput" id="" value={ taskInput } />
					</label>
					<button className="add-task-btn" onClick={ this.addTask } disabled={ taskInput === '' }>Add to task list</button>
					<button className="add-task-btn" onClick={ this.recoverTask }>Undo</button>
				</div>
				<ul className='list'>
				{ taskList.map((task, index) => (
					<li className='list-item' key={index+1}>
						<TaskList task={task} />
						<button onClick={ () => this.removeTask(task) } className='remove-task-btn' type="button">Excluir</button>
					</li>
				)) }
				</ul>
			</div>
			)
	}
}

export default InputField;