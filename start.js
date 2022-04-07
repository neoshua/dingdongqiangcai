var fl = true
threads.start(function() {
  //选择时间
  while ( true ) {
   	id("vp_dialog_select_time_content").findOne().children().forEach(child => {
      var j = 1;
			var target = child.findOne(id("rv_selected_hour")).children().forEach(timechild => {
         timechild.click() 
      });
		});
    
    //如果没有选中，需要返回重新进入去结算
    //判断是否有选择时间的框框
    if(id("tv_dialog_select_time_title").exists()){
      //如果存在需要关闭选时间框
      id("iv_dialog_select_time_close").findOne().click()
      //返回购物车
      id("iv_order_back").findOne().click()
  		fl = false
		}
  }
});
threads.start(function() {
  //点击购物车
  while (true) {
    sleep(2)
    id("bottom_style_two").waitFor()
    log("直接点击支付")
    press(883,2284, 2)
    
  }
});

threads.start(function() {
  //点击购物车
  while (true) {
    log('进入购物车')
   	id("rl_car_layout").waitFor();
		id("rl_car_layout").findOne().click()
    
  }
});
threads.start(function() {
  //结算
   while (true) {
       log('准备结算')
     id("vg_car").waitFor();
     id("vg_car").findOne().children().forEach(child => {
			var target = child.findOne(id("btn_submit"));
			target.click();
		 });
     fl = true
   }
});
threads.start(function() {
  //支付
  while (fl) {
    log('111准备支付')
    id("tv_submit").waitFor()
//    	id("tv_submit").findOne().click()
    press(883,2284, 2)
  }
});
threads.start(function() {
  //支付
  while (true) {
    log('222准备支付')
    id("ll_reload_action").findOne().click()
  }
});




