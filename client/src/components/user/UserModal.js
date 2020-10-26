import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import UserDetailForm from "./UserDetailForm";

const UserModal = ({ userData, isOpen, onClose }) => {
  const [editModal, setEditModal] = useState(false);
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>User Detail</ModalHeader>
      <ModalBody>
        <UserDetailForm editModal={editModal} userData={userData} />
      </ModalBody>
      <ModalFooter>
        <Button outline onClick={onClose}>
          Close
        </Button>
        {/* <Button color="primary" onClick={onConfirm}>Add User</Button> */}
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
