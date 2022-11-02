import { EditOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Form, message, Modal, Progress, UploadFile } from 'antd';
import Upload, { UploadProps } from 'antd/lib/upload/Upload';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/configStore';
import { getLocationApi } from '../../redux/reducer/locationReducer';
import { http } from '../../utils/setting';

type Props = {
  id: number;
  defaultImage: string;
};

export default function ModalUploadLocation({ id, defaultImage }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState<UploadFile[]>([
    { uid: '-1', name: 'imgDefault.png', status: 'done', url: defaultImage },
  ]);
  const [progress, setProgress] = useState(0);
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

  const customRequest: UploadProps['customRequest'] = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    const fmData = new FormData();
    const config = {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (event: any) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    fmData.append('formFile', file);
    try {
      const res = await http.post(
        `https://airbnbnew.cybersoft.edu.vn/api/vi-tri/upload-hinh-vitri?maViTri=${id}`,
        fmData,
        config
      );
      onSuccess('Ok');
      // console.log('server res: ', res);
      setFileList([
        {
          uid: res.data.content.id,
          name: `${res.data.content.tenViTri}.jpg`,
          url: res.data.content.hinhAnh,
        },
      ]);
      dispatch(getLocationApi());
    } catch (err) {
      console.log('Eroor: ', err);
      const error = new Error('Some error');
      onError({ err });
    }
  };

  const props: UploadProps = {
    fileList: fileList,
    onChange(info) {
      // if (info.file.status !== 'uploading') {
      //   console.log(info.file, info.fileList);
      // }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    customRequest,
    onRemove(file) {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    listType: 'picture',
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
        width={500}
      >
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        {/* {progress > 0 ? <Progress percent={progress} /> : null} */}
      </Modal>
    </div>
  );
}
