import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from '@ant-design/icons';
import { List, Tooltip, Comment, Button } from 'antd';
import React, { createElement, useEffect, useState } from 'react';
import DetailComment from '../DetailComment/DetailComment';

type Props = {};

export interface CommentItem {
  author: string;
  avatar: string;
  content: React.ReactNode;
  datetime: string;
}

export default function DetailReview({}: Props) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<string | null>(null);
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };
  const data = [
    {
      actions: [
        <Tooltip key='comment-basic-like' title='Like'>
          <span onClick={like}>
            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className='comment-action' style={{ paddingLeft: '8px' }}>
              {likes}
            </span>
          </span>
        </Tooltip>,
        <Tooltip key='comment-basic-dislike' title='Dislike'>
          <span onClick={dislike}>
            {React.createElement(
              action === 'disliked' ? DislikeFilled : DislikeOutlined
            )}
            <span className='comment-action' style={{ paddingLeft: '8px' }}>
              {dislikes}
            </span>
          </span>
        </Tooltip>,
        <span key='comment-list-reply-to-0'>Reply to</span>,
      ],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title='2016-11-22 11:22:33'>
          <span>8 hours ago</span>
        </Tooltip>
      ),
    },
    {
      actions: [
        <Tooltip key='comment-basic-like' title='Like'>
          <span onClick={like}>
            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className='comment-action' style={{ paddingLeft: '8px' }}>
              {likes}
            </span>
          </span>
        </Tooltip>,
        <Tooltip key='comment-basic-dislike' title='Dislike'>
          <span onClick={dislike}>
            {React.createElement(
              action === 'disliked' ? DislikeFilled : DislikeOutlined
            )}
            <span className='comment-action' style={{ paddingLeft: '8px' }}>
              {dislikes}
            </span>
          </span>
        </Tooltip>,
        <span key='comment-list-reply-to-0'>Reply to</span>,
      ],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title='2016-11-22 10:22:33'>
          <span>9 hours ago</span>
        </Tooltip>
      ),
    },
    {
      actions: [
        <Tooltip key='comment-basic-like' title='Like'>
          <span onClick={like}>
            {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
            <span className='comment-action' style={{ paddingLeft: '8px' }}>
              {likes}
            </span>
          </span>
        </Tooltip>,
        <Tooltip key='comment-basic-dislike' title='Dislike'>
          <span onClick={dislike}>
            {React.createElement(
              action === 'disliked' ? DislikeFilled : DislikeOutlined
            )}
            <span className='comment-action' style={{ paddingLeft: '8px' }}>
              {dislikes}
            </span>
          </span>
        </Tooltip>,
        <span key='comment-list-reply-to-0'>Reply to</span>,
      ],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high
          quality design resources (Sketch and Axure), to help people create
          their product prototypes beautifully and efficiently...
          <br />
          <div className='btn btn-view-more'>Tìm hiểu thêm</div>
        </p>
      ),
      datetime: (
        <Tooltip title='2016-11-22 10:22:33'>
          <span>9 hours ago</span>
        </Tooltip>
      ),
    },
  ];

  useEffect(() => {
    setInitLoading(false);
  }, []);

  const onLoadMore = () => {
    setLoading(true); 
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const loadMore =
    !initLoading && !loading ? (
      <div className='wrapper-btn-load-more'>
        <Button onClick={onLoadMore} style={{}} className='btn btn-load-more'>
          Hiển thị tất cả 27 đánh giá
        </Button>
      </div>
    ) : null;

  return (
    <div className='wrapper-review'>
      <h3 className='review-title'>
        <div className='icon-star'>
          <i className='fa-solid fa-star'></i>
        </div>
        <div className='content-title'>4,69 · 27 đánh giá</div>
      </h3>
      <div className='review-statics'>
        <div className='row'>
          <div className='col-6'>
            <div className='item'>
              <div className='text-item'>Mức độ sạch sẽ</div>
              <div className='level-item'>
                <div className='status-bar'>
                  <span className='status'></span>
                </div>
                <div className='number-level'>4.8</div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='item'>
              <div className='text-item'>Giao tiếp</div>
              <div className='level-item'>
                <div className='status-bar'>
                  <span className='status'></span>
                </div>
                <div className='number-level'>4.8</div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='item'>
              <div className='text-item'>Nhận phòng</div>
              <div className='level-item'>
                <div className='status-bar'>
                  <span className='status'></span>
                </div>
                <div className='number-level'>4.8</div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='item'>
              <div className='text-item'>Độ chính xác</div>
              <div className='level-item'>
                <div className='status-bar'>
                  <span className='status'></span>
                </div>
                <div className='number-level'>4.8</div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='item'>
              <div className='text-item'>Vị trí</div>
              <div className='level-item'>
                <div className='status-bar'>
                  <span className='status'></span>
                </div>
                <div className='number-level'>4.8</div>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='item'>
              <div className='text-item'>Giá trị</div>
              <div className='level-item'>
                <div className='status-bar'>
                  <span className='status'></span>
                </div>
                <div className='number-level'>4.8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <List
        className='comment-list'
        // header={`${data.length} replies`}
        loadMore={loadMore}
        grid={{ gutter: 4, column: 2, xs: 1, sm: 1, md: 2 }}
        itemLayout='vertical'
        dataSource={data}
        renderItem={(item) => (
          <li className='wrapper-comment'>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
        <div className='detail__comment'>
          <DetailComment />
        </div>
    </div>
  );
}
