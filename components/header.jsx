export default function Header() {
    return (
        <header role="banner" className="w_inherit">
    <div className="header_top_part">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 fs_small color_light fw_light t_xs_align_c">
            <b className="scheme_color">Free shipping</b> on orders over $100. Need Help? <b className="scheme_color">866.526.3979</b>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 t_align_r t_xs_align_c">
            <nav className="d_inline_b">
              <ul className="hr_list second_font si_list fs_small">
                <li><a className="sc_hover tr_delay" href="account.html">My Account</a></li>
                <li><a className="sc_hover tr_delay" href="orders_list.html">Orders List</a></li>
                <li><a className="sc_hover tr_delay" href="wishlist.html">Wishlist</a></li>
                <li><a className="sc_hover tr_delay" href="checkout.html">Checkout</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <hr/>
    <div className="header_middle_part t_xs_align_c">
      <div className="container">
        <div className="flex align-items-center">
          <div className="col-lg-4 col-md-4 col-sm-4 d_table_cell d_xs_block f_none v_align_m m_xs_bottom_15">
            <a href="index.html" className="d_inline_b">
              <img src="images/logo.png" alt=""/>
            </a>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8 d_table_cell d_xs_block f_none v_align_m">
            <div className="clearfix">
              <div className="clearfix f_right f_xs_none d_xs_inline_b m_xs_bottom_15 t_xs_align_l">
                <div className="f_right relative transform3d">
                  <button className="button_type_1 tr_all second_font color_dark grey state_2 fs_small" data-open-dropdown="#currency">&#36;<i className="fa fa-angle-down d_inline_m m_left_25"></i></button>
                  <ul id="currency" data-show="wicket" data-hide="wicketout" className="sub_menu dropdown fs_medium bg_grey_light second_font animated">
                    <li>
                      <a href="#" className="sc_hover">
                        &#36; US Dollar
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_hover">
                        &#163; Pound Sterling
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_hover">
                        &#8364; Euro
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="f_right m_right_3 relative transform3d">
                  <button className="button_type_1 tr_all second_font color_dark grey state_2" data-open-dropdown="#language">
                    <img src="images/flag_en.jpg" alt="" className="d_inline_m m_right_10"/><i className="fa fa-angle-down d_inline_m fs_small"></i>
                  </button>
                  <ul id="language" data-show="wicket" data-hide="wicketout" className="sub_menu dropdown fs_medium bg_grey_light second_font animated">
                    <li>
                      <a href="#" className="sc_hover">
                        <img src="images/flag_en.jpg" alt="" className="d_inline_m m_right_7"/>
                        English
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_hover">
                        <img src="images/flag_g.jpg" alt="" className="d_inline_m m_right_7"/>
                        German
                      </a>
                    </li>
                    <li>
                      <a href="#" className="sc_hover">
                        <img src="images/flag_s.jpg" alt="" className="d_inline_m m_right_7"/>
                        Spanish
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="f_right m_right_3 relative transform3d">
                  <button className="button_type_1 tr_all second_font color_dark grey state_2" data-open-dropdown="#login"><i className="fa fa-user d_inline_m m_right_5"></i> <span className="fs_small">Login</span></button>
                  <div id="login" data-show="fadeInUp" data-hide="fadeOutDown" className="dropdown bg_grey_light login_dropdown animated">
                    <form className="m_bottom_15">
                      <ul>
                        <li className="m_bottom_15">
                          <label for="username" className="second_font m_bottom_4 d_inline_b fs_medium">Username</label>
                          <input type="text" name="" id="username" className="w_full tr_all"/>
                        </li>
                        <li className="m_bottom_20">
                          <label for="password" className="second_font m_bottom_4 d_inline_b fs_medium">Password</label>
                          <input type="password" name="" id="password" className="w_full tr_all"/>
                        </li>
                        <li className="m_bottom_20">
                          <input type="checkbox" name="" id="remember_me"/>
                          <label for="remember_me" className="second_font fs_medium">Remember me</label>
                        </li>
                        <li>
                          <button className="t_align_c tt_uppercase w_full second_font d_block fs_medium button_type_2 lbrown tr_all">Log In</button>
                        </li>
                      </ul>
                    </form>
                    <div className="m_bottom_14 t_align_c">
                      <a href="#" className="second_font sc_hover fs_small">Forgot your password?</a><br/>
                      <a href="#" className="second_font sc_hover fs_small">Forgot your username?</a>
                    </div>
                    <hr className="divider_white m_bottom_25"/>
                    <h5 className="color_dark tt_uppercase second_font t_align_c m_bottom_15 fw_light">New Customer?</h5>
                    <a href="#" role="button" className="button_type_2 tt_uppercase fs_medium second_font d_block t_align_c black state_2">Create An Account</a>
                  </div>
                </div>
              </div>
              <form role="search" className="relative f_right f_xs_none m_right_3 db_xs_centered button_in_input">
                <input type="text" name="" tabindex="1" placeholder="Search" className="fs_medium color_light fw_light w_full tr_all"/>
                <button className="color_dark tr_all color_lbrown_hover"><i className="fa fa-search d_inline_m"></i></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="header_bottom_part bg_white w_inherit">
      <div className="container">
        <hr className="divider_black"/>
        <div className="row">
          <div className="col-lg-9 col-md-9">
            <button id="mobile_menu_button" className="vc_child d_xs_block db_xs_centered d_none m_bottom_10 m_top_15 bg_lbrown color_white tr_all"><i className="fa fa-navicon d_inline_m"></i></button>
            <nav role="navigation" className="d_xs_none">
              <ul className="main_menu relative hr_list second_font fs_medium">
                <li className="current">
                  <a href="index.html" className="tt_uppercase tr_delay">Home <i className="fa fa-caret-down tr_inherit d_inline_m m_left_5"></i></a>
                  <ul className="sub_menu bg_grey_light tr_all">
                    <li className="current"><a href="index.html">Home v1</a></li>
                    <li><a href="index_v2.html">Home v2</a></li>
                    <li><a href="index_v3.html">Home v3</a></li>
                    <li><a href="index_v4.html">Home v4</a></li>
                  </ul>
                </li>
                <li>
                  <a href="index.html" className="tt_uppercase tr_delay">Sliders <i className="fa fa-caret-down tr_inherit d_inline_m m_left_5 m_md_left_2"></i></a>
                  <ul className="sub_menu bg_grey_light tr_all">
                    <li><a href="index_v4.html">Revolution</a></li>
                    <li><a href="index_v3.html">Flex</a></li>
                    <li><a href="index.html">Layer</a></li>
                    <li><a href="index_v2.html">Royal</a></li>
                  </ul>
                </li>
                <li>
                  <a className="tt_uppercase tr_delay">Shop <i className="fa fa-caret-down tr_inherit d_inline_m m_left_5"></i></a>
                  <div className="mega_menu bg_grey_light tr_all">
                    <div className="row">
                      <section className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_15">
                        <h6 className="color_dark m_bottom_13"><b className="second_font ">Living Rooms</b></h6>
                        <img src="images/mega_menu_img_1.jpg" alt="" className="m_bottom_3"/>
                        <ul className="mega_menu_list">
                          <li><a href="#" className="d_block sc_hover tr_delay">Sofas</a></li>
                          <li><a href="#" className="d_block sc_hover tr_delay">Chairs</a></li>
                          <li><a href="#" className="d_block sc_hover tr_delay">Ottomans</a></li>
                        </ul>
                      </section>
                      <section className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_15">
                        <h6 className="color_dark m_bottom_13"><b className="second_font ">Bedrooms</b></h6>
                        <img src="images/mega_menu_img_2.jpg" alt="" className="m_bottom_3"/>
                        <ul className="mega_menu_list">
                          <li><a href="#" className="d_block sc_hover tr_delay">Beds</a></li>
                          <li><a href="#" className="d_block sc_hover tr_delay">Dressers/Chests</a></li>
                          <li><a href="#" className="d_block sc_hover tr_delay">Nightstands</a></li>
                        </ul>
                      </section>
                      <section className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_15">
                        <h6 className="color_dark m_bottom_13"><b className="second_font ">Dining Rooms</b></h6>
                        <img src="images/mega_menu_img_3.jpg" alt="" className="m_bottom_3"/>
                        <ul className="mega_menu_list">
                          <li><a href="#" className="d_block sc_hover tr_delay">Tables</a></li>
                          <li><a href="#" className="d_block sc_hover tr_delay">Dining Chairs</a></li>
                          <li><a href="#" className="d_block sc_hover tr_delay">China Cabinets</a></li>
                        </ul>
                      </section>
                      <section className="col-lg-3 col-md-3 col-sm-3 m_xs_bottom_15">
                        <h6 className="color_dark m_bottom_13"><b className="second_font ">Home Office</b></h6>
                        <img src="images/mega_menu_img_4.jpg" alt="" className="m_bottom_3"/>
                        <ul className="mega_menu_list">
                          <li><a href="#" className="d_block sc_hover tr_delay">Desks &amp; Tables</a></li>
                          <li><a href="#" className="d_block sc_hover tr_delay">Office Chairs</a></li>
                          <li><a href="#" className="d_block sc_hover tr_delay">Workspace Storage</a></li>
                        </ul>
                      </section>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="portfolio_1_column_with_sidebar.html" className="tt_uppercase tr_delay">Portfolio <i className="fa fa-caret-down tr_inherit d_inline_m m_left_5 m_md_left_2"></i></a>
                  <ul className="sub_menu bg_grey_light tr_all">
                    <li>
                      <a href="portfolio_1_column_with_sidebar.html">Grid</a>
                      <ul className="sub_menu bg_grey_light tr_all">
                        <li><a href="portfolio_1_column_with_sidebar.html">1 column with sidebar</a></li>
                        <li><a href="portfolio_2_columns.html">2 columns</a></li>
                        <li><a href="portfolio_3_columns.html">3 columns</a></li>
                        <li><a href="portfolio_3_columns_with_sidebar.html">3 columns with sidebar</a></li>
                        <li><a href="portfolio_4_columns.html">4 columns</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="portfolio_masonry.html">Masonry</a>
                      <ul className="sub_menu bg_grey_light tr_all">
                        <li><a href="portfolio_masonry.html">Masonry</a></li>
                        <li><a href="portfolio_masonry_full_width.html">Full width masonry</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="portfolio_single_project_v1.html">Single project pages</a>
                      <ul className="sub_menu bg_grey_light tr_all">
                        <li><a href="portfolio_single_project_v1.html">Single project page v1</a></li>
                        <li><a href="portfolio_single_project_v2.html">Single project page v2</a></li>
                        <li><a href="portfolio_single_project_v3.html">Single project page v3</a></li>
                        <li><a href="portfolio_single_project_video_list.html">Single project with video list</a></li>
                        <li><a href="portfolio_single_project_video_slider.html">Single project with video slider</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="pages_category_grid.html" className="tt_uppercase tr_delay">Pages <i className="fa fa-caret-down tr_inherit d_inline_m m_left_5 m_md_left_2"></i></a>
                  <ul className="sub_menu bg_grey_light tr_all">
                    <li><a href="pages_category_grid.html">Category page v1</a></li>
                    <li><a href="pages_category_list.html">Category page v2</a></li>
                    <li><a href="pages_deals_of_the_day.html">Category page v3</a></li>
                    <li><a href="pages_product_v1.html">Product page v1</a></li>
                    <li><a href="pages_product_v2.html">Product page v2</a></li>
                    <li><a href="pages_product_v3.html">Product page v3</a></li>
                    <li><a href="pages_wishlist.html">Wishlist</a></li>
                    <li><a href="pages_compare_products.html">Compare</a></li>
                    <li><a href="pages_shopping_cart.html">Shopping cart</a></li>
                    <li><a href="pages_checkout.html">Checkout</a></li>
                    <li><a href="pages_manufacturers.html">Manufacturers</a></li>
                    <li><a href="pages_manufacturer.html">Manufacturer page</a></li>
                    <li><a href="pages_orders_list.html">Orders list</a></li>
                    <li><a href="pages_order_page.html">Order page</a></li>
                    <li><a href="pages_about.html">About us</a></li>
                    <li><a href="page_404.html">404 page</a></li>
                  </ul>
                </li>
                <li>
                  <a href="features_elements.html" className="tt_uppercase tr_delay">Features <i className="fa fa-caret-down tr_inherit d_inline_m m_left_5 m_md_left_2"></i></a>
                  <ul className="sub_menu bg_grey_light tr_all">
                    <li><a href="features_elements.html">Elements</a></li>
                    <li><a href="features_typography.html">Typography</a></li>
                    <li><a href="features_columns.html">Columns</a></li>
                    <li><a href="index_rtl.html">Rtl layout</a></li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html" className="tt_uppercase tr_delay">Blog <i className="fa fa-caret-down tr_inherit d_inline_m m_left_5 m_md_left_2"></i></a>
                  <ul className="sub_menu bg_grey_light tr_all">
                    <li><a href="blog.html">Blog page</a></li>
                    <li><a href="blog_post.html">Blog post</a></li>
                    <li><a href="blog_post_video.html">Blog video post</a></li>
                  </ul>
                </li>
                <li><a href="contact.html" className="tt_uppercase tr_delay">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 col-md-3 clearfix t_sm_align_c">
            <ul className="hr_list si_list shop_list f_right f_sm_none d_sm_inline_b t_sm_align_l">
              <li>
                <a href="#" className="color_lbrown_hover vc_child">
                  <span className="d_inline_m">
                    <i className="fa fa-heart fs_large"></i><sup className="color_dark">7</sup>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="color_lbrown_hover vc_child">
                  <span className="d_inline_m">
                    <i className="fa fa-arrow-right fs_small"></i><i className="fa fa-arrow-left fs_small"></i><sup className="color_dark">2</sup>
                  </span>
                </a>
              </li>
              <li className="relative open_mini_shopping_cart">
                <button className="color_dark active_lbrown tr_all" data-open-dropdown="#shopping_cart">
                  <i className="fa fa-shopping-cart fs_large"></i><sup>3</sup>
                  <b className="second_font fs_small d_inline_b m_left_10">$355</b>
                </button>
                <div id="shopping_cart" data-show="fadeInUp" data-hide="fadeOutDown" className="bg_grey_light dropdown animated">
                  <div className="sc_header fs_small fw_light">Recently added item(s)</div>
                  <hr className="divider_white"/>
                  <ul className="shopping_cart_list m_bottom_4">
                    <li className="relative">
                      <div className="clearfix lh_small">
                        <a href="#" className="f_left m_right_10 d_block"><img src="images/sc_img_1.jpg" alt=""/></a>
                        <a href="#" className="fs_medium second_font color_dark sc_hover d_block m_bottom_4">Cursus eleifend elit aenean</a>
                        <p className="fs_medium">1 x <b className="color_dark">$499.00</b></p>
                      </div>
                      <hr className="divider_white m_top_15 m_bottom_0"/>
                      <span className="close fs_small color_light tr_all color_dark_hover fw_light">x</span>
                    </li>
                    <li className="relative">
                      <div className="clearfix lh_small">
                        <a href="#" className="f_left m_right_10 d_block"><img src="images/sc_img_2.jpg" alt=""/></a>
                        <a href="#" className="fs_medium second_font color_dark sc_hover d_block m_bottom_4">Auctor wisi et urna</a>
                        <p className="m_bottom_4 fs_medium">1 x <b className="color_dark">$1,599.00</b></p>
                        <ul className="fw_light fs_small lh_small">
                          <li>Size: <span className="color_dark">2-Seat Sofa</span>,</li>
                          <li>Color: <span className="color_dark">Red</span></li>
                        </ul>
                      </div>
                      <hr className="divider_white m_top_15 m_bottom_0"/>
                      <span className="close fs_small color_light tr_all color_dark_hover fw_light">x</span>
                    </li>
                    <li className="relative">
                      <div className="clearfix lh_small">
                        <a href="#" className="f_left m_right_10 d_block"><img src="images/sc_img_3.jpg" alt=""/></a>
                        <a href="#" className="fs_medium second_font color_dark sc_hover d_block m_bottom_4">Aliquam erat volut</a>
                        <p className="fs_medium">2 x <b className="color_dark">$99.00</b></p>
                      </div>
                      <hr className="divider_white m_top_15 m_bottom_0"/>
                      <span className="close fs_small color_light tr_all color_dark_hover fw_light">x</span>
                    </li>
                  </ul>
                  <ul className="fs_medium second_font color_dark m_bottom_15">
                    <li><span className="d_inline_b total_title">Tax:</span><span className="fw_light">$0.00</span></li>
                    <li><span className="d_inline_b total_title">Discount:</span><span className="fw_light">$37.00</span></li>
                    <li><b><span className="d_inline_b total_title">Total:</span>$999.00</b></li>
                  </ul>
                  <a href="#" role="button" className="button_type_2 tt_uppercase fs_medium second_font d_block t_align_c black state_2 m_bottom_5">View Cart</a>
                  <a href="#" role="button" className="t_align_c tt_uppercase w_full second_font d_block fs_medium button_type_2 lbrown tr_all">Checkout</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
    )
}