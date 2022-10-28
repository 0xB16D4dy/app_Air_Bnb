import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from '@ant-design/icons';
import { List, Tooltip, Comment, Button } from 'antd';
import moment from 'moment';
import React, { createElement, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import {
  CommentReviewModel,
  getCommentReviewByIdApi,
} from '../../redux/reducer/RoomReducer';
import DetailComment from '../DetailComment/DetailComment';

type Props = {
  id: string | undefined;
};

export default function DetailReview({ id }: Props) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState<string | null>(null);
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<CommentReviewModel[]>([]);
  const dispatch: AppDispatch = useDispatch();
  const { arrComment } = useSelector((state: RootState) => state.RoomReducer);

  useEffect(() => {
    if (!!arrComment) setComments(arrComment);
  }, [arrComment]);

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

  useEffect(() => {
    setInitLoading(false);
  }, []);

  useEffect(() => {
    dispatch(getCommentReviewByIdApi(parseInt(id as string)));
  }, [dispatch, id]);

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
        loading={loading}
        loadMore={loadMore}
        grid={{ gutter: 4, column: 2, xs: 1, sm: 1, md: 2 }}
        itemLayout='vertical'
        dataSource={comments}
        renderItem={(item) => {
          const date = item.ngayBinhLuan.split('/');
          let updateDate: Array<number> = [];
          for (let i in date) {
            updateDate[i] = parseInt(date[i]);
          }
          return (
            <li className='wrapper-comment'>
              <Comment
                actions={[
                  <Tooltip key='comment-basic-like' title='Like'>
                    <span onClick={like}>
                      {createElement(
                        action === 'liked' ? LikeFilled : LikeOutlined
                      )}
                      <span
                        className='comment-action'
                        style={{ paddingLeft: '8px' }}
                      >
                        {likes}
                      </span>
                    </span>
                  </Tooltip>,
                  <Tooltip key='comment-basic-dislike' title='Dislike'>
                    <span onClick={dislike}>
                      {React.createElement(
                        action === 'disliked' ? DislikeFilled : DislikeOutlined
                      )}
                      <span
                        className='comment-action'
                        style={{ paddingLeft: '8px' }}
                      >
                        {dislikes}
                      </span>
                    </span>
                  </Tooltip>,
                  <span key='comment-list-reply-to-0'>Reply to</span>,
                ]}
                author={item.tenNguoiBinhLuan}
                avatar={item.avatar}
                content={<p>{item.noiDung}</p>}
                datetime={
                  <Tooltip title={item.ngayBinhLuan}>
                    <span>{moment(updateDate,'DD/MM/YYYY').fromNow()}</span>
                  </Tooltip>
                }
              />
            </li>
          );
        }}
      />
      <div className='detail__comment'>
        <DetailComment maPhong={id} />
      </div>
    </div>
  );
}
