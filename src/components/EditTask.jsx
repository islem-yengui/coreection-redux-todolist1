import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { edit } from '../redux/action';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const EditTask = ({task}) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [text, setText] = useState(task.action)
   const dispatch = useDispatch()
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
      }
      const handleSubmit = (e) => { 
        e.preventDefault();
        const newTask = {
            id:task.id,
            isDone:task.isDone,
            action:text
        }
    dispatch(edit(newTask))
    closeModal()
    }
  return (
    <div>
        <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
          <form action=""  onSubmit={handleSubmit}>
              <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
              <button>Confirm</button>
              <button  onClick={closeModal} >Cancel</button>
          </form>
      </Modal>
    </div>
  )
}

export default EditTask