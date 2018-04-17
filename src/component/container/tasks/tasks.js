import React from 'react';
import ReactModal from 'react-modal';
import EditTask from '../edit-task'
import Task from '../../presentation/task';
import './main.css'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCurrentTask, currentListName, currentTaskType } from '../../../actions/board';
import { updateModalStatus } from '../../../actions/common';
class Tasks extends React.Component {
    constructor(props) {
        super(props)

        this.task = {
            name: null,
            description: null,
            dueDate: null,
            status: props.list.name
        }

        this.state = {
            list: props.list,
            showModal: false
        }
    }

    render() {
        const { list } = this.props;
        return (
            <div className="col-md-4">
                <div className="panel panel-default board-section">
                    
                    <div className="panel-body">
                    {list.name}
                        {
                            list.taskList.map((task, i) => {
                                return <Task key={i} task={task} handleClick={this.props.handleClick} index={i} />
                            })
                        }
                     
                    </div>
                </div>
                <ReactModal
                    isOpen={this.props.modalOpen}
                    contentLabel="Add Task"
                    onRequestClose={this.handleCloseModal}
                    className="Modal"
                    overlayClassName="Overlay"
                >
                    <EditTask/>
                </ReactModal>
            </div>
        )
    }
}

// export default Tasks;

function mapStateToProps(state) {
    return {
        modalOpen: state.common.modalOpen,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateModalStatusAction: bindActionCreators(updateModalStatus, dispatch),
        updateCurrentTaskAction: bindActionCreators(updateCurrentTask, dispatch),
        currentListNameAction: bindActionCreators(currentListName, dispatch),
        currentTaskTypeAction: bindActionCreators(currentTaskType, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);