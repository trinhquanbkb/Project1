import React from 'react'
import { Carousel, Button } from 'antd';
import { NavLink } from 'react-router-dom';


export default function IndexUser() {

  const contentStyle = {
    width: '100%',
    height: '660px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <div style={{ marginBottom: '100px' }}>
      <Carousel autoplay>
        <div style={contentStyle}>
          <div style={{ backgroundImage: 'url("./carousel/scroll1.jpg")', backgroundSize: '100% 100%', height: '660px' }}>
            <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '160px', boxSizing: 'border-box', color: 'white', fontWeight: '600', fontSize: '36px', width: '65%' }}><span style={{ color: 'red', fontWeight: '600', fontSize: '36px' }}>Thư viện</span> này là nơi dành cho các bạn sinh viên có thể nghiên cứu và học thêm những kiến thức bổ ích.</p>
            <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px', boxSizing: 'border-box', color: 'white', fontWeight: '400', fontSize: '18px', width: '65%' }}>Được thành lập từ năm 1956, ngay sau ngày thành lập trường và trải qua quá trình xây dựng và phát triển thư viện đã có nhiều đóng góp quan trọng vào việc đào tạo đội ngũ cán bộ khoa học kỹ thuật đông đảo, đóng góp tích cực vào sự nghiệp phát triển kinh tế - khoa học - kỹ thuật của đất nước.</p>
            <div style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px' }}>
              <Button ghost ><NavLink style={{ marginTop: '-6px' }} className="nav-link" to="/userPage/introduce">Xem thêm</NavLink></Button>
            </div>
          </div>
        </div>
        <div style={contentStyle}>
          <div style={{ backgroundImage: 'url("./carousel/scroll2.jpg")', backgroundSize: '100% 105%', height: '660px' }}>
            <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '160px', boxSizing: 'border-box', color: 'white', fontWeight: '600', fontSize: '36px', width: '65%' }}><span style={{ color: 'red', fontWeight: '600', fontSize: '36px' }}>Thư viện</span> này là nơi dành cho các bạn sinh viên có thể nghiên cứu và học thêm những kiến thức bổ ích.</p>
            <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px', boxSizing: 'border-box', color: 'white', fontWeight: '400', fontSize: '18px', width: '65%' }}>Được thành lập từ năm 1956, ngay sau ngày thành lập trường và trải qua quá trình xây dựng và phát triển thư viện đã có nhiều đóng góp quan trọng vào việc đào tạo đội ngũ cán bộ khoa học kỹ thuật đông đảo, đóng góp tích cực vào sự nghiệp phát triển kinh tế - khoa học - kỹ thuật của đất nước.</p>
            <div style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px' }}>
              <Button ghost ><NavLink style={{ marginTop: '-6px' }} className="nav-link" to="/userPage/introduce">Xem thêm</NavLink></Button>
            </div>
          </div>
        </div>
        <div style={contentStyle}>
          <div style={{ backgroundImage: 'url("./carousel/scroll3.jpg")', backgroundSize: '100% 100%', height: '660px' }}>
            <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '160px', boxSizing: 'border-box', color: 'white', fontWeight: '600', fontSize: '36px', width: '65%' }}><span style={{ color: 'red', fontWeight: '600', fontSize: '36px' }}>Thư viện</span> này là nơi dành cho các bạn sinh viên có thể nghiên cứu và học thêm những kiến thức bổ ích.</p>
            <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px', boxSizing: 'border-box', color: 'white', fontWeight: '400', fontSize: '18px', width: '65%' }}>Được thành lập từ năm 1956, ngay sau ngày thành lập trường và trải qua quá trình xây dựng và phát triển thư viện đã có nhiều đóng góp quan trọng vào việc đào tạo đội ngũ cán bộ khoa học kỹ thuật đông đảo, đóng góp tích cực vào sự nghiệp phát triển kinh tế - khoa học - kỹ thuật của đất nước.</p>
            <div style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px' }}>
              <Button ghost ><NavLink style={{ marginTop: '-6px' }} className="nav-link" to="/userPage/introduce">Xem thêm</NavLink></Button>
            </div>
          </div>
        </div>
        <div style={contentStyle}>
          <div style={{ backgroundImage: 'url("./carousel/scroll4.jpg")', backgroundSize: '100% 112%', height: '660px' }}>
            <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '160px', boxSizing: 'border-box', color: 'white', fontWeight: '600', fontSize: '36px', width: '65%' }}><span style={{ color: 'red', fontWeight: '600', fontSize: '36px' }}>Thư viện</span> này là nơi dành cho các bạn sinh viên có thể nghiên cứu và học thêm những kiến thức bổ ích.</p>
            <p style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px', boxSizing: 'border-box', color: 'white', fontWeight: '400', fontSize: '18px', width: '65%' }}>Được thành lập từ năm 1956, ngay sau ngày thành lập trường và trải qua quá trình xây dựng và phát triển thư viện đã có nhiều đóng góp quan trọng vào việc đào tạo đội ngũ cán bộ khoa học kỹ thuật đông đảo, đóng góp tích cực vào sự nghiệp phát triển kinh tế - khoa học - kỹ thuật của đất nước.</p>
            <div style={{ textAlign: 'left', paddingLeft: '70px', paddingTop: '10px' }}>
              <Button ghost ><NavLink style={{ marginTop: '-6px' }} className="nav-link" to="/userPage/introduce">Xem thêm</NavLink></Button>
            </div>
          </div>
        </div>
      </Carousel >
    </div >
  )
}

