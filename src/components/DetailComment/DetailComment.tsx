import { Form, Input, Button, Avatar, Comment, List } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { CommentItem } from '../DetailReview/DetailReview';


type Props = {
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

export default function DetailComment({}: Props) {
  const [submitting, setSubmitting] = useState(false);
  const [comments, setComments] = useState<CommentItem[]>([]);
  const CommentList = ({ comments }: { comments: CommentItem[] }) => (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout='horizontal'
      renderItem={(props) => <Comment {...props} />}
    />
  );
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
      setComments([
        ...comments,
        {
          author: 'Han Solo',
          avatar: 'https://joeschmoe.io/api/v1/random',
          content: <p>{value}</p>,
          datetime: moment('2016-11-22').fromNow(),
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {comments.length > 0 && <CommentList comments={comments} />}
      <div className='divider-content'></div>
      <h3 className='comment-title'>Bình Luận</h3>
      <Comment
        avatar={
          <Avatar src='https://joeschmoe.io/api/v1/random' alt='Han Solo' />
        }
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
