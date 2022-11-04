import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer id='footer'>
      <div className='footer__wrapper'>
        <div className='container'>
          <div className='footer__content row'>
            <div className='footer__item col-md-3 col-sm-6 col-12'>
              <div className='footer__item-header'>
                <h3 className='footer__item-header-content'>Hỗ trợ</h3>
              </div>
              <div className='footer__item-body'>
                <ul className='footer__item-body-content'>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/help/home?from=footer'>
                      Trung tâm trợ giúp
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/aircover'>AirCover</a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/trust'>
                      Thông tin an toàn
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/accessibility'>
                      Hỗ trợ người khuyết tật
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19'>
                      Các tùy chọn hủy
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/d/covidsafety'>
                      Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/neighbors'>
                      Báo cáo lo ngại của hàng xóm
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer__item col-md-3 col-sm-6 col-12'>
              <div className='footer__item-header'>
                <h3 className='footer__item-header-content'>Cộng đồng</h3>
              </div>
              <div className='footer__item-body'>
                <ul className='footer__item-body-content'>
                  <li className='footer__item-body-content-text'>
                    <a href='https://vi.airbnb.org/'>
                      Airbnb.org: nhà ở cứu trợ
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.org/refugees'>
                      Hỗ trợ dân tị nạn Afghanistan
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/against-discrimination'>
                      Chống phân biệt đối xử
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer__item col-md-3 col-sm-6 col-12'>
              <div className='footer__item-header'>
                <h3 className='footer__item-header-content'>Đón tiếp khách</h3>
              </div>
              <div className='footer__item-body'>
                <ul className='footer__item-body-content'>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/host/homes?from_footer=1'>
                      Thử đón tiếp khách
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/aircover-for-hosts'>
                      AirCover cho Chủ nhà
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/resources/hosting-homes'>
                      Xem tài nguyên đón tiếp khách
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://community.withairbnb.com/t5/errors/FilterErrorHandlerPage'>
                      Truy cập diễn đàn cộng đồng
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/help/article/1397/th%C3%B4ng-tin-chung-v%E1%BB%81-cho-thu%C3%AA-ch%E1%BB%97-%E1%BB%9F'>
                      Đón tiếp khách có trách nhiệm
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer__item col-md-3 col-sm-6 col-12'>
              <div className='footer__item-header'>
                <h3 className='footer__item-header-content'>Airbnb</h3>
              </div>
              <div className='footer__item-body'>
                <ul className='footer__item-body-content'>
                  <li className='footer__item-body-content-text'>
                    <a href='https://news.airbnb.com/'>Trang tin tức</a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://www.airbnb.com.vn/2022-summer'>
                      Tìm hiểu các tính năng mới
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://news.airbnb.com/what-makes-airbnb-airbnb/'>
                      Thư ngỏ từ các nhà sáng lập
                    </a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://careers.airbnb.com/'>Cơ hội nghề nghiệp</a>
                  </li>
                  <li className='footer__item-body-content-text'>
                    <a href='https://investors.airbnb.com/home/default.aspx'>
                      Nhà đầu tư
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='footer__copyright'>
            <div className='footer__copyright-left'>
              <span className='footer__copyright-company'>
                &copy; 2022 Airbnb, Inc.
              </span>
              <span className='dot'>.</span>
              <span className='footer__copyright-privacy'>
                <a href='https://www.airbnb.com.vn/terms/privacy_policy'>
                  Quyền riêng tư
                </a>
              </span>
              <span className='dot'>.</span>
              <span className='footer__copyright-rules'>
                <a href='https://www.airbnb.com.vn/terms'>Điều khoản</a>
              </span>
              <span className='dot'>.</span>
              <span className='footer__copyright-sitemap'>
                <a href='https://www.airbnb.com.vn/sitemaps/v2'>
                  Sơ đồ trang web
                </a>
              </span>
            </div>
            <div className='footer__copyright-right'>
              <div className='footer__copyright-lang'>
                <div className='footer__copyright-icon'>
                  <img
                    src={require('../../assets/icons/global.svg').default}
                    alt='icon-global'
                    className='icon-global'
                  />
                </div>
                <div className='footer__copyright-content'>Tiếng việt (VN)</div>
              </div>
              <div className='footer__copyright-currency'>
                <div className='footer__copyright-icon'>
                  <i className='fas fa-dollar-sign' id='icon-dolar'></i>
                </div>
                <div className='footer__copyright-content'>USD</div>
              </div>
              <div className='footer__copyright-social'>
                <div className='footer__copyright-social-fb'>
                  <a href='https://www.facebook.com/airbnb'>
                    <i className='fab fa-facebook-f'></i>
                  </a>
                </div>
                <div className='footer__copyright-social-tw'>
                  <a href='https://twitter.com/airbnb'>
                    <i className='fab fa-twitter'></i>
                  </a>
                </div>
                <div className='footer__copyright-social-ig'>
                  <a href='https://www.instagram.com/airbnb/'>
                    <i className='fab fa-instagram'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
