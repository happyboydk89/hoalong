<?php
/* Template Name: Page - Về Chúng Tôi */

get_header();
$section_1 = get_field('section_1', get_the_ID());
$section_2 = get_field('section_2', get_the_ID());
?>

<body>
  <header class="header">
    <div class="h-left">
      <div class="logo"><a href="/"><img src="<?=get_template_directory_uri()?>/img/logo-blue.png" alt="HOA LONG INVEST"></a></div>
      <p class="mck">Mã CK: HLI</p>
    </div>
    <div class="btn__menu">
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <nav class="gnav">
      <ul class="gnav-main">
        <li class="active"><a href="/ve-chung-toi">Về chúng tôi</a>
          <ul class="submenu">
            <li><a href="/gioi-thieu-chung">Giới thiệu chung</a></li>
            <li><a href="/thanh-tuu">Thành tựu</a></li>
            <li><a href="/doi-tac-chien-luoc">Đối tác chiến lược</a></li>
            <li><a href="/co-cau-to-chuc">Cơ cấu tổ chức</a></li>
          </ul>
        </li>
        <li><a href="/linh-vuc-dau-tu">Lĩnh vực đầu tư</a>
          <ul class="submenu">
            <li><a href="/ha-tang-khu-cong-nghiep">Hạ tầng KCN</a></li>
            <li><a href="/dau-tu-nha-xuong-cho-thue">Đầu tư nhà xưởng cho thuê</a></li>
            <li><a href="/lien-ket-dau-tu">Liên kết đầu tư</a></li>
          </ul>
        </li>
        <li><a href="/hoa-long-platform">Hoà Long platform</a></li>
        <li><a href="/quan-he-co-dong">Quan hệ cổ đông</a>
          <ul class="submenu">
            <li><a href="/dieu-le-quy-che">Điều lệ - Quy chế</a></li>
            <li><a href="/bao-cao-tai-chinh">Báo cáo tài chính</a></li>
            <li><a href="/cong-bo-thong-tin">Công bố thông tin</a></li>
            <li><a href="/tai-lieu-hop-dhdcd">Tài liệu họp ĐHĐCĐ</a></li>
          </ul>
        </li>
        <li><a href="/tin-hoa-long">Tin hoà long</a>
          <ul class="submenu">
            <li><a href="/category/su-kien">Sự kiện</a></li>
            <li><a href="/tin-tuc-bao-chi">Tin tức báo chí</a></li>
            <li><a href="/hoat-dong-hli">Hoạt động HLI</a></li>
          </ul>
        </li>
        <li><a href="/tuyen-dung">Tuyển dụng</a>
          <ul class="submenu">
            <li><a href="/chinh-sach-nhan-su">Chính sách nhân sự</a></li>
            <li><a href="/vi-tri-tuyen-dung">Vị trí tuyển dụng</a></li>
          </ul>
        </li>
      </ul>
      <ul class="gnav-langs">
        <li><a href="#" class="green">VN</a></li>
        <li><a href="#">ENG</a></li>
      </ul>
    </nav>
    <div class="h-right">
      <ul>
        <li><a href="#" class="green">VN</a></li>
        <li><a href="#">ENG</a></li>
        <li class="search-box"><a href="#"><img src="<?=get_template_directory_uri()?>/img/search.svg" width="22" alt=""></a></li>
      </ul>
    </div>
  </header>
  <div id="fullpage" class="about-us">
    <div class="section sec0" id="section0">
      <div class="mv-text">
        <div class="mv-text-gr">
          <h2><?=$section_1['title']?></h2>
          <p class="green"><?=$section_1['subtitle']?></p>
        </div>
      </div>
      <div class="f-move wheel">
        <a class="j-down" href="#">
          <!-- <img src="/img/about/ico-scroll.svg" width="25" alt=""> -->
          <span></span>
        </a>
      </div>
    </div>
    <div class="section sec1 fp-auto-height" id="section1">
      <div class="fixscroll">
        <div class="about-main">
          <ul class="about-ttl">
            <li class="green inviewfadeInLeft"><?=$section_2['title_1']?></li>
            <li class="inviewfadeInRight"><?=$section_2['title_2']?></li>
          </ul>
          <div class="about-content inviewfadeInRight d-1">
            <div class="about-content-in">
              <?=$section_2['content']?>
            </div>
          </div>
        </div>
      </div>
      <div class="f-move">
        <a class="j-up" href="#">
          <img src="/img/pagetop.svg" width="24" alt="">
        </a>
      </div>
    </div>
    <!-- section2 -->
  </div>
  <!-- fullpage -->
  <div class="page-timeline">
    <p class="green">Về chúng tôi</p>
    <ul>
      <li><a href="/gioi-thieu-chung">01<span>Giới thiệu chung</span></a></li>
      <li><a href="/thanh-tuu">02<span>Thành tựu</span></a></li>
      <li><a href="/doi-tac-chien-luoc">03<span>Đối tác chiến lược</span></a></li>
      <li><a href="/co-cau-to-chuc">04<span>Cơ cấu tổ chức</span></a></li>
    </ul>
  </div>
  <!-- page-nav -->
  <a href="/category/su-kien" class="special-link">HOT NEWS <div class="Rbtn-over"></div>
    <div class="Rbtn-over"></div>
  </a>
  <p class="copyright">2021 <span class="blue1">HOA LONG INVEST</span> ALL RIGHTS RESERVED</p>
  <!-- CTA -->
  <div class="cta">
    <div class="cta-item">
      <div class="zalo">
        <a target="_blank" href="https://m.me/0798148168"><i class="lab la-facebook-messenger"></i></a>
      </div>
    </div>
    <div class="cta-item">
      <div class="phone">
        <a href="tel:0798148168"><i class="la la-phone" aria-hidden="true"></i></a>
        <span class="Rbtn-over"></span>
        <span class="Rbtn-over"></span>
      </div>
    </div>
  </div>
</body>

<style>
  .about-us .sec0::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: url(<?=$section_1['bg']?>) no-repeat center / cover;
    transition: all 1s ease-in-out;
    transform: scale(1.2);
    opacity: 0.9;
}
</style>

<?php

get_footer();
