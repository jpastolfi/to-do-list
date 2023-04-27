import React from 'react';

class TaskList extends React.Component {
	render() {
	const { task } = this.props;
		return (
			<p>{ task }</p>
        )
    };
}

export default TaskList;