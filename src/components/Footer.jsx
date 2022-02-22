const Footer = () =>{
    return(
    <footer class="footer-section">
    <div class="container">
      <div class="footer-cta mt-2">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-6" style={{textAlign:"left"}}>
            <h4>Công Ty TNHH DESIGN24</h4>
            <p class="mt-3">TP.HCM: 302A Nguyễn Thượng Hiền, Phường 5, Quận Phú Nhuận</p>
            <p>CẦN THƠ: 151/73 Trần Hoàng Na, Phường Hưng Lợi, Quận Ninh Kiều</p>
            <p>HOTLINE: 0784.888.009 - 0704.888.009</p>
            <p>EMAIL:</p>
            <a href="http://online.gov.vn/Home/WebDetails/77577">
              <img alt="" src="https://design24.vn/public/image/logoSaleNoti.png" width="40%" height="90px"/></a>
            </div>
            <div class="col-md-3 col-sm-3 col-xs-3 mt-3" style={{textAlign:"left"}}>
              <p>
                <a href="/chinhsach/baohanh.html" target="_blank">Chính sách bảo hành</a>
              </p>
              <p>
                <a href="/chinhsach/baomat.html" target="_blank">Chính sách bảo mật</a>
              </p>
              <p>
                <a href="/chinhsach/thanhtoan.html" target="_blank">Chính sách thanh toán</a>
              </p>
              <p> 
                <a href="/chinhsach/sudung.html" target="_blank">Quy định sử dụng dịch vụ</a>
              </p>
            </div>
            {/* <div class="col-md-3 col-sm-3 col-xs-3 ">
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwww.design24.vn&amp;tabs=timeline&amp;width=340&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId=416554929332146" width="340" height="130" scrolling="no" frameborder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" style="border: none; overflow: hidden;"></iframe>
            </div> */}
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Giấy chứng nhận Đăng ký Kinh doanh số 1801676144 do Sở Kế hoạch và Đầu tư Thành phố Cần Thơ cấp ngày 20/7/2020</p>
      </div>
    </footer> 
    )
}
export default Footer