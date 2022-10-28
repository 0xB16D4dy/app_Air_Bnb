import { Form, Input, Button, Avatar, Comment } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/configStore';
import { addCommentApi } from '../../redux/reducer/RoomReducer';
import { getStoreJson, USER_INFO } from '../../utils/setting';

type Props = {
  maPhong: string | undefined;
};

const { TextArea } = Input;

interface EditorProps {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  submitting: boolean;
  value: string;
}

const Editor = ({ onChange, onSubmit, submitting, value }: EditorProps) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType='submit'
        loading={submitting}
        onClick={onSubmit}
        type='primary'
        className='btn-add-comment'
      >
        Add Comment
      </Button>
    </Form.Item>
  </>
);

export default function DetailComment({ maPhong }: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');
  const userInfo = getStoreJson(USER_INFO);
  const dispatch: AppDispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      const data = {
        maPhong: parseInt(maPhong as string),
        maNguoiBinhLuan: userInfo.id,
        noiDung: value,
        saoBinhLuan: 5,
        ngayBinhLuan: moment().format('DD/MM/YYYY'),
      };
      dispatch(addCommentApi(data));
    }, 1000);
  };

  return (
    <>
      <div className='divider-content'></div>
      <h3 className='comment-title'>Bình Luận</h3>
      <Comment
        avatar={<Avatar src={userInfo.avatar} alt={userInfo.name} />}
        content={
          <Editor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </>
  );
}
