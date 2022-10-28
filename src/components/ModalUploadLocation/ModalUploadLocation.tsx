import { EditOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/configStore';

export default function ModalUploadLocation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (e: any) => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='modal-upload'>
      <Button
        icon={<EditOutlined />}
        type='text'
        style={{ color: '#1890ff' }}
        onClick={showModal}
      ></Button>
      <Modal
        title='Upload image location'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={700}
      >
        content
      </Modal>
    </div>
  );
}
