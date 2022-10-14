import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { FormOutlined } from '@ant-design/icons';

export default function ModalAddAdmin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='modal-add-admin'>
      <Button
        type='primary'
        htmlType='button'
        className='btn-add-admin'
        icon={<FormOutlined />}
        onClick={showModal}
      >
      </Button>
      <Modal
        title='Basic Modal'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
